import { Grid } from "@material-ui/core";
import React from "react";

function PlayerCard(props) {
  console.log(props.player);

  return (
    <div>
      <Grid style={{ backgroundColor: "white" }} container spacing={2}>
        <Grid item xs={12} md={2}>
          <img
            src="https://cdn.brawlstats.com/player-thumbnails/28000048.png"
            style={{ width: "50%", margin: "auto", display: "block" }}
          />
        </Grid>
        <Grid item container xs={12} md={4} spacing={3} direction="column">
          <Grid item>{props.player.name}</Grid>
          <Grid item>{props.player.club.name}</Grid>
          <Grid item>{props.player.trophies}</Grid>
        </Grid>
        <Grid item container xs={12} md={3} spacing={3} direction="column">
        </Grid>
        <Grid item container xs={12} md={3} spacing={3} direction="column">
        </Grid>
      </Grid>
    </div>
  );
}

export default PlayerCard;
