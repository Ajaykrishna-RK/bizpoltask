import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, InputLabel, TextField, useMediaQuery } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function SideTab() {
  const isNonMobileScreens = useMediaQuery ("(min-width:1000px)");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    {isNonMobileScreens ? 
    <Box
    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224,marginTop:"20px" }}
  >
    <Tabs
      orientation="vertical"
   
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{ borderRight: 1, borderColor: 'divider' }}
    >
      <Tab sx={{fontSize:"10px"}} label="GST" {...a11yProps(0)} />
      <Tab sx={{fontSize:"10px"}} label="Rental Aggrement" {...a11yProps(1)} />
      <Tab sx={{fontSize:"10px"}}  label="Utility Bill" {...a11yProps(2)} />
      <Tab sx={{fontSize:"10px"}}  label="Address Proof" {...a11yProps(3)} />
      <Tab sx={{fontSize:"10px"}}  label="Others" {...a11yProps(4)} />

    </Tabs>
    <TabPanel value={value} index={0}>
   
      <Grid  item xs={12} md={4}>
        <div>
        <InputLabel fullWidth  sx={{fontSize:'12px'}} > Number  </InputLabel> 
          <TextField fullWidth placeholder="XXXX-XXXX-XXXX-XXXX" id="fullWidth" />
     
        </div> 
      </Grid>

<Grid item xs={12} md={4} sx={{display:"flex", marginTop:'20px'}} >
      <div>
        <InputLabel fullWidth  sx={{fontSize:'12px'}} >Front Page  </InputLabel> 
          <TextField fullWidth  placeholder="Front page" type='file' id="fullWidth" />
     
        </div> 
        <div>
        <InputLabel fullWidth  sx={{fontSize:'12px'}} > Back Page  </InputLabel> 
          <TextField fullWidth placeholder="Back page" type='file' id="fullWidth" />
     
        </div> 
     
</Grid>
      
    
    </TabPanel>
    <TabPanel value={value} index={1}>
   Rental Agreement
    </TabPanel>
    <TabPanel value={value} index={2}>
Utility Bill
    </TabPanel>
    <TabPanel value={value} index={3}>
    Address Proof
    </TabPanel>
    <TabPanel value={value} index={4}>
  Others
    </TabPanel>

  </Box> : 
  
  

  <Box
  sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224,marginTop:"20px" }}
>
  

 
    <Grid  item xs={12} md={4}>
      <div>
      <InputLabel fullWidth  sx={{fontSize:'12px'}} > Number  </InputLabel> 
        <TextField fullWidth placeholder="XXXX-XXXX-XXXX-XXXX" id="fullWidth" />
   
      </div> 
 


    <div>
      <InputLabel fullWidth  sx={{fontSize:'12px'}} >Front Page  </InputLabel> 
        <TextField fullWidth  placeholder="Front page" type='file' id="fullWidth" />
   
      </div> 
      <div>
      <InputLabel fullWidth  sx={{fontSize:'12px'}} > Back Page  </InputLabel> 
        <TextField fullWidth placeholder="Back page" type='file' id="fullWidth" />
   
      </div> 
      </Grid>
    
  

  

</Box>
  
  
  
  }
   
    </>
   
  );
}