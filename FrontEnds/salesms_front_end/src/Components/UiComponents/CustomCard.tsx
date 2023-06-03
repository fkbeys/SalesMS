import { Paper } from "@mui/material";
import React from "react";
type Props = {
  children: JSX.Element | JSX.Element[];
};
export class CustomCard extends React.Component<Props> {
  render() {
    return (
      <Paper elevation={3} sx={{ backgroundColor: "secondary", padding: 3 }}>
        {this.props.children}
      </Paper>
    );
  }
}
