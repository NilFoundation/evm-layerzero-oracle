const ProofProvider = require("./proofProvider.js");
const ChainHandler = require("./chainHandler.js");

class Oracle {
    
    REQUESTS_STATUS = {
        "PENDING": 0,
        "DONE": 1,
        "CLOSED": 2,
    }

    uaSettings = {};
    requests = {};

    constructor() {
        this.proofProvider = new ProofProvider();
        this.chainHandler = new ChainHandler();
    }

    getCaseID() {
        const min = 0;
        const max = 10000000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setDefaultConfigs(ua) {
        this.uaSettings[ua] = {
            "confirmations": 0,
            "proof_system": "placeholder"
        }
    }

    async processStep(targetChainID, consensusData, packetHash, ua) {
        // generate random case id. Can be generated as hash of input parameters to be reproduced
        const caseId = this.getCaseID();

        // set default configs if not set
        if (!this.uaSettings[ua]) {
            this.setDefaultConfigs(ua);
        }

        const proofSystem = this.uaSettings[ua]["proof_system"];

        if (proofSystem == "") {
            console.error("Proof system is not set!");
            throw new Error("Proof system is not set!");
        }

        if (!this.proofProvider.getActiveStatus(proofSystem)) {
            console.error("Proof system is not active or not supported!");
            throw new Error("Proof system is not active or not supported!");
        }

        if (!this.chainHandler.isChainActive(targetChainID)) {
            console.error("Chain is not active or not supported!");
            throw new Error("Chain is not active or not supported!");
        }

        this.requests[caseId] = {
            "status": "PENDING",
            "target": targetChainID,
            "hash": packetHash,
            "proof_system": proofSystem,
            "ua": ua
        };
        
        this.passToTargetChain(caseId, consensusData);
    }

    async passToTargetChain(caseId, consensusData) {
        const proof = await this.proofProvider.requestProof(caseId, this.requests[caseId]["proof_system"], consensusData);
        this.requests[caseId]["status"] = "DONE";
        
        await this.chainHandler.sendToChain(
            this.requests[caseId]["target"], 
            proof, 
            this.proofProvider.getProofIdByName(this.requests[caseId]["proof_system"]),
            this.requests[caseId]["hash"], 
            consensusData, 
            this.requests[caseId]["ua"]
        );

        this.requests[caseId]["status"] = "CLOSED";
    }
}

module.exports = Oracle;
