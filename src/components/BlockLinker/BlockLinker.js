import React from 'react';
import Block from '../Block/Block';


const BlockLinker = ( {blockchain} ) => {

	const allblocks = blockchain.map((singleBlock,i) => {
		if (singleBlock.blockNumber !== 0) {
			return (
				<div key={i}>
					<Block 
					    titleLabel={`Block Number: ${singleBlock.blockNumber}`}
					    cardColor="success"
						block={singleBlock}
					/>
				</div>
			)} else {
			return (
				<div key={i}>
					<Block 
					    titleLabel={`Genesis Block`}
					    cardColor="warning"
						block={singleBlock}
					/>
				</div>
			)}
		});
	return (
		<div>
		{allblocks}
		</div>
		);
}

export default BlockLinker; 