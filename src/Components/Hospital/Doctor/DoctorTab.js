import React from "react";
import AddUser from "./AddUser";
import DoctorList from "./DoctorList";
import HomeDoctorsList from "./HomeDoctorsList";
import QuarantinedDoctorsList from "./QuarantinedDoctorsList";
import HospitalDoctorsList from "./HospitalDoctorsList";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
  paper: {
    position: "absolute",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function DoctorTab() {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <AddUser />
    </div>
  );

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <div className="row">
        <div classNmae="col">
          <div>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleOpen}
            >
              ADD DOCTOR
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
            <Link to="/adminpatienttab" className="NavBtnLink">
            <button
              type="button"
              className="btn btn-success ml-3"
              
            >Patient</button>
              
            </Link>
          </div>
        </div>
      </div>
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
                <Tab label="Doctors List" {...a11yProps(0)} />
                <Tab label="In Hospital" {...a11yProps(1)} />
                <Tab label="Work from Home" {...a11yProps(2)} />
                <Tab label="Quarantined Doctors" {...a11yProps(3)} />
              </Tabs>
            </AppBar>
            {/* <TabPanel value={value} index={0}>
              <AddUser />
            </TabPanel> */}
            <TabPanel value={value} index={0}>
              <DoctorList />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <HospitalDoctorsList />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <HomeDoctorsList />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <QuarantinedDoctorsList />
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}
