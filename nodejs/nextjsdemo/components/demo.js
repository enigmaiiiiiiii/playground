import React from "react";

const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        "en-US",
        { weekday: 'long' }
    ).format(date);
}

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.name = "gregorio Y. zara";
    }

    render() {
        return (
            <div>
                <img
                    className="avatar"
                    src="https://i.imgur.com/8Km9tLL.png"
                    alt="gregorio Y. zara"
                />
                <h1>{this.name}'s To Do List</h1>
                <h1>To Do List for { formatDate(today)} </h1>
            </div>
        );
    }
}

export default Demo;
