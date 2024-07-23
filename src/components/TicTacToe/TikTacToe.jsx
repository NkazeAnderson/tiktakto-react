import React from 'react'
import './TikTacToe.css'
import cross_icon from '../Assets/tik.png'
import circle_icon from '../Assets/tac.png'

let data = ["", "", "", "", "", "", "", "", ""];


export const TikTacToe = () => {

    let [count, setCount] = React.useState(0);
    let [lock, setLock] = React.useState(false);

    const toggle = (e,num) => {
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML = `<img src='${cross_icon}' alt="cross_icon" />`;
            data[num] = 'X';
            setCount(count+1);
        }else{
            e.target.innerHTML = `<img src='${circle_icon}' alt="circle_icon" />`;
            data[num] = 'O';
            setCount(count+1);
        }
    }

    const checkWin =()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[0]!==""){
            won(data);
    }
    else if(data[3]===data[4] && data[4]===data[5]&& data[5] !==""){
        won(data);
    }
    else if(data[6]===data[7] && data[7]===data[8]&& data[8] !==""){
        won(data);
    }
    else if(data[0]===data[3] && data[3]===data[6]&& data[6] !==""){
        won(data);
    }
    else if(data[1]===data[4] && data[4]===data[7]&& data[7] !==""){
        won(data);
    }
    else if(data[2]===data[5] && data[5]===data[8]&& data[8] !==""){
        won(data);
    }

    }

    const won = (winner) =>{
        setLock(true);
        if(winner==="X"){
            tittleRef.current.innerHTML = `congratulation <img ${src='cross_icon'} />`
        }
        else {
             tittleRef.current.innerHTML = `congratulation <img ${src='circle_icon'} />`
        }
    }
  return (
    <div className='container'>
        <h1 className='title'>Tic Tac Toe Game in <span>React</span> </h1>
        <div className="baord">
            <div className="boces" onClick={(e)=>{toggle(e,0)}}></div>
            <div className="boces" onClick={(e)=>{toggle(e,1)}}></div>
            <div className="boces" onClick={(e)=>{toggle(e,2)}}></div>
        </div>

        <div className="baord">
            <div className="boces" onClick={(e)=>{toggle(e,3)}}></div>
            <div className="boces" onClick={(e)=>{toggle(e,4)}}></div>
            <div className="boces" onClick={(e)=>{toggle(e,5)}}></div>
        </div>

        <div className="baord">
            <div className="boces" onClick={(e)=>{toggle(e,6)}}></div>
            <div className="boces" onClick={(e)=>{toggle(e,7)}}></div>
            <div className="boces" onClick={(e)=>{toggle(e,8)}}></div>
        </div>
        <button className="reset">Reset</button>
    </div>
  )
}
