import React from "react";

import Avatar from "@material-ui/core/Avatar";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import { red, green, orange, brown } from "@material-ui/core/colors";

import Icon from "@material-ui/core/Icon";

import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import WarningIcon from '@material-ui/icons/Warning';

const ICON_TO_BG = {
  thumbup: green[500],
  warning: orange[500],
  thumbsupdown: brown[500],
  thumbdown: red[500]
};

const avatarToIcon = avatar => {
  if (avatar === 'thumbdown') {
    return (<ThumbDownIcon />);
  } else if (avatar === 'thumbup') {
    return (<ThumbUpIcon />);
  } else if (avatar === 'thumbsupdown') {
    return (<ThumbsUpDownIcon />);
  } else if (avatar === 'warning') {
    return (<WarningIcon />);
  }
  return <Icon color="action">{avatar}</Icon>;
}

export default function InfoCard(card) {
  const backgroundColor = ICON_TO_BG[card.avatar] || "#ffffff";
  return (
    <Card style={{ padding: "2", margin: "2" }}>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor }}>
            {avatarToIcon(card.avatar)}
          </Avatar>
        }
        title={card.title}
        titleTypographyProps={{ align: "left" }}
        subheader={card.subheader}
        subheaderTypographyProps={{ align: "left" }}
      />
      {card.image ? (
        <CardMedia
          image={card.image.source}
          title={card.image.title}
          style={{ height: "128px" }}
        />
      ) : null}
      {card.text ? (
        <CardContent>
          {card.text.map(text => (
            <Typography variant="body1" gutterBottom align="left">
              {text}
            </Typography>
          ))}
        </CardContent>
      ) : null}
    </Card>
  );
}
