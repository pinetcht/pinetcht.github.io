import React, { useRef } from "react";
import "../styles/Root.css";
import githubicon from "../assets/github.svg"


export const Experience = ({ company, date, role, location, github }) => {
    return (
        <>

            <div className="exp">
                <div className="expSubBox">
                    <div className="expHeader">
                        <h2 className="role expDetail">{role}</h2>
                        <h3 className="company expDetail">{company}</h3>
                    </div>
                    <div className="expHeader right">
                        <h3 className="expDetail"> {date} </h3>
                        <h3 className="expDetail">{location}</h3>
                    </div>

                </div>
                {
                    github &&
                    <a href={github} target="_blank" className="expSubBox github" style={{ display: "flex", justifyContent: "start" }}>
                        <img src={githubicon} style={{height:"1.5rem", marginRight: "0.5rem"}}></img>
                        link to project
                    </a>
                }

                {/* <a href={github} className="expSubBox" style={{ display: "flex", justifyContent: "start" }}>
                    github link
                </a> */}





            </div>

        </>
    )
};