import React, { useState } from 'react';

export interface HelloWorldProps {
    world: string;
}

const style = {
    border: "solid black 1px",
    padding: "1rem",
    margin: "1rem",
};

export function HelloWorld(props: HelloWorldProps): JSX.Element {
    const [now, setNow] = useState((new Date()).toString());
    return (
        <div style={style}>
            Hello {props.world}!
            <br/>
            Current time is {now}.
            <br/>
            <button onClick={() => setNow((new Date()).toString())}>Get Time</button>
        </div>
    );
}