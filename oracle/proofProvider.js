const Placeholder = require("./proof_system/placeholder.js");
const ProofMarket = require("./proofMarket.js");

class ProofProvider {

    SUPPORTED_PROOF_SYSTEMS = {
        "placeholder" : 1,
        "bulletproofs" : 2,
        "halo" : 3,
    };

    proofSystemHandlObjects = {};

    constructor() {
        this.initProofSystems();
        this.pm = new ProofMarket();
    }

    initProofSystems() {
        this.proofSystemHandlObjects["placeholder"] = new Placeholder(true);
        this.proofSystemHandlObjects["bulletproofs"] = new Placeholder(false);
        this.proofSystemHandlObjects["halo"] = new Placeholder(false);
    }

    getProofIdByName(proofSystemName) {
        if (!this.checkProofSystemSupport(proofSystemName)) {
            return -1;
        }
        return this.SUPPORTED_PROOF_SYSTEMS[proofSystemName];
    }

    getSupportedProofSystems() {
        return this.SUPPORTED_PROOF_SYSTEMS;
    }
 
    proxy(proofSystemName) {
        return this.proofSystemHandlObjects[proofSystemName];
    }
 
    getActiveStatus(proofSystemName) {
        return this.checkProofSystemSupport(proofSystemName) && this.proxy(proofSystemName).isActive();
    }

    checkProofSystemSupport(proofSystemName) {
        if (this.SUPPORTED_PROOF_SYSTEMS[proofSystemName] &&
            this.proxy(proofSystemName) != NaN) {
                return true;
        }
        return false;
    }

    async requestProof(caseID, proofSystemName, consensusData) {

        const blob = this.proxy(proofSystemName).preprocess(consensusData);
        const proof = this.pm.sendProofRequest(blob);

        return proof;
    }
}

module.exports = ProofProvider;
