import React, { Component } from 'react';
//import Radium from 'radium';
//import './Person.css'
import classes from './Person.css'
//import WithClass from '../../../hoc/WithClass';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }

    render() {

        console.log('[Person.js] Inside render()');

        return (

            //<div className={classes.Person} /*style={style}*/>
            //<WithClass classes={classes.Person}>
            <Auxiliary>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </Auxiliary>
            //</WithClass>
            //</div>

        );

    };

};

export default withClass(Person, classes.Person);