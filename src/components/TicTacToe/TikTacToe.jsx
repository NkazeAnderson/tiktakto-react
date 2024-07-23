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
