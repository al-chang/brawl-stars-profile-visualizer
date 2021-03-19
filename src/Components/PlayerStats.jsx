import React from "react";
import { Grid } from "@material-ui/core";


function PlayerStats(props) {
    const labelStyle = {
        fontSize: ".75rem",
        lineHeight: "0"
    };
    const itemStyle = {
        fontSize: "1.25rem",
        lineHeight: "0"
    }

    return (
        <Grid style={{textAlign: "center"}} item container xs={12} md={2} direction="column">
            <Grid item>
                <span style={labelStyle}>{props.label1}</span> <br />
                <span style={itemStyle}>{props.item1}</span>
            </Grid>
            <Grid item>
                <span style={labelStyle}>{props.label2}</span> <br />
                <span style={itemStyle}>{props.item2}</span>
            </Grid>
            <Grid item>
                <span style={labelStyle}>{props.label3}</span> <br />
                <span style={itemStyle}>{props.item3}</span>
            </Grid>
        </Grid>
    );
}

export default PlayerStats;