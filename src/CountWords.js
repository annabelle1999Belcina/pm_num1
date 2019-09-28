import React,{Component} from 'react';

class CountWords extends Component{
  constructor(props){
    super(props);
      this.state={
        array:[],
        sentence:"",
        word:'',
        count:0,
        counts:0
      };
    }
    inputHandler = (e) => {
      const { sentence, word, array } = this.state;
      array.push(sentence);
      var sen = array[Math.floor(Math.random() * array.length)];
      var sSplit = sen.split(" ");
      this.setState({ count: sSplit.length });
      var cntr = 0;
      for (let i = 0; i < sSplit.length; i++) {
        if (sSplit[i] === word) {
          cntr += 1;
        }
      }
      this.setState({ occurrence: cntr });
    }
  
    render() {
      const { sentence, word, count, occurrence } = this.state;
      return (
        <div class = "container">
          <center>
            <div class ="box">
              <h1> Sentence: <input placeholder="input sentence here..."onChange={e => this.setState({ sentence: e.target.value })}></input></h1>
              <br></br>
              <h1>Words: <input placeholder="input words here..." onChange={e=> this.setState({ word: e.target.value })}></input></h1>
              <div><button onClick={event => this.inputHandler(event)}>Count</button></div>
              
              <div><h2>Inputed text: {sentence}</h2></div>
              <div><h2> words: {count}</h2></div>
              <div><h2>word occurrence:{word} : {occurrence}</h2></div>
            </div>
          </center>
        </div>
      );    
    }
  }
  export default CountWords;