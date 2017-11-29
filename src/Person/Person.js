import React from 'react';

import classes from './Person.scss';

const Person = props => {
  const style = {};

  return (
    <div className={classes.Person} style={style}>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input className={classes.textInput} type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
