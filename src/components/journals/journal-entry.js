import React from "react";

//thi is a functinal component to render each "journal entry" on the screen.
export const JournalEntry = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}; 