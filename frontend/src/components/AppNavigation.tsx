import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";

export default function AppNavigation() {
  return (
    <AppBar position="static">
      <Toolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Project Lilac
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/"
        >
          Dashboard
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/workitems"
        >
          Work Items
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/workitems/new"
        >
          New Work Item
        </Button>

      </Toolbar>
    </AppBar>
  );
}