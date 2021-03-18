import React, { useState, useEffect } from "react";
import PlayerModel from "../Model/PlayerModel";
import Player from "./Player";
import axios from "axios";
import { Redirect } from "react-router-dom";
import TestData from "../test-data.json";

function Profile({ match }) {
  const [playerModel, setPlayerModel] = useState(null);
  const [redirect404, setRedirect404] = useState(false);

  // Retrieve player data from the server and set model to player data
  // Redirect to 404 if player data is not found
  const loadNewUser = (inputText) => {
    axios
      .get("/playerData/" + inputText)
      .then((response) => setPlayerModel(response.data))
      .catch(() => setRedirect404(true));
  };

  useEffect(() => {
    loadNewUser(match.params.playerID);

    //setPlayerModel(new PlayerModel(TestData));
  }, []);

  return (
    <div>
      {playerModel != null ? (
        <Player player={playerModel} />
      ) : (
        <h1>Loading</h1>
      )}
      {redirect404 && <Redirect push to="/404" />}
    </div>
  );
}

export default Profile;
