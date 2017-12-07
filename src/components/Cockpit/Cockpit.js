import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';

    if (props.showPerson) {
        btnClass = classes.Red;
    }

    btnClass = classes.Red;

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.cockpit}>
            <h1>Hey</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                //style={style}
                //onClick={() => this.switchNameHandler('Salgado!!')}>Switch Name</button>
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;
