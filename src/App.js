import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import Radium, { StyleRoot } from 'radium'; // Removed to see another way of styling

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Daniel', age: 36 },
      { id: '2', name: 'Danielle', age: 29 },
      { id: '3', name: 'Israel', age: 33 }
    ],
    otherState: 'some other value',
    showPersons: false
  }


  deletePersonHandler = (personIndex) => {

    //const persons = this.state.persons.slice(); //Copy the original array or
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  changeNameHandler = (event, id) => {

    const persons = [...this.state.persons];

    const personIndex = this.state.persons.findIndex(p => { return p.id === id });
    const person = { ...persons[personIndex] };

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({ persons: persons });

  }

  //<button onClick={this.switchNameHandler.bind(this, 'Salgado')}>Switch Name</button>

  togglePersonsHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }


  render() {

    const style = {

      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      /*':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }*/

    }

    let persons = null;

    if (this.state.showPersons) {

      persons = (
        <div>

          {this.state.persons.map((person, index) => {

            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              change={(event) => this.changeNameHandler(event, person.id)}
            />

          })}

        </div>
      );

      style.backgroundColor = 'red';

      /*style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      };*/

    }

    //Dinamic CSS classes
    //let classes = ['red', 'bold'].join(' ');
    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      //<StyleRoot>
        <div className="App">
          <h1>Hey</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style}
            //onClick={() => this.switchNameHandler('Salgado!!')}>Switch Name</button>
            onClick={this.togglePersonsHandler}>Toggle Persons</button>

          {persons}


        </div>
      //</StyleRoot>
    );

    //return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'Hey'));

  }
}

//export default Radium(App);
export default App;
