import * as React from 'react';
import Box from '@mui/material/Box';
import { Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import image409 from './image409.png'
import image410 from './image410.png'
import image411 from './image411.png'
import image412 from './image412.png'
import image413 from './image413.png'
import image415 from './image415.png'
import image414 from './image414.png'



function Content() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const click = () => {
        console.log("button clicked")
    }
  return (
    <div className='grid-container'>
    
    <div>
          <Box sx={{ width: '100%', typography: 'body1' }}>
         <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab style={{fontSize:"10px"}} label="DETAILS" value="1" />
            <Tab style={{fontSize:"10px"}} label="DELIVERY" value="2" />
            <Tab  style={{fontSize:"10px"}}  label="FIT" value="3" />
            <Tab style={{fontSize:"10px"}}  label="SHARE" value="4" />
            
          </TabList>
        </Box>
        <TabPanel value="1" className='detailsTab'>
           The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar 
           lavishness by night and by day: a blazer in a linen blend shot
            with lurex for a shimmering surface that shines like a star in the sky. 
            it has a straight fit with well defined shoulders and a shawl 
         culminating in a button and has been flawlessly finished with three 
         jet pockets
          with a sartorial feel. <br/>
          See the <u>EDITOR’S NOTE</u> <br/>
          Learn about the <u>DESIGNER</u>
        </TabPanel>
        <TabPanel value="2">DELIVERY</TabPanel>
        <TabPanel value="3">FIT</TabPanel>
        <TabPanel value="4">SHARE</TabPanel>
    
      </TabContext>
    </Box>
    </div>
  
   <div className='imageDiv'>

   <div className='images'>
   <img src={image409}width="300px" alt="" />
    </div>
    <div className='images'>
    <img src={image410} width="150px" alt="" />
    <img src={image411} width="150px" alt="" />
    </div>
    <div>
    <img src={image412} width="300px" alt="" /> 
    </div>
    <div>
    <img src={image413} width="300px" alt="" /> 
    </div>

   </div>
   
   <div className='stickyDiv'>
 
   <p style={{textAlign:"left"}}>JONATHAN <br />SIMKHAI</p>
   <p style={{textAlign:"left"}}>Lurex Linen Viscose Jacket in Conchiglia <br/> $225</p>
   <p style={{textAlign:"left"}}>Color Conchiglia</p>
   
   <span className='smallImageDiv'>
    <img src={image414} width="50px" alt="" className='image415' />
   <img src={image415} width="50px" alt="" className='image414' />
   </span>

   <span className='sizeGudieDiv'>
    <p>SIZE L</p>
    <p>SIZE GUIDE</p>
   </span>
   <div >
   <button className='sizeDiv'>XS</button>
   <button className='sizeDiv'>S</button>
   <button className='sizeDivM'>M</button>
   <button className='sizeDivL'>L</button>
   <button className='sizeDivXL'>XL</button>
   </div>

   <div>
   <button onClick={click} className='addtobag'>ADD TO BAG</button>
   </div>

   <div className='descDiv'>
    <span>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</span>
   </div>
   <div className='descDiv'>
    <span>Speak to a Personal Stylist CHAT NOW</span>
   </div>
   
   </div>
  
        
    </div>
  )
}

export default Content