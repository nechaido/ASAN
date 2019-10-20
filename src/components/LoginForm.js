import React from 'react';

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

export default function LoginForm(props) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={9}>
        <Typography variant="body2" gutterBottom align="left">
          30 sec check will save your health!
        </Typography>
        <Typography variant="h6" gutterBottom align="left">
          Your daily dose of info about pollution around you
        </Typography>
        <FormControl style={{ width: "100%", paddingBottom: "24px" }}>
          <InputLabel htmlFor="city">City</InputLabel>
          <Select
            value={props.city}
            inputProps={{
              name: "city",
              id: "city"
            }}
            onChange={event => {
              props.onCityChange(event.target.value);
            }}
          >
            {props.cities.map(({ name, value }) => (
              <MenuItem value={value}>{name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={props.onSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}