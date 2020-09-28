import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component  {
  
  state = {
    persons: [
      {id:'sddsf1',  name: 'kunal', age: '26', gender: 'Male'},
      {id:'dfsdfd', name: 'Amit', age: '24', gender: 'Male'},
      {id:'dfdfsdfdfd', name: 'Sita', age: '25', gender: 'Female'}
    ],
    showPersons: false
  }
  

  
  deleteNameHandler = (personIndex) => {
        const person = [...this.state.persons];
        person.splice(personIndex, 1);
        
        this.setState({persons: person})
  }

  onchangeHanddler = (event, id) => {
    const personIndex = this.state.persons.findIndex(prsn_id => {
        return prsn_id.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [
      ...this.state.persons
    ]

    persons[personIndex] = person;

    this.setState({persons: persons});

    
  }
  
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      cursor: 'pointer',
      border: '1px solid green',
      padding: '8px',
      boxShadow: '0 2px 4px green',
      ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black',
      }
    }
    
    let persons = null;
    
    if (this.state.showPersons) {
      persons =  (
        <div>   
          {this.state.persons.map((person, index) => {
            return (<Person 
            click={() => this.deleteNameHandler(index)}
            name={person.name} 
            age={person.age} 
            gender={person.gender}
            changed={(event) => this.onchangeHanddler(event, person.id)}
            key={person.id}
            />)
            
          })}   
        </div>
    );

    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black',
    }     
  }
  
  const classes = [];

  if (this.state.persons.length <= 2) {
    classes.push('red');
  }

  if (this.state.persons.length <= 1) {
    classes.push('bold');
  }

    return (
        <div className="App">
          <h1>Hi! I am here....</h1>
          <button 
          style={style}
          onClick={this.togglePersonHandler}>Switch</button>
          <p className={classes.join(' ')}>It's really cool!!!</p>
          {persons}      
        </div>
      
      
  );
  }
  
  }

export default App;

