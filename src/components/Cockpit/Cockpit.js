import React from 'react';
import classes from './Cockpit.css';
import Auxiliary from '../../hoc/Auxiliary';

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        //btnClass = classes.Red;
        btnClass = [classes.Button, classes.Red].join(' ');
    }


    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        //<div className={classes.Cockpit}>
        <Auxiliary>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                //style={style}
                //onClick={() => this.switchNameHandler('Salgado!!')}>Switch Name</button>
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </Auxiliary>
        //</div>
    );
};

export default cockpit;
