const Crypto = require('crypto');

class BlockMiner {
	constructor() {
	    this.blockchain = [];
	}

	addToChain(block) {
        const nblock = Object.assign({}, block);
		try {
			this.blockchain.push(nblock);
		} catch (err) {
        	console.log("Unable to add block to chain: Error " + err);
        }
	}

	createBlock(block) {
		let newBlock = Object.assign({}, block);
		newBlock.blockNumber = newBlock.blockNumber+1;
		newBlock.previousHash = newBlock.hash;
		newBlock.nonce = 0;
		newBlock.timestamp = new Date().toString();
		
		try {
			newBlock = this.proofOfWork(newBlock);
			if (this.checkNewBlockIsValid(newBlock,block)) {
				this.addToChain(newBlock);
			} else {
				console.log("Invalid new block");
			}
        } catch(err) {
        	console.log("Unable to create new block: Error " + err);
        }
		return newBlock;
	}

	proofOfWork(block) {
      const { timestamp, data, blockNumber, previousHash, nonce } = block;
		let id = nonce;
		while (true) {
			block.hash = this.createHash(timestamp, data, blockNumber, previousHash, id);
			let lock = block.hash.slice(0,3);
			if (lock === "000") {
			    block.nonce = id;	
				return block;
			} else {
				id++;
			}
		}
	}

	checkNewBlockIsValid(block, previousBlock) {
		if(previousBlock.blockNumber + 1 !== block.blockNumber){
			//Invalid index
			return false;
		}else if (previousBlock.hash !== block.previousHash){
			//The previous hash is incorrect
			return false;
		}else if(!this.hashIsValid(block)){
			//The hash isn't correct
			return false;
		}
		return true;
	}

	hashIsValid(block) {
		const { timestamp, data, blockNumber, previousHash, nonce } = block;
		return (this.createHash(timestamp, data, blockNumber, previousHash, nonce) == block.hash);
	}

	createHash( timestamp, data, blockNumber, previousHash, nonce ) {
		return Crypto.createHash('SHA256').update(timestamp+data+blockNumber+previousHash+nonce).digest('hex');
	}

	static description() {
		return "Mines SHA256 hashes for blockchain data with proof of work function and blockchain validity checks"
	}
};

export default BlockMiner;
