import React from "react";

const Feature = props => (
    <div className="feature" id={props.id}>
        <div className="feature__img" />
        <div className="feature__content">
            <h3 className="feature__title">
                {props.heading}
            </h3>
            <p className="paragraph feature__text">
                {props.text}
            </p>
        </div>
    </div>
)

export default Feature;