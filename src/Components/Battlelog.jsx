import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import PlayerCard from "./PlayerCard";
import { Grid } from "@material-ui/core";
import nameToImage from "../nameToImage";

function PlayerList(props) {
  const label = {
    margin: "0",
    color: "grey",
    fontSize: ".75rem",
    lineHeight: ".05",
  };
  const information = { margin: "0", paddingBottom: "2%" };

  const players = [];
  props.team.forEach((player) => {
    players.push(
      <Grid container item alignItems="center" style={{backgroundColor: "red"}}>
        <Grid
          item
          xs={4}
          style={{ textAlign: "center", paddingTop: "5%", paddingBottom: "5%" }}
          alignItems="center"
        >
          <img
            style={{ width: "50%" }}
            src={"/images/profile/" + nameToImage[player.brawler.name] + ".png"}
          ></img>
        </Grid>
        <Grid item xs={8} style={{ paddingTop: "2%", paddingBottom: "2%" }} alignItems="center">
          <p style={label}>Username:</p>
          <p style={information}>
            <a
              style={{ textDecoration: "none" }}
              href={`/player/${_.replace(player.tag, "#", "")}`}
            >
              {player.name}
            </a>
          </p>
          <p style={label}>Trophies:</p>
          <p style={information}>{player.brawler.trophies}</p>
          <p style={label}>Power Level:</p>
          <p style={information}>{player.brawler.power}</p>
        </Grid>
      </Grid>
    );
  });

  return (
    <Grid container item xs={4} direction="column">
      {players}
    </Grid>
  );
}

function Battle(props) {

    console.log(props.battle);
  return (
    <Grid
      container
      item
      xs={12}
      style={{ backgroundColor: "white", marginTop: "5%" }}
    >
      <PlayerList team={props.battle.battle.teams[0]} />
      <Grid
        container
        item
        xs={4}
        direction="column"
        style={{ textAlign: "center" }}
        justify="space-evenly"
      >
        <Grid item>{_.startCase(props.battle.event.mode)}</Grid>
        <Grid item>{props.battle.event.map}</Grid>
        <Grid item>{props.battle.battle.duration}</Grid>
        <Grid item>Trophy Change</Grid>
      </Grid>
      <PlayerList team={props.battle.battle.teams[1]} />
    </Grid>
  );
}

function Log(props) {
  const playerBattles = [];
  props.battlelog.battles.items.forEach((battle) => {
    playerBattles.push(<Battle battle={battle} />);
  });

  return (
    <Grid
      container
      spacing={4}
      style={{ width: "100%", paddingLeft: "10%", paddingRight: "10%" }}
    >
      <Grid item xs={12}>
        <PlayerCard player={props.battlelog} />
      </Grid>
      {playerBattles}
    </Grid>
  );
}

function Battlelog({ match }) {
  const [playerModel, setPlayerModel] = useState(null);
  const [redirect404, setRedirect404] = useState(false);

  const loadNewUser = (inputText) => {
    axios
      .get("/playerData/" + inputText + "/battlelog")
      .then((response) => {
        setPlayerModel(response.data);
      })
      .catch(() => setRedirect404(true));
  };

  useEffect(() => {
    let id = _.replace(_.toUpper(match.params.playerID), " ", "");
    loadNewUser(id);
  }, []);

  return (
    <div>
      {playerModel != null ? <Log battlelog={playerModel} /> : <h1>Loading</h1>}
    </div>
  );
}

export default Battlelog;
