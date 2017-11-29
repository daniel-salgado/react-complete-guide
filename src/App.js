import React, { Component } from 'react';
import './App.css';
import Person  from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { name: 'Daniel', age: 36 },
      { name: 'Danielle', age:29 },
      { name: 'Israel', age: 33}

    ]
  }


  switchNameHandler = (newName) => {
    //console.log('was clicked');
    //DON'T DO THIS: this.state.persons[0].name = 'Salgado';
    this.setState(
      {
        persons : [
          { name: newName, age: 36 },
          { name: 'Danielle', age:29 },
          { name: 'Israel', age: 5}
        ]
        ,otherState: 'some other value'

      }

    )
  }
  
  changeNameHandler = (event) => {
    this.setState(
      {
        persons : [
          { name: 'Daniel', age: 36 },
          { name: event.target.value, age:29 },
          { name: 'Israel', age: 5}
        ]

      }

    )
  }

  //<button onClick={this.switchNameHandler.bind(this, 'Salgado')}>Switch Name</button>

  render() {

    const style = {

      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hey</h1>
        <p>This is really working!</p>
        <button 
          style = {style}
          onClick={() => this.switchNameHandler('Salgado!!')}>Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, "Sal")}
          change = {this.changeNameHandler} />
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    ); 

    //return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'Hey'));

  }
}

export default App;
