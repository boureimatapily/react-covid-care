import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import DoctorProfile from "../Components/Hospital/Doctor/DoctorProfile";
import DoctorPatient from "../Components/Hospital/Doctor/DoctorPatient";
import DoctorCheckedPatientList from "../Components/Hospital/Doctor/DoctorCheckedPatientList";

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

function Doctor({ uid }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!uid) return <Redirect to="/" />;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Doctor Dashboard</h1>
        </div>
      </div>
      <div className ="row">
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
              >
                <Tab label="Profile" {...a11yProps(0)} />
                <Tab label="Patient List" {...a11yProps(1)} />
                <Tab label="Checked Patient" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <h3 className="text-center">Profile</h3>
              <DoctorProfile />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <h3 className="text-center">Patient List</h3>
              <DoctorPatient />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <h3 className="text-center">Checked Patient List</h3>
              <DoctorCheckedPatientList />
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}
const mStp = (state) => {
  const uid = state.firebase.auth.uid;
  // const profile = state.firebase.profile;
  return {
    uid: uid,
    //profile: profile
  };
};

export default connect(mStp)(Doctor);
