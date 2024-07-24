import React from 'react'
import './TikTacToe.css'
import cross_icon from '../Assets/tik.png'
import circle_icon from '../Assets/tac.png'

let data = ["", "", "", "", "", "", "", "", ""];

const data1 = [
 
]
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

function Box({id, user, setUser}) {

    if (checkIfExist(id)){
        const userFromData = checkIfExistUser(id)
        return <div className="boces" onClick={(e)=>{
            if (checkIfExist(id)) {
                
            }else{
                addData({
                    user: user,
                    selectedBox: id
                })
                setUser(user === "x" ? "o":"x")
            }
            
            
    
            console.log(data1)
        }}>
            {userFromData === "x" ? "x" : "o"}
        </div>
    }
    
    return <div className="boces" onClick={(e)=>{
        if (checkIfExist(id)) {
            
        }else{
            addData({
                user: user,
                selectedBox: id
            })
            setUser(user === "x" ? "o":"x")
        }
        

        console.log(data1)
    }}>
        
    </div>
}



export const TikTacToe = () => {

    let [count, setCount] = React.useState(0);
    let [user, setUser] = React.useState("x");
    let [lock, setLock] = React.useState(false);
    let tittleRef = React.useRef(null);

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
    <div className='container'>
        <h1 className='title' ref={tittleRef}>Tic Tac Toe Game in <span>React</span> </h1>
        <div className="baord">
            <Box id={0} user={user} setUser= {setUser}/>
            <Box id={1} user={user} setUser= {setUser}/>
            <Box id={2} user={user} setUser= {setUser}/>
            
        </div>

        <div className="baord">
        <Box id={3} user={user} setUser= {setUser}/>
            <Box id={4} user={user} setUser= {setUser}/>
            <Box id={5} user={user} setUser= {setUser}/>
        </div>

        <div className="baord">
        <Box id={6} user={user} setUser= {setUser}/>
            <Box id={7} user={user} setUser= {setUser}/>
            <Box id={8} user={user} setUser= {setUser}/>
        </div>
        <button className="reset">Reset</button>
    </div>
  )
}
