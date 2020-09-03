import React from "react";
// import AddPatient from "./Patient/AddPatient"; // Adding patient
import AdminPatientList from "./Patient/AdminPatientList"; // Patient list
// import NonCheckedPatientList from "./Patient/NonCheckedPatientList";
import AdminCheckedPatientList from "./Patient/AdminCheckedPatientList";


import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },

}));

export default function AdminPatientTab({doctorid,userid}) {
  const classes = useStyles();


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                aria-label="scrollable auto tabs example"
                className="navpatientTabsLink"
              >
                {/* <Tab label="ADD Doctor" {...a11yProps(0)} /> */}
                <Tab label=" All Patient" {...a11yProps(0)} />
                <Tab label="Checked Patient" {...a11yProps(1)} />
                
              </Tabs>
            </AppBar>
         
            <TabPanel value={value} index={0}>
            <h3 className="text-center"> All Patient </h3>
            <AdminPatientList  />
             
            </TabPanel>
            <TabPanel value={value} index={1}>
            <h3 className="text-center"> Checked Patient </h3>
            <AdminCheckedPatientList  />
             
            </TabPanel>
           
          </div>
        </div>
      </div>
      
    
    </div>
  );
}
