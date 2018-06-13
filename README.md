# React-Blockchain-Demo
React Blockchain and Material-UI Demo 
- Imagine the world of distributed energy with smart meters safely recording hourly usage readings in blockchains

This is my first post-class React app. This is NOT an Ethereum app. It was inspired by 
  1) the April 2018 1.0 release of node.js @material-ui-based components by Creative Tim - I had to modify them to fit my context
  2) a node.js implementation of Blockchain called Brewchain - http://www.darrenbeck.co.uk/blockchain/nodejs/nodejscrypto/
I created a React class BlockMiner that creates, stores, and validates the chain using the 'SHA256' hash method of Crypto.

To do's (any feedback welcome!):
  1) decide on method to implement form reset
  2) decide on controller method in order to demo the effect of breaking a chain - leave all data fields editable, so card colors 
     must instantly change from the broken data field down the chain
