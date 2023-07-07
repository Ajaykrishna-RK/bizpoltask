import { Box ,InputLabel,MenuItem,Select,Tab, useMediaQuery,} from '@mui/material'
import {TabContext,TabList, TabPanel} from '@mui/lab';
import React from 'react'
import Form from '../components/Form';

function Home() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
  <div style={{justifyContent:"center",alignItems:"center", display:"flex"}}>
    <Box sx={{backgroundColor:"#fff",
    
    marginLeft : isNonMobileScreens ? "20px" : "-50px",
    marginRight : isNonMobileScreens ? "20px" : "",
    padding : isNonMobileScreens ? "" : "25px",
    width: isNonMobileScreens ? "100%" : "70%",
    boxShadow: "0 0px 4px rgba(0, 0, 0, 0.2)"}}>
    <Box>
        <h4 style={{fontWeight:"normal",padding:"15px"}}>Date & Time : 12 Feb 2021 | 12 Am | Business ID : BZ16589</h4>
    </Box>
    <Box>
    <Box sx={{ width: '100%', typography: 'body1' }}>
   {isNonMobileScreens ? <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          
            <Tab sx={{fontSize:"10px"}} label="Basic Information" value="1"/>
        <Tab sx={{fontSize:"10px"}} label="Official Mapping"  value="2"/>
        <Tab sx={{fontSize:"10px"}} label="Contact Information" value="3"/>
        <Tab sx={{fontSize:"10px"}} label="Registration Information" value="4"/>
        <Tab sx={{fontSize:"10px"}} label="Address and Kyc Information" value="5"/>
        <Tab sx={{fontSize:"10px"}} label="Promotor Information" value="6"/>
        <Tab sx={{fontSize:"10px"}} label="Compliances Information" value="7"/>
          </TabList>
        </Box>
        <TabPanel value="1">Basic Information</TabPanel>
        <TabPanel value="2">Official Mapping</TabPanel>
        <TabPanel value="3">Contact Information</TabPanel>
        <TabPanel value="4">Registration Information</TabPanel>
        <TabPanel value="5">

            <Form/>
        </TabPanel>
        <TabPanel value="6">Promotor Information</TabPanel>
        <TabPanel value="7">Compliances Information</TabPanel>
      </TabContext> :
      <>
      
      <div style={{marginTop:"10px"}}>
        
          
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"

    label="select"
    fullWidth  
  >
    <MenuItem  value={10}>Address and Kyc Information</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
  <Form/>
          </div>
      
      
      </>
      
      
      
      }   
    </Box>
    </Box>
    </Box>
    </div>
  )
}

export default Home