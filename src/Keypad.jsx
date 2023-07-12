import React from "react";
import { useState } from "react";
import { useReducer } from "react";

function Keypad(){

    // const [bool, setBool]= useState(true);
    const [isCorrect, setIsCorrect]= useState("");
    const [counter, setCounter]= useState(0);

    // let lock=[1,2,3];
    

    const reducer= (state, action)=>{
        switch(action.type){
            case "check":{
                switch(action.payload){
                    case "1":{
                        if(counter==0){
                            setCounter(counter+1);
                            return "*";
                        }else{
                            setCounter(0);
                            return "Restart";
                        }
                    }
                    case "5":{
                        if(counter==1){
                            setCounter(counter+1);
                            return "**";
                        }else{
                            setCounter(0);
                            return "Restart";
                        }
                    }
                    case "9":{
                        if(counter==2){
                            setCounter(counter+1);
                            return "***";
                        }else{
                            setCounter(0);
                            return "Restart";
                        }
                    }
                    default: return (setCounter(0),"Restart");
                }
            }
            default: return "Try Again"
        }
    }

    const[state, dispatch]= useReducer(reducer, "Type the correct password")

    const handleClick=()=>{
        // lock.map((num, index)=> (num==state[index] && state.length==lock.length) ? setBool(true): setBool(false));
    
        // bool == true ? setIsCorrect("Your Password is correct"): setIsCorrect('Your password is wrong');
        if(state=="***"){
            setIsCorrect("Your password is correct!");
        }else{
            setIsCorrect("Your password is wrong");
        }
    }

    const handleReset=()=>{
        setIsCorrect("");
    }

    


    return (
        <>
        <h1> Keypad Lock </h1>

        <button onClick={()=> dispatch({type:'check', payload:"1"})}>1</button>
        <button onClick={()=> dispatch({type:'check', payload:"2"})}>2</button>
        <button onClick={()=> dispatch({type:'check', payload:"3"})}>3</button>
        <br />
        <button onClick={()=> dispatch({type:'check', payload:"4"})}>4</button>
        <button onClick={()=> dispatch({type:'check', payload:"5"})}>5</button>
        <button onClick={()=> dispatch({type:'check', payload:"6"})}>6</button>
        <br />
        <button onClick={()=> dispatch({type:'check', payload:"7"})}>7</button>
        <button onClick={()=> dispatch({type:'check', payload:"8"})}>8</button>
        <button onClick={()=> dispatch({type:'check', payload:"9"})}>9</button>

        <br />
        <br />
        <button onClick={handleClick}>Submit</button>
        <button onClick={handleReset}>Reset</button>
        <h1>{isCorrect}</h1>
        <h3>Status: {state}</h3> 
        </>
    )
}
export default Keypad;