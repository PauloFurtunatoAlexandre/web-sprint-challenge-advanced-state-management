import React from "react";
import { connect } from "react-redux";

import Smurf from "../Smurf/smurf";

import { fetchAllSmurfs, addNewSmurf } from "../../redux/actions/actions";

import "./smurfList.scss";
import SmurfForm from "../SmurfForm/smurfForm";

const SmurfList = (props) => {
  if (props.isFetching) {
    return <div>*** Looking out there for your smurfs ***</div>;
  }
  return (
    <div>
      <button className="smurf-btn" onClick={() => props.fetchAllSmurfs()}>Get Smurfs Here</button>
      {console.log(props.smurfs)}
      <div className="smurfs-list">
        {props.smurfs.map((smurf) => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
      </div>
      <SmurfForm addNewSmurf={props.addNewSmurf} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchAllSmurfs, addNewSmurf })(SmurfList);
