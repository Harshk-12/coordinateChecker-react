import React, { useEffect, useState } from 'react'
import "./style.css"

function Page1() {
let [x,setx]=useState(0)
let [y,sety]=useState(0)
let[dots,setdots]=useState([])

function coordinates(e){ 
  setx(e.nativeEvent.offsetX)
  sety(e.nativeEvent.offsetY)
  // console.log(e.nativeEvent.offsetX)
}

function clear(e){
setx(0)
sety(0)
}


 
function handleclick(e){
  setdots([...dots,{ x, y}])
  console.log(dots  )
}




return (
  <div>
    <div className='parent'>
      <div className='top'>
        <div className='coordinates'>Coordinates: ({x },{y })</div>
        <a href="#"><button  onClick={clear}>Clear</button></a>
      </div>
   

    
      <div className='bottom' onMouseMove={coordinates}  onClick={handleclick}  >
        {
          dots.map((item,index) => {
            return (
              <div key={index} style={{
                height: '10px',
                width:' 10px',
                backgroundColor: 'red',
                borderRadius: '10rem',
                position: 'absolute',
                left: item.x,
                top:item.y
              }}>
              </div>
            );
          })
        }
      </div>
    </div>
  </div>
)

}

export default Page1