import cross_icon from '../Assets/tik.png'
import circle_icon from '../Assets/tac.png'
import { useContext } from 'react';
import { Context } from './TikTacToe';

let data = ["", "", "", "", "", "", "", "", ""];




export default function Box({id}) {
    const contextData = useContext(Context)
    const user = contextData.user
    const setUser = contextData.setUser
    const data1 = contextData.data1
    const setLock = contextData.setLock
    const lock = contextData.lock
    

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

    if (checkIfExist(id)){
        const userFromData = checkIfExistUser(id)
        return <div className="boces" onClick={(e)=>{
            if (checkIfExist(id)) {
                setLock(!lock)
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