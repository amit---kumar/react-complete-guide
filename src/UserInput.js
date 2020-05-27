import React from 'react';

const userInput = (props) =>
{
    return(
        <input onChange={props.uch} type='text' value={props.name}/>
    );
}

export default userInput;
