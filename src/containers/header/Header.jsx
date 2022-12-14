import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import ButtonMailto from '../../components/mail/ButtonToMail';


const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">When Music Hits You, You Won&apos;t Feel The Pain !</h1>
      <p>Listen to the soundtrack of your life. Enjoy your music from top artists across the world because Music is the wine that fills the cup of silence.</p>

      <div className="gpt3__header-content__input">
        <button type='text' onClick={(e) => {
          window.location.href = "mailto:nirvana.music.soul@gmail.com";
          e.preventDefault();
        }}>Email Us</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>100+ people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
