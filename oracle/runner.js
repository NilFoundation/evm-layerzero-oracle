const Oracle = require("./oracle.js");
const Hardhat = require("hardhat");
const { ethers, upgrades } = require("hardhat");

// Specific implementation of Oracle runner 
// Differs depending on the purpose
// For the production use case it plays role of constant listener and message-passing 
// For testing -- sync interaction from test contract

class OracleRunner {

    requestQueue = [];
    oracle;

    constructor() {
        this.oracle = new Oracle();
    }

    async run() {
        const delay_ms = 10;

        while (true) {
            if (this.requestQueue.length != 0) {
                const req = this.requestQueue[0];
                this.requestQueue.shift();
                const packets = this.parseRequest(req);
               
                for (let i = 0; i < packets.length; ++i) {
                    const [targetChainID, consensusData, packetHash, ua] = packets[i];
                    this.oracle.processStep(targetChainID, consensusData, packetHash, ua);
                }
            }
            // delay for 10 ms to switch to another fiber
            await new Promise(resolve => setTimeout(resolve, delay_ms));
        }
    }

    // In practice, should be a part of Oracle or LZ driver (depends on the level of abstraction from chain and protocol!)
    // For the test purposes, we simplify it to the "lowest level"
    parseRequest(request) {
        const events = request.events;
        // hash of the topic
        const packetTopic = 0xe9bded5f24a4168e4f3bf44e00298c993b22376aad8c58c7dda9718a54cbea82;
        let sendRequests = [];

        for (let i = 0; i < events.length; ++i) {
            /* the topic is only one -- 0 index */
            if (events[i]["topics"][0] == packetTopic) {
                const {dstChainId, ua} = this.parsePacket(events[i]["data"]);
                sendRequests.push([dstChainId, request, ethers.utils.keccak256(events[i]["data"]), ua]);
            }
        }
        return sendRequests;
    }

    parsePacket(packet) {
        const unwrapped = ethers.utils.defaultAbiCoder.decode(
            [ 'bytes'],
            packet
        )
        /* Layer Zero packet structure */
        const [nonce, localChainId, ua, dstChainId, dstAddress, payload] = ethers.utils.defaultAbiCoder.decode(
            ['uint64', 'uint16', 'address', 'uint16', 'bytes', 'bytes'],
            unwrapped[0]
        )
        return {dstChainId, ua}
    }

    addRequest(req) {
        this.requestQueue.push(req);
    }
}

module.exports = OracleRunner;