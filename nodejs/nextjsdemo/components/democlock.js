import React from "react";

function Welcome(props) {
    return <h1> Hello, {props.name}</h1>;
}
export default function democlock() {
    return (
        <div>
            {Welcome({ name: "lilith" })}
        </div>
    );
}
