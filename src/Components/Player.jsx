import React from "react";
import { Grid } from "@material-ui/core";
import PlayerCard from "./PlayerCard";
import { WinLose, GameModes, BrawlerTrophies } from "./Graphs";

function Player(props) {
  console.log(props.player)

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} spacing={5}>
          <PlayerCard player={props.player} />
        </Grid>
        <Grid item xs={12} sm={4}  spacing={5}>
          <GameModes gameModes={props.player.RecentGameModes()} />
        </Grid>
        <Grid item xs={12} sm={4} spacing={5}>
          <WinLose winLose={props.player.NumberWins()} />
        </Grid>
        <Grid item xs={12} sm={4} spacing={5}>
          <WinLose winLose={props.player.NumberWins()} />
        </Grid>
        <Grid item xs={12} spacing={6}>
          <BrawlerTrophies brawlerData={props.player.GetBrawlersTrophies()} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Player;
