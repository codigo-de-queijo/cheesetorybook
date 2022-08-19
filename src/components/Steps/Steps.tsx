import React from "react";
import "./steps.css";
import { Step } from "./Step";

interface ISteps {
  current?: number;
  title: string;
  description: string;
}

export const Steps: React.FC<ISteps> = ({ current = 0, title, description }) => {
  if (current === 0) {
    return (
      <div className="stepsItems">
        <div className="stepsCompo">
          <Step description={description} title={"In Progress"} status="process" current={1} />
          <Step description={description} title={"Waiting..."} status="wait" current={2} />
          <Step description={description} title={"Waiting..."} status="wait" current={3} />
        </div>
      </div>
    );
  }
  if (current === 1) {
    return (
      <div className="stepsItems">
        <div className="stepsCompo">
          <Step description={description} title={"Done"} status="finished" current={1} />
          <Step description={description} title={"In Progress"} status="process" current={2} />
          <Step description={description} title={"Waiting..."} status="wait" current={3} />
        </div>
      </div>
    );
  }
  if (current === 2) {
    return (
      <div className="stepsItems">
        <div className="stepsCompo">
          <Step description={description} title={"Done"} status="finished" current={1} />
          <Step description={description} title={"Done"} status="finished" current={2} />
          <Step description={description} title={"In progress"} status="process" current={3} />
        </div>
      </div>
    );
  }
  if (current === 3 || current > 3) {
    return (
      <div className="stepsItems">
        <div className="stepsCompo">
          <Step description={description} title={"Done"} status="finished" current={1} />
          <Step description={description} title={"Done"} status="finished" current={2} />
          <Step description={description} title={"Done"} status="finished" current={3} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="stepsItems">
        <div className="stepsCompo">
          <Step description={description} title={title} status="wait" current={0} />
          <Step description={description} title={title} status="wait" current={0} />
          <Step description={description} title={title} status="wait" current={0} />
        </div>
      </div>
    );
  }
};
