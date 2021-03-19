import { Grid } from "@material-ui/core";
import React from "react";
import PlayerStats from "./PlayerStats"

function PlayerCard(props) {
  console.log(props.player);

  return (
      <Grid style={{ backgroundColor: "white" }} container spacing={1}>
        <Grid item xs={12} md={2}>
          <img
            src={`/images/profile/${props.player.icon.id}.png`}
            style={{ textAlign: "center", width: "50%", margin: "auto", display: "block", paddingTop: "20%" }}/>
        </Grid>
        <Grid item container xs={12} md={4} direction="column" style={{fontSize:"1.4em", paddingTop: "3%"}}>
          <Grid item>{props.player.name}</Grid>
          <Grid item>{props.player.club.name}</Grid>
          <Grid item><img src="/images/trophy.jpeg" style={{width:"5%", paddingRight:"2%"}}></img>{props.player.trophies}</Grid>
        </Grid>
        <PlayerStats 
          label1={"Highest Trophies"}
          item1={props.player.highestTrophies}
          label2={"Experience Level"}
          item2={props.player.expLevel}
          label3={"Experience Points"}
          item3={props.player.expPoints}
        />
        <PlayerStats 
          label1={"3v3 Victories"}
          item1={props.player["3vs3Victories"]}
          label2={"Solo Victories"}
          item2={props.player.soloVictories}
          label3={"Duo Victories"}
          item3={props.player.duoVictories}
        />
        <PlayerStats 
          label1={"Big Brawler Time"}
          item1={props.player.bestTimeAsBigBrawler}
          label2={"Robo Rumble Time"}
          item2={props.player.bestRoboRumbleTime}
          label3={"Player tag"}
          item3={props.player.tag}
        />
      </Grid>
  );
}

export default PlayerCard;
