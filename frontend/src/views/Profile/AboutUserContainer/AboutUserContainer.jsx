import React from "react";
import logo from "@assets/logo.svg";
import profilePicture from "@assets/avatar-default.png";
import "./AboutUserContainer.scss";

const AboutUserContainer = () => {
    return (
        <section className="about-user-container">
            <img 
                src={profilePicture}
                alt="Photo for Preview card"
                className="about-user-container__photo"
            />
            <button class="about-user-container__edit">
                <p class="edit__text">Редактировать профиль</p>
            </button>
            <div className="about-user-container__info">
                <p className="about-user-container__text">Только об одном можно в жизни пожалеть - о том, что ты когда-то так и не рискнул.</p>
            </div>
            
        </section>
    )
}

export default AboutUserContainer;