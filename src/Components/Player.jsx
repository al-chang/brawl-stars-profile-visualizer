import React from "react";
import { Grid } from "@material-ui/core";
import PlayerCard from "./PlayerCard";
import {
  WinLose,
  GameModes,
  RecentBrawlers,
  BrawlerTrophies,
  TrophiesOverTime,
} from "./Graphs";

function Player(props) {
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
        <Grid item xs={12} sm={4}>
          <GameModes gameModes={props.player.recentGameModes} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <WinLose winLose={props.player.winLose} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RecentBrawlers recentBrawlers={props.player.recentBrawlers} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BrawlerTrophies brawlerData={props.player.brawlerData} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TrophiesOverTime trophiesOverTime={props.player.trophiesOverTime} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Player;
