import React from "react";

import "./smurf.scss";

const Smurf = (props) => {
  return (
    <div className="smurf">
      <section>
        <img
          src="https://www.smurf.com/images/brainy-news.png"
          alt={props.smurf.name}
        />
      </section>
      <section>
        <h2>{props.smurf.name}</h2>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>
      </section>
    </div>
  );
};

export default Smurf;
