import React, { useEffect } from 'react';
import './GameEnd.css'
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

export default function GameEnd() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/", { replace: true });
  }, 12000);
  useEffect(() => {
    document.title = "TAdS || VCT"
  }, [])

  const { width, height } = useWindowSize()
  return (
    <div style={{ padding: 0 }}>
      <Confetti
        width={width}
        height={height}
        color={['#f44336', '#795548', '#ff5722', '#ff9800', '#ffc107']} />
      <div className="endgame">
        <img src="https://raw.githubusercontent.com/TAdS-VCT/Media/main/BG%20images/Fireplace2.jpeg" alt="end" className="fireplace" />
        <div className="text_endgame">
          <h1>Voila!</h1>
          <h1>The Hogwarts Express has covered all the stops and it's time to say Goodbye. Hope to see you soon in campus and explore all the places in real life.</h1>
        </div>
      </div>
    </div>
  )
}
