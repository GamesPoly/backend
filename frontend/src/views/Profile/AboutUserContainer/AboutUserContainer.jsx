import React from 'react';
import profilePicture from '@assets/avatar-default.png';
import './AboutUserContainer.scss';

const AboutUserContainer = () => {
  return (
    <section className="about-user-container">
      {/* Кнопка редактирования */}
      <button className="about-user-container__edit">
        <p className="edit__text">Редактировать профиль</p>
      </button>
      
      {/* Блок с аватаркой и информацией */}
      <div className="info-block">
        <div className="about-user-container__avatar">
          <img
            src={profilePicture}
            alt="Изображение профиля"
            className="about-user-container__photo"
          />
        </div>
        
        <div className="about-user-container__details">
          <div className="about-user-container__name">
            <span>Tomlinz</span>
          </div>
          <div className="about-user-container__status">
            <p>в сети</p>
          </div>
          <div className="about-user-container__description">
            <p>только об одном можно в жизни пожалеть - о том, что ты когда-то так и не рискнул.</p>
          </div>
          
          {/* Полоса с активностью */}
          <div className="about-user-container__activity-bar">
            <p className="activity-title">Недавняя активность</p>
            <p className="activity-time">10 ч. за последнюю неделю</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUserContainer;