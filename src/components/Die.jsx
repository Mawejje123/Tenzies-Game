import React from "react";

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
        border: props.isHeld ? "3px solid #2ecc71" : "none"
    };

    return (
        <button
            className={`die-face face-${props.value}`}
            style={styles}
            onClick={props.holdDice}
            aria-label={`Die showing ${props.value}, ${props.isHeld ? "held" : "not held"}`}
        >
            <div className="pip-container">
                {Array(props.value).fill(null).map((_, index) => (
                    <span key={index} className="pip" />
                ))}
            </div>
        </button>
    );
}