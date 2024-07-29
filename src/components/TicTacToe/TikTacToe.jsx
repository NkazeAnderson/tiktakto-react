import React, { createContext } from 'react'
import './TikTacToe.css'
import cross_icon from '../Assets/tik.png'
import circle_icon from '../Assets/tac.png'
import Box from './MyBox';
import Board from './Board';
import Input from './Input';
import {useEffect} from "react"
let data = ["", "", "", "", "", "", "", "", ""];

export const Context = createContext(null)

function checkIfExist (id){
    return data1.some((item)=>item.selectedBox === id)
}

function checkIfExistUser (id){
    const item = data1.find((item)=>item.selectedBox === id)
    if (item) {
        return item.user
    }
    else{
        return null
    }
}

function addData(data) {
    data1.push(data)
}





export const TikTacToe = () => {

    let [count, setCount] = React.useState(0);
    let [user, setUser] = React.useState("x");
    let [data1, setData1] = React.useState([]);
    let [lock, setLock] = React.useState(false);
    let tittleRef = React.useRef(null);

    const contextData = {
        user: user,
        setUser: setUser,
        data1:data1,
        setData1: setData1,
        lock: lock,
        setLock: setLock

    }
    
    useEffect(()=>{
        console.log("I am use effect")
    },[lock, user])

    const toggle = (count) => {
        if(lock){
            return 0;
        }
        if(count%2===0){
            setCount(count+1);
        }else{
            setCount(count+1);
        }
        checkWin();
    }

    const checkWin =()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2]);
    }
    else if(data[3]===data[4] && data[4]===data[5]&& data[5] !==""){
        won(data[5]);
    }
    else if(data[6]===data[7] && data[7]===data[8]&& data[8] !==""){
        won(data[8]);
    }
    else if(data[0]===data[3] && data[3]===data[6]&& data[6] !==""){
        won(data[6]);
    }
    else if(data[1]===data[4] && data[4]===data[7]&& data[7] !==""){
        won(data[7]);
    }
    else if(data[2]===data[5] && data[5]===data[8]&& data[8] !==""){
        won(data[8]);
    }
    else if(data[0]===data[4] && data[4]===data[8]&& data[8] !==""){
        won(data[8]);
    }
    else if(data[0]===data[1] && data[1]===data[2]&& data[2] !==""){
        won(data[2]);
    }
    else if(data[2]===data[4] && data[4]===data[6]&& data[6] !==""){
        won(data[6]);
    }

    }

    const won = (winner) =>{
        setLock(true);
        if(winner==="X"){
            tittleRef.current.innerHTML = `congratulation <img ${src='cross_icon'} />`;
        }
        else {
             tittleRef.current.innerHTML = `congratulation <img ${src='circle_icon'} />`;
        }
    }
  return (
    <Context.Provider value={contextData} >
        <Input />
        <div className='container'>
        <h1 className='title' ref={tittleRef}>Tic Tac Toe Game in <span>React</span> </h1>
        <Board firstId={0} user={user} setUser={setUser}/>
        <Board firstId={3} user={user} setUser={setUser}/>
        <Board firstId={6} user={user} setUser={setUser}/>

        <button className="reset">Reset</button>
    </div>
    </Context.Provider>
    
  )
}
