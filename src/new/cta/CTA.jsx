import React from 'react';
import './cta.css';
import { useNavigate } from 'react-router-dom';
const CTA = () => {
  const navigate = useNavigate();
  return (<div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Got A Song To Vibe On?</p>
      <h3>Create Your Playlist And Save Endless Songs! </h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button" onClick={() => navigate('/playlists#')}>Create Playlist</button>
    </div>
  </div>
  )
}


export default CTA;
