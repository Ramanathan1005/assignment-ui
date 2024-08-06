import React from "react";
import "../scss/NetProfit.scss";
import { CircularProgressbar } from "react-circular-progressbar";

const NetProfit = () => {
  const percentage = 70;

  return (
    <div className="net-profit-container">
      <div className="profit-details">
        <h4>Net Profit</h4>
        <div className="profit-amount">
          <h4 className="dollar-sign">$&nbsp;6759.25</h4>
        </div>
        <div className="percentage-change">
          <span className="arrow-up">▲</span> 3%
        </div>
      </div>
      <div className="goal-completion">
        <div className="small-progress-bar">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          <p>Goal Completed</p>
        </div>
        {/* <div className="circle">
          <span className="percentage">70%</span>

          <p className="goal-text">Goal Completed</p>
        </div> */}
        <p className="note">* The values here have been rounded off.</p>
      </div>
    </div>
  );
};

export default NetProfit;
