import React, { useState } from 'react';

export default function TextForm(props) {


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event) => {

        setText(event.target.value)
    };
    const handleDnClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary m-3 p-2" onClick={handleDnClick}>Convert to Lowercase</button>

            </div>
            <div className="container2">
                <h1>Text utils summary</h1>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p> {0.008 * text.split(" ").length } Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </>
    );
}
