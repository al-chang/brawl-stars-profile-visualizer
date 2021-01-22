import React, { useState, useEffect } from "react";
import PlayerModel from "../Model/PlayerModel";
import axios from "axios";

function Player({ match }) {
  const [playerModel, setPlayerModel] = useState(null);

  useEffect(() => {
    const loadNewUser = (inputText) => {
      axios.get("/playerData/" + inputText).then((response) => {
        console.log(response.data);
        setPlayerModel(new PlayerModel(response.data));
      });
    };
    loadNewUser(match.params.playerID);
  }, []);

  return (
    <div>
      {playerModel != null ? (
        <h1>{console.log(playerModel.RecentBrawlers())}</h1>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Player;
