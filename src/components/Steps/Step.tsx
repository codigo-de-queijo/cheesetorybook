import React from "react";
import "./steps.css";

export interface IStep {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  current?: number | React.ReactNode;
  status?: "wait" | "process" | "finished";
}

export const Step: React.FC<IStep> = ({ title, description, status, current }) => {
  const items = [{ title: title, description: description }];
  return (
    <>
      {items.map((item, i) => (
        <div className="stepAll" key={i}>
          <div className={`currentItem ${status}`}>
            <p className="itemValue">{current}</p>
          </div>
          <div>
            <span className="spanItems">
              <p className="itemTitle">{item.title}</p>
              <p className="itemDesc">{item.description}</p>
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
