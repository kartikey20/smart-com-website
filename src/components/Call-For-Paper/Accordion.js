import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "40em",
    margin: "auto"
  }
}));

export default function CallForPapersAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant={"h5"}>
            TRACK 1: Smart System and Future Internet
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Smart Cities</li>
              <li>Internet of Things</li>
              <li>Ambient Assisted Living</li>
              <li>Smart Health Care</li>
              <li>Intelligent Transportation</li>
              <li>Sensing and Sensor Networks</li>
              <li>Affective computing</li>
              <li>Agents and Multi-agent Systems</li>
              <li>Context-aware pervasive systems</li>
              <li>Smart mobility</li>
              <li>Smart multimedia services</li>
              <li>Smart antennas</li>
              <li>Smart urban electric cars</li>
              <li>Smart atmospheric and population migration measurements</li>
              <li>Smart energy and optimal consumption</li>
              <li>Smart information processing</li>
              <li>Smart analytics</li>
              <li>Internet of things in smart environments</li>
              <li>Smart Grids & Distributed Generation</li>
              <li>Social networking in smart environments</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant={"h5"}>
            TRACK 2: Machine Intelligence and Data Science
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Artificial Intelligence Tools & Applications</li>
              <li>Natural Language Processing</li>
              <li>Data Mining & Machine Learning tools</li>
              <li>Information retrieval</li>
              <li>Neural Networks</li>
              <li>Pattern recognition</li>
              <li>Robotics</li>
              <li>Fuzzy Logic Techniques & Applications</li>
              <li>Fuzzy Expert System</li>
              <li>Parallel Processing</li>
              <li>Soft Computing</li>
              <li>Evolutionary Computing</li>
              <li>Genetic Algorithm</li>
              <li>Intelligent Management & Decision Making</li>
              <li>Mechatronics & Robotics</li>
              <li>Aerial Robotics and Unmanned aerial vehicles</li>
              <li>Agricultural Robotics and Automation</li>
              <li>Algorithms for planning and control of Robot motions</li>
              <li>Predictive Modelling</li>
              <li>Data Analytics</li>
              <li>Change Detection</li>
              <li>Medical informatics</li>
              <li>Distributed and Parallel Algorithms for Data Science</li>
              <li>Big data representation and visualization</li>
              <li>Business intelligence</li>
              <li>Knowledge discovery theories, models and systems</li>
              <li>High performance computing for data analytics</li>
              <li>Human-machine interaction and interfaces</li>
              <li>Data-lakes</li>
              <li>Image Processing</li>
              <li>Big-Data technologies</li>
              <li>Text Analytics</li>
              <li>Image interpretations</li>
              <li>Web Analytics</li>
              <li>Mobile Analytics</li>
              <li>Knowledge discovery theories</li>
              <li>Models and Systems</li>
              <li>Analytics and collective intelligence</li>
              <li>Data Security</li>
              <li>Data Science and IoT</li>
              <li>Power System Monitoring</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant={"h5"}>
            TRACK 3: Real-Time and VLSI System
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Access Systems and Networks</li>
              <li>Molecular, Biological and Multi-scale Communications</li>
              <li>Network security management</li>
              <li>Security access policies</li>
              <li>Privacy-respecting authentication issues</li>
              <li>Sensor Networks</li>
              <li>Security and Privacy Policies</li>
              <li>Broadband / ultra-wideband antennas</li>
              <li>Software-defined Network</li>
              <li>Cognitive Radio</li>
              <li>Channel Estimation and Synchronization</li>
              <li>Detection and Estimation Theory</li>
              <li>Distributed Coding and Processing</li>
              <li>Device Modelling and Process Simulation</li>
              <li>Diversity and Fading Countermeasures</li>
              <li>Multi-user Diversity</li>
              <li>Network Coding</li>
              <li>Advanced VLSI and Embedded Systems</li>
              <li>Space Time Coding</li>
              <li>Advance VLSI and Embedded System</li>
              <li>VLSI Design and IC Technology</li>
              <li>VLSI Signal processing</li>
              <li>VLSI for Instrumentation and Control</li>
              <li>VLSI for Wireless Communication 5G and beyond</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant={"h5"}>
            TRACK 4: Communication and Automation Systems
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Green Communication</li>
              <li>UWB communication</li>
              <li>Power Line Communication</li>
              <li>Broadband/ Ultra-wideband antenna</li>
              <li>RFID antennas and System</li>
              <li>Mobile and Vehicular antennas</li>
              <li>RF & Antenna design</li>
              <li>MIMO System Design and Analysis</li>
              <li>OFDM and Multiuser Communication System</li>
              <li>CDMA and Spread Spectrum, Multiple access Techniques</li>
              <li>Communication Technologies and Systems</li>
              <li>Mobile ad-hoc networks</li>
              <li>Mobile Identity Management</li>
              <li>Optical Wireless Communication</li>
              <li>OFDM for Optical System</li>
              <li>Optical MIMO</li>
              <li>Radio over Fibre</li>
              <li>Cooperative Communication</li>
              <li>Dynamic Spectrum Management</li>
              <li>Cross Layer Design</li>
              <li>Adaptive Modulation and Coding</li>
              <li>Satellite and Space Communications</li>
              <li>Power Electronics</li>
              <li>Machine and Drives</li>
              <li>Intelligent Automation and Manufacturing</li>
              <li>Industrial Automation</li>
              <li>Plc /Scada / DCS</li>
              <li>Renewable energy</li>
              <li>Robust Control</li>
              <li>Optimal Control</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
