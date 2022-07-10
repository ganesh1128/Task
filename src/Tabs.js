import * as React from 'react';
import Box from '@mui/material/Box';
import { Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SearchIcon from '@mui/icons-material/Search';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Content from './content';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div className='mainTabs'>
   
    <div>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab style={{fontSize:"20px"}} label="MY COMPANY.COM" value="1" />
            <Tab style={{fontSize:"10px"}} label="THE EDIT" value="2" />
            <Tab  style={{fontSize:"10px"}}  label="NEW ARRIVALS" value="3" />
            <Tab style={{fontSize:"10px"}}  label="DESIGNERS" value="4" />
            <Tab style={{fontSize:"10px"}}  label="CLOTHING" value="5" />
            <Tab style={{fontSize:"10px"}} label="SHOES" value="6" />
            <Tab style={{fontSize:"10px"}} label="BAGS" value="7" />
            <Tab style={{fontSize:"10px"}} label="ACCESSORIES" value="8" />
            <Tab style={{fontSize:"10px"}} label="JEWELRY" value="9" />
            <Tab style={{fontSize:"10px"}} label="BEAUTY" value="10" />
            <Tab style={{fontSize:"10px"}} label="HOME" value="11" />
          </TabList>
        </Box>
        
        <TabPanel value="1">
            <Content></Content>
        </TabPanel>
        <TabPanel value="2">THE EDIT</TabPanel>
        <TabPanel value="3">NEW ARRIVALS</TabPanel>
        <TabPanel value="4">DESIGNERS</TabPanel>
        <TabPanel value="5">CLOTHING</TabPanel>
        <TabPanel value="6">SHOES</TabPanel>
        <TabPanel value="7">BAGS</TabPanel>
        <TabPanel value="8">ACCESSORIES</TabPanel>
        <TabPanel value="9">JEWELRY</TabPanel>
        <TabPanel value="10">BEAUTY</TabPanel>
        <TabPanel value="11">HOME</TabPanel>
      </TabContext>
    </Box>
    </div>
    
    <div className='iconsDiv'>
        
        <SearchIcon />
        <ProductionQuantityLimitsOutlinedIcon />
        <PersonOutlineOutlinedIcon />
        
    </div>

   </div>
  );
}
