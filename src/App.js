import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      list: [1,2,3,4,5,6],
      textArea: '1,2,3,4,5,6',
      searchNum: '2',
      message: ''
    }
  }
  

/*
1. User enters input array
  - set this.state.textArea to whatever is in input
2. User enters number
  - set this.state.searchNum to whatever num is
3. User presses button
  a. linear search
    - set this.state.list to this.handleArray() value
    - callback linearSearch function
    - sets this.state.message with linearSearch function
  b. binary search
    - set this.state.list to this.handleArray().sort((a,b)=>(a-b))
    - callback binarySearch function
    - sets this.state.message with binarySearch function



*/

  handleLinear(){
    console.log('Ran Linear Search');
    this.setState({
      list: this.handleArray()
    }, this.linearSearch);
  }

  linearSearch(){
    const list = this.state.list;
    const num = this.state.searchNum;
    let message ='';
    for(let i=0; i<list.length; i++){
      if(list[i]===num){
        message = `${num} was found in ${i+1} tries`;
      }
    }
    if(!message){
      message = `${num} could not be found in ${list.length} tries`;
    }
    this.setState({
      message
    })
  }


  handleBinary(){
    console.log('Ran Binary Search');
    this.setState({
      list: this.handleArray().sort((a,b)=>(a-b))
    }, ()=>{
      let bs = this.binarySearch();
      let num = this.state.searchNum;
      console.log(bs);
      if(bs.index>0){
        this.setState({
          message: `${num} was found in ${bs.count} tries`
        });
      }
    });
  }

  binarySearch(arr= this.state.list, value=this.state.searchNum, start=0, end=arr.length-1, count=1){
    console.log('hi there');
    if(start>end) return {index: -1, count};
    let index = Math.floor((start+end)/2);
    let item = arr[index];
    if(item === value){
      return {index, count};
    } else if(item < value){
      return this.binarySearch(arr, value, index+1, end, count+1);
    } else if(item > value){
      return this.binarySearch(arr, value, start, index-1, count+1);
    }
  }

  handleTextArea(e){
    const val = e.currentTarget.value;
    this.setState({
      textArea: val
    });
  }

  handleSearchNum(e){
    const val = e.currentTarget.value;
    this.setState({
      searchNum : val
    });
  }

  handleArray(){
    const list = this.state.textArea.split(' ');
    return list;
  }

  render() {
    return (
      <div className="App">
        
        <label>Input Array:</label>
        <textarea value = {this.state.textArea} type='textarea' name='array' onChange={e=>this.handleTextArea(e)}></textarea><br/>
        <label>Number</label>
        <input value={this.state.searchNum} type='number' name='number' onChange={e=>this.handleSearchNum(e)}></input><br/>
        <button onClick={()=>this.handleLinear()}>Linear Search</button>
        <button onClick={()=>this.handleBinary()}>Binary Search</button>
        <div>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default App;
