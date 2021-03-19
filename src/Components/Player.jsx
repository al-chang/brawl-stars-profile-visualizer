import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import PlayerCard from "./PlayerCard";
import Battlelog from "./Battlelog";
import GraphLayout from "./GraphLayout";

function Player(props) {
  const [statsOrLog, setStatsOrLog] = useState(true);

  return (
    <div>
      <Grid
        container
        spacing={4}
        style={{ width: "100%", paddingLeft: "10%", paddingRight: "10%" }}
      >
        <Grid item xs={12}>
          <PlayerCard player={props.player} />
        </Grid>
      </Grid>
      <button onClick={() => setStatsOrLog(!statsOrLog)} />
      {statsOrLog ? (
        <GraphLayout player={props.player} />
      ) : (
        <Battlelog battles={props.player.items} />
      )}
    </div>
  );
}

export default Player;
