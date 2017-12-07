import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);

    //state in older projects are initialysed inside constructor
    this.state = {
      persons: [
        { id: '1', name: 'Daniel', age: 36 },
        { id: '2', name: 'Danielle', age: 29 },
        { id: '3', name: 'Israel', age: 33 }
      ],
      otherState: 'some other value',
      showPersons: false
    };

  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }


  
  /*state = {
    persons: [
      { id: '1', name: 'Daniel', age: 36 },
      { id: '2', name: 'Danielle', age: 29 },
      { id: '3', name: 'Israel', age: 33 }
    ],
    otherState: 'some other value',
    showPersons: false
  };*/

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

  togglePersonsHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }

  render() {

    console.log('[App.js] Inside render()');

    let persons = null;

    if (this.state.showPersons) {

      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandler}
      />;

    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );

  }

}

export default App;
