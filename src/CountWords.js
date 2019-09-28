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
      <div>
        Sentence: <input placeholder="input sentence here..."onChange={e => this.setState({ sentence: e.target.value })}></input>
        &nbsp; &nbsp;
        Words: <input placeholder="input words here..." onChange={e=> this.setState({ word: e.target.value })}></input>
        <div>
         <button onClick={event => this.inputHandler(event)}>Count</button></div>
        <div>
        <br/><br/>
        Inputed text:{sentence}</div>
        <div>
          </div>
            words:{count}
          <div>
        word occurrence:{word} : {occurrence}</div>
      </div>
      );    
    }
  }
  export default CountWords;