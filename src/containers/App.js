import React, { Component } from 'react';
import Block from '../components/Block/Block';
import AddBlockForm from '../components/AddBlockForm/AddBlockForm';
import BlockLinker from '../components/BlockLinker/BlockLinker';

import './App.css';

import BlockMiner from "../components/BlockMiner/BlockMiner";

const initialState = {
      isPending: true,
      cardColor: "warning",
      route: "genesis",
      input: "",
      currentblock: {
        timestamp: "",
        data: "Genesis Block",
        blockNumber: -1, 
        previousHash: 0,
        nonce: 0,
        hash: 0
      }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = initialState
    this.newMiner = new BlockMiner();
    this.newBlock = this.newBlock.bind(this)
    this.enterkey = this.enterkey.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onButtonSubmit = this.onButtonSubmit.bind(this)
    }

  genesis = () => {
    const { currentblock } = this.state;
    const genblock = this.newMiner.createBlock(currentblock);
    this.loadCurrentBlock(genblock);
  }

  loadCurrentBlock = (nextblock) => {
    this.setState({
      input: "",	
      currentblock: {
        timestamp: nextblock.timestamp,
        data: nextblock.data,
        blockNumber: nextblock.blockNumber,
        previousHash: nextblock.previousHash,
        nonce: nextblock.nonce,
        hash: nextblock.hash
      },
      isPending: false
    });
    this.render();
  }

  newBlock = (datum) => {
    const { currentblock } = this.state;
    currentblock.data = datum; //setState after block is hashed
    let nextblock = this.newMiner.createBlock(currentblock);
    this.loadCurrentBlock(nextblock);
    this.onRouteChange("chain");
  }
 
 enterkey (e) {
   if (e.key == 'Enter') {
     this.onButtonSubmit(e)
   } 
 }

 onInputChange (e) {
    this.setState({input: e.target.value});
  }; 
 //for when user submits new data field block in AddBlockForm
 onButtonSubmit (e) {
 	  e.preventDefault();
	  let newInput = this.state.input;
	  newInput = newInput.trim();
	  if (newInput) {
	      this.newBlock(newInput);
	      this.onRouteChange("chain");
	  }
}

//currently, user cannot start over or edit existing blocks
onRouteChange = (route) => {
    if (route === 'genesis') {
      this.setState(initialState);
    } else if (route === 'chain') {
      this.setState({route: route});
    }
 }

  componentDidMount () {
    this.genesis();
  }

  render() {
    const { cardColor, currentblock, route, isPending } = this.state;
    //const newBlock = this.newBlock;
    return isPending ?
            <h1>Loading...</h1> :
    (
      <div className='App'>
        <div className ='tc'>
          <h1 className='f2'>BlockChain Builder</h1>
        <div>
          <hr /><br />
        </div>
        <div className='blocks' >
        <nav style={{display: "flex", justifyContent:"center"}} > 
          {/*<Navigation onRouteChange={this.onRouteChange}/>*//*for when database is added*/ }
          { route === 'genesis' 
            ? <div>
                  <Block cardColor={cardColor} titleLabel="Genesis Block" block={currentblock}/>
                  <AddBlockForm 
                      input={this.state.input}
                      enterkey={this.enterkey}
                      onInputChange={this.onInputChange} 
                      onButtonSubmit={this.onButtonSubmit} 
                  />
              </div>
            
            : (route === 'chain'
               ? <div>  
                  <BlockLinker blockchain={ this.newMiner.blockchain }/>
                  <AddBlockForm 
                      input={this.state.input}
                      enterkey={this.enterkey}
                      onInputChange={this.onInputChange} 
                      onButtonSubmit={this.onButtonSubmit} 
                  />
                </div>
               : ( 
                  <div> 
               {/* route === 'signin'     database to be added
                ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>          
                : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> */}
                 </div> 
                 )
              )  
           }
           </nav>
           </div>
          </div>
      </div>
    );
  }
}

export default App;
