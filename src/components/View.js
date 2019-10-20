import React from "react";

import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import Typography from "@material-ui/core/Typography";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";

import ArrowBack from "@material-ui/icons/ArrowBack";
import Share from "@material-ui/icons/Share";

import InfoCard from "./InfoCard.js";

export default function View(onBack, city) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onBack}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">{city.name}</Typography>
        </Toolbar>
      </AppBar>

      {city.verticalList ? (
        <Grid container spacing={2} alignItems="center" justify="center">
          {city.verticalList.map(card => (
            <Grid item xs={11}>
              {InfoCard(card)}
            </Grid>
          ))}
        </Grid>
      ) : null}

      {city.horizontalList ? (
        <GridList
          spacing={2}
          cellHeight="auto"
          cols={1.5}
          style={{ flexWrap: "nowrap" }}
        >
          {city.horizontalList.map(card => (
            <GridListTile>{InfoCard(card)}</GridListTile>
          ))}
        </GridList>
      ) : null}

      <Fab
        color="primary"
        aria-label="share"
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          transition: "all 0.2s ease-in 0s",
          "z-index": "9999",
          cursor: "pointer"
        }}
      >
        <Share />
      </Fab>
    </>
  );
}
