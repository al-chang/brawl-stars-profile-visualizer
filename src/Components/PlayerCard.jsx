import { Grid } from "@material-ui/core";
import React from "react";

function PlayerCard(props) {
  return (
    <div>
      <Grid style={{ backgroundColor: "white" }} container spacing={2}>
        <Grid item xs={4}>
          Hey
        </Grid>
        <Grid item container xs={8}>
          There Gamer
        </Grid>
      </Grid>
    </div>
  );
}

export default PlayerCard;
