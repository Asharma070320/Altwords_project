import React from "react";
import "./SideSection.css";
import Details from "./Details";
import logo from '../logo.jpg'
import {motion} from 'framer-motion'

const SideSection = () => {
  return (
    <div className="sideSection_container">
      <div className="heading">
        <div className="icon">
          <img src={logo} alt="logo.jpg"  />
        </div>
        <h3>Hi,AltWorld</h3>
      </div>

      <div className="line"></div>

      <div className="dashboard">
        <div className="homeIcon">
          <i class="ri-home-4-line"></i>
        </div>
        <strong className="dash">Dashboard</strong>
      </div>

      <div className="createAssignment">
        <motion.div whileTap={{scale: 0.9}} className="addIcon">
          <b>
            <i class="ri-add-line plus"></i>
          </b>
        </motion.div>
        <div className="new_assignment">
            <p className="newAssi">New Assignment?</p>
            <p className="predefined_qns">Select from pre-defined questions to have a quick turnaround.</p>
        </div>
      <motion.p whileTap={{scale: 0.9}} className="btn">Create New Assignment</motion.p>
      </div>
    </div>
  );
};

export default SideSection;
