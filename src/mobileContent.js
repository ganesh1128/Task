import { Carousel } from 'antd';
import React from 'react';
import 'antd/dist/antd.css'
import image409 from './image409.png'
import image410 from './image410.png'
import image411 from './image411.png'
import image412 from './image412.png'
import image414 from './image414.png'
import image415 from './image415.png'
import { IconButton } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';



const contentStyle = {
  
  height: '475px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'white',
};
function click (){
    alert("added to bag")
}

const colorChange = (event) => {
    // accessible
    event.target.style.color = "red"
    
 }
const CarouselRatio = () => (
    

  <div className='mainMobileDiv'>
<div>
<Carousel className='caroselDiv' >
    <div>
    <IconButton variant="plain" className='MlikeDiv' onClick={colorChange}>
       <FavoriteBorder />
       </IconButton>
      <div style={contentStyle}>
      <img src={image409}width="350px" height="450px" alt="" ></img>>
      
      </div>
    </div>
    <div>
      <h3 style={contentStyle}><img src={image410}width="350px" height="450px" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={image411}width="350px" height="450px" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={image412}width="350px" height="450px" alt="" /></h3>
    </div>
  </Carousel>
</div>
<div className='conentData'>
    <span className='conentDataName'>JONATHAN SIMKHAI</span>
    <span className='conentDataDes'>Lurex Linen Viscose Jacket in Conchiglia</span>
    <span className='conentDataPrice'>$225</span>
</div>

<div className='colorDiv'>
    <span><b>COLOR</b> CONCHIGLA</span>
    
</div>
<div>
<span className='MsmallImageDiv'>
    <img src={image414} width="50px" alt="" className='image415' />
   <img src={image415} width="50px" alt="" className='image414' />
   </span>
</div>

<span className='MobSizeGudieDiv'>
    <p>SIZE L</p>
    <p>SIZE GUIDE</p>
   </span>
   <div >
   <button className='MsizeDiv'>XS</button>
   <button className='MsizeDiv'>S</button>
   <button className='MsizeDivM'>M</button>
   <button className='MsizeDivL'>L</button>
   <button className='MsizeDivXL'>XL</button>
   </div>
   <div>
   <button onClick={click} className='Maddtobag'>ADD TO BAG</button>
   </div>

   <div className='MdescDiv'>
    <span>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</span>
   </div>
   <div className='MdescDiv1'>
    <span>Speak to a Personal Stylist CHAT NOW</span>
   </div>

   <div className='MdetailsDev'>
    <span><u>JONANTHAN SIMKHAI</u></span>
    <span className='blazers'><u>BLAZERS</u></span>
    <span><u>VISCOSE</u></span>
   </div>

   <div>
    <span><b>A NOTE FROM THE EDITOR</b></span>
   </div>

   <div >
    <span className='MobdescDiv'>
    The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.
    </span>
   </div>

  </div>
  
);

export default CarouselRatio;