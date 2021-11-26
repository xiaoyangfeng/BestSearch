import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="h4" fontWeight={500} component="span">
            Best
          </Typography>
          <Typography variant="h4" fontWeight={300} component="span" mr="24px">
            Search
          </Typography>
        </Link>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
