import React from "react";
import "./NotFound.css";
const NotFound = () => {
    return (
        <div className="style-color">
            <div className="error-style">
                <h1>404</h1>
                <h1>OPPS! PAGE NOT FOUND</h1>
                <h3>Sorry,the page you're looking for doesn't exist.If you think something is broken,report a problem.</h3>
                <div >
                    <button className="button-style"><a className="style-anchor" href="/home">Return Home</a></button>
                    <button className="button-style">Report Problem</button>
                </div>
            </div>
        </div>
    );
};
export default NotFound;