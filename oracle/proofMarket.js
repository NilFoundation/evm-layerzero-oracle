class ProofMarket {

    makeProofRequest(consensusData) {
      const requestProof = async () => {
        const response = await fetch('https://api.proof.market.nil.foundation/_db/market/v0_0/request/', {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain',
            'Authorization': 'Basic cmVsYXllcjoxMjM='
          },
          body: JSON.stringify({
            "statement_key": "96079532",
            "input": JSON.stringify(consensusData),
            "cost": 1024,
          })
        });

        const rawData = await response.json(); //extract JSON from the http response
        return rawData["_key"]
      }
      return requestProof();
    }

    getProofStatus(key) {
      const proofStatus = async () => {
        const response = await fetch('https://api.proof.market.nil.foundation/_db/market/v0_0/request/' + key, {
          method: 'GET',
          headers: {
            'Content-Type': 'text/plain',
            'Authorization': 'Basic cmVsYXllcjoxMjM='
          },
        });

        const rawData = await response.json(); //extract JSON from the http response
        return [rawData['status'], rawData['proof_key']]
      }
      return proofStatus();
    }

    withdrawProof(proofKey) {
      const withdraw = async () => {
        const response = await fetch('https://api.proof.market.nil.foundation/_db/market/v0_0/proof/' + proofKey, {
          method: 'GET',
          headers: {
            'Content-Type': 'text/plain',
            'Authorization': 'Basic cmVsYXllcjoxMjM='
          },
        });

        const rawData = await response.json(); //extract JSON from the http response
        return rawData['proof']
      }
      return withdraw();
    }

    async sendProofRequest(consensusData) {
      console.log("Proof Market start")
      const key = await this.makeProofRequest(consensusData);
      console.log("Proof request done with request key: ", key)
      process.stdout.write("Wait proof ready")
      while ((await this.getProofStatus(key))[0] != 'completed') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        process.stdout.write(".")
      }
      console.log(".")
      console.log("Proof ready")
      const proofKey = (await this.getProofStatus(key))[1];
      console.log("Proof key: ", proofKey)
      const proof = await this.withdrawProof(proofKey);
      console.log("Proof download done")
      return proof;
    }

}

module.exports = ProofMarket;
