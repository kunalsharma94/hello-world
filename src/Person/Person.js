import React from 'react';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div`

    width: 60%;
    font-size: 12px;
    margin: 16px auto;
    padding: 20px;
    border: 1px solid grey;
    text-align: center;
    box-shadow: 0 2rem 3rem #eee;

@media (min-width: 500px) {
    
        width: 450px;
    
}
`

const person = (props) => {

// const style = {
//     '@media (min-width: 500px)': {
//         width: '450px'
//     }
// };
    
return (
        <StyledDiv>
            <h1 onClick={props.click}>My name is {props.name} <br /> My age: {props.age} <br /> Gender: {props.gender}</h1>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name}/>
        </StyledDiv>
        );
        
}

export default person;