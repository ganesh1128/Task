import React from 'react'

function MobButtons() {
    const [active, setActive] = React.useState("");
    const handleClick = (event) => {
        setActive(event.target.id);
        
        
      }
  return (
    <div style={{display : "flex", justifyContent:"space-around"}}>
    <button 
   //  className='sizeDiv'  
    onClick={handleClick}
    key={1}
    className={active === "1" ? "active" : "MsizeDiv"}
    id={"1"}
    >XS
    </button>
    <button 
   //  className='sizeDiv'  
    onClick={handleClick}
    key={2}
    className={active === "2" ? "active" : "MsizeDiv"}
    id={"2"}
    >
     S
     </button>
    <button 
   //  className='sizeDivM'  
   //  onClick={handleClick}
    key={3}
    className={active === "3" ? "active" : "MsizeDivM"}
    id={"3"}
    >M</button>
    <button 
   //  className='sizeDivL'
    onClick={handleClick}
    key={4}
    className={active === "4" ? "active" : "MsizeDivL"}
    id={"4"}
    >L</button>
    <button 
   //  className='sizeDivXL'
    onClick={handleClick}
    key={5}
    className={active === "5" ? "activeXL" : "MsizeDivXL"}
    id={"5"}
    >XL</button>
    </div>
  )
}

export default MobButtons