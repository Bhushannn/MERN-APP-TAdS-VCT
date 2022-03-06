import React, { useState, useEffect } from "react"
import { GiSoundOff, GiSoundOn } from 'react-icons/gi'
import Sound from "./images/theme.mp3"

const useMultiAudio = urls => {
  const [sources] = useState(
    urls.map(url => {
      return {
        url,
        audio: new Audio(url)
      };
    })
  );

  const [players, setPlayers] = useState(
    urls.map(url => {
      return {
        url,
        playing: false
      };
    })
  );

  const toggle = targetIndex => () => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex(p => p.playing === true);
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
  };

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause();
    });
  }, [sources, players]);

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = false;
        setPlayers(newPlayers);
      });
    });
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener("ended", () => {
          const newPlayers = [...players];
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      });
    };
  }, []);

  return [players, toggle];
};

const TogglePlay = ({ urls }) => {
  const [players, toggle] = useMultiAudio(urls);

  return (
    <div>
      {players.map((player, i) => (
        <Player key={i} player={player} toggle={toggle(i)} />
      ))}
    </div>
  );
};

// url = new Audio(Sound)

const Player = ({ player, toggle }) => (
  <div>
    {/* <p>Stream URL: {player.url}</p> */}
    <button onClick={toggle}>{player.playing ?  <div>{GiSoundOff}</div> : <div>{GiSoundOn}</div>} </button>
  </div>
);

export default TogglePlay;