import React from "react";
import arrow from "@assets/arrow2.svg";
import styles from "./Button.module.scss";

const Button = ({ text }) => {
    return (
        <button className={styles["styled-button"]}>
            <img
                src={arrow}
                alt="Arrow"
                className={styles["styled-button__arrow"]}
            />
            {text}
        </button>
    );
};

export default Button;
