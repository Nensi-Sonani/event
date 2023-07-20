// import React from 'react'
import React, {useState} from 'react'

const Count = () => {
    let [count, setCount]=useState(0);
    // let [color, setColor]=useState(false);
    // const condition =(e)=>{
    //    e.preventDefault()
    //    if(count>=50){
    //      setColor(!color)
    //    }
    // }

    const handlecount =(number,oprater)=>{
        if(oprater == "+"){
            setCount(count + number);
        }else if(oprater == "-"){
            setCount(count - number)
        }else if(oprater == "*"){
            setCount(count * number);
        }else{
            setCount(count / number)
        }
    }
  return (
    <div><h1><span style={{backgroundColor: count>50 ? "#a155cebd": "#4e549ca6"}}>Count:{count}</span></h1>
      <button onClick={()=> handlecount(5, "+")}>add 5</button>
      <button onClick={()=> handlecount(3, "-")}>remove 3</button>
      <button onClick={()=> handlecount(2, "+")}>add 2</button>
      <button onClick={()=> handlecount(2, "*")}>multi 2</button>
      <button onClick={()=> handlecount(3, "/")}>divi 3</button>
    </div>
  )
}

export default Count