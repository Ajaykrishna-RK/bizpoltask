import { Label, Margin } from '@mui/icons-material'

import {TabContext,TabList, TabPanel} from '@mui/lab';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, Grid, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, Tab, Tabs, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import SideTab from './SideTab';









  

function Form() {
 
    const [value, setValue] = useState('1');
    const [values,setValues] = useState({
      name:'',
    
      phoneNumber: '',
      address:'',
      country:'',
      city:'',
      state:'',
      pincode:''
    })

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
   
    const handleChanngeValues = (e) =>{
      setValues({ ...values, [e.target.name]: e.target.value });
      console.log(values,"--")
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      if (
        !values.address ||
        !values.name ||
        !values.phoneNumber ||
        !values.city ||
        !values.country ||
        !values.pincode ||
        !values.state
      ) {
        alert(" * Fields are Mandatory ");
        return
      }
     
      console.log(values);
      alert("Saved Successfully")
    };
 
  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>

     <form onSubmit={handleSubmit}> 

<Grid  container spacing={2} >


  
  <Grid item xs={12} md={4}>
    <div>
    {/* <TextField fullWidth  label="fullWidth" id="demo-simple-select-label" /> */}
    <InputLabel fullWidth id="demo-simple-select-label" sx={{fontSize:'12px'}}>Type  <span style={{color:"red"}}>*</span> </InputLabel> 
   
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"

label="select"
fullWidth  
>
<MenuItem  value={10}>Ten</MenuItem>
<MenuItem value={20}>Twenty</MenuItem>
<MenuItem value={30}>Thirty</MenuItem>
</Select>
      {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
    </div>
  
  </Grid>

  <Grid item xs={12} md={4}>
    <div>
    <InputLabel fullWidth sx={{fontSize:'12px'}} >Name  <span style={{color:"red"}}>*</span> </InputLabel> 
      {/* <TextField   fullWidth placeholder="name" id="fullWidth" /> */}

      <TextField
   
      fullWidth
      placeholder="name"
      id="name"
      name="name"
      onChange={handleChanngeValues}
      value={values.name}
    />
    


    </div>
  </Grid>

  <Grid item xs={12} md={4}>
    <div>
    <InputLabel fullWidth  sx={{fontSize:'12px'}}> Phone Number<span style={{color:"red"}}>*</span> </InputLabel> 
    <TextField
      
      fullWidth
      placeholder="phone Number"
      id="phoneNumber"
      name="phoneNumber"
      onChange={handleChanngeValues}
      value={values.phoneNumber}
    />
   
 
    </div>
  </Grid>

  
  <Grid item xs={12} md={4}>
    <div>
    <InputLabel fullWidth sx={{fontSize:'12px'}} > Address line 1<span style={{color:"red"}}>*</span> </InputLabel> 
  
    <TextField
      
      fullWidth
      placeholder="address"
      id="address"
      name="address"
      onChange={handleChanngeValues}
      value={values.address}

    />
   
 
 
    </div>
  </Grid>

  
  <Grid item xs={12} md={4}>
    <div>
    <InputLabel fullWidth sx={{fontSize:'12px'}}>Address line 2 </InputLabel> 
      <TextField fullWidth placeholder="Address line 2" id="fullWidth" />
 
    </div>
  </Grid>

  
  <Grid item xs={12} md={4}>
    <div>
    <InputLabel fullWidth sx={{fontSize:'12px'}} >Address line 3   </InputLabel> 
      <TextField fullWidth placeholder="Address line 3" id="fullWidth" />
 
    </div>
  </Grid>


  <Grid item xs={12} md={4}>
    <div>
    <InputLabel fullWidth sx={{fontSize:'12px'}}> Country <span style={{color:"red"}}>*</span> </InputLabel> 
      <TextField fullWidth placeholder="Country" id="fullWidth"  name='country' value={values.country} onChange={handleChanngeValues}/>
 
    </div>
  </Grid>
  <Grid item xs={12} md={4}>
    <div>
    <InputLabel fullWidth sx={{fontSize:'12px'}} > City <span style={{color:"red"}}>*</span> </InputLabel> 
      <TextField fullWidth placeholder="City" id="fullWidth" name='city' value={values.city} onChange={handleChanngeValues} />
 
    </div>
  </Grid>
  <Grid item xs={12} md={4}> 
    <div>
    <InputLabel fullWidth sx={{fontSize:'12px'}}> Description </InputLabel> 
      <TextField fullWidth placeholder="description"   multiline
    id="message" type='message' />
 
    </div>
  </Grid>

  <Grid item xs={12} md={4}>
    <div>
    <InputLabel fullWidth sx={{fontSize:'12px'}} > State <span style={{color:"red"}}>*</span> </InputLabel> 
      <TextField fullWidth placeholder="State"  name='state' value={values.state} onChange={handleChanngeValues} id="fullWidth" />
 
    </div>
  </Grid>

  <Grid item xs={12} md={4}>
    <div>
    <InputLabel fullWidth  sx={{fontSize:'12px'}} > Pincode <span style={{color:"red"}}>*</span> </InputLabel> 
      <TextField fullWidth placeholder="Pincode"  name='pincode' value={values.pincode} onChange={handleChanngeValues} id="fullWidth" />
 
    </div>
  </Grid>


  </Grid>
  <div style={{marginTop:'20px'}}>
        <Button variant='outlined' >+ ADD NEW ADDRESS</Button>
    </div>
    
 <SideTab/>
 <div style={{justifyContent:"end",alignItems:"end",display:"flex" }}>
 <Button variant="outlined"  >
  close
</Button>
<Button variant="contained" type="submit" sx={{marginLeft:"5px"}}>
  Saved
</Button>
 </div>
 
  </form>
    

     
    
 
    


    </div>
  )
}

export default Form