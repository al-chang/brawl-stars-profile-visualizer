import React from "react";
import { Grid } from "@material-ui/core";
import PlayerCard from "./PlayerCard";
import { WinLose, GameModes, RecentBrawlers, BrawlerTrophies, TrophiesOverTime } from "./Graphs";

function Player(props) {
  console.log(props.player.TrophiesOverTime())

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PlayerCard player={props.player} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <GameModes gameModes={props.player.RecentGameModes()} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <WinLose winLose={props.player.NumberWins()} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RecentBrawlers recentBrawlers={props.player.RecentBrawlers()} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BrawlerTrophies brawlerData={props.player.GetBrawlersTrophies()} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TrophiesOverTime trophiesOverTime={props.player.TrophiesOverTime()} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Player;
