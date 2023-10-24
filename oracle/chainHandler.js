const EthereumChain = require("./chain/ethereum.js");
const PolygonChain = require("./chain/polygon.js");

class ChainHandler {

    CHAIN_OBJECTS = {}

    constructor() {
        this.initChains();
    }

    initChains() {
        this.CHAIN_OBJECTS[1] = new EthereumChain();
        this.CHAIN_OBJECTS[2] = new PolygonChain();
    }

    proxy(chainID) {
        return this.CHAIN_OBJECTS[chainID];
    }

    isChainSupported(chainID) {
        return this.proxy(chainID) != undefined;
    }

    isChainActive(chainID) {
        if (!this.isChainSupported(chainID)) {
            return false;
        }

        return this.proxy(chainID).isActive();
    }

    async sendToChain(chainID, proof, proofID, hash, consensusData, ua) {
        return await this.proxy(chainID).send({
            "proof": proof,
            "hash": hash,
            "meta": consensusData,
            "ua": ua,
            "proofType" : proofID
        });
    }

}
module.exports = ChainHandler;
