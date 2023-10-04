import "../styles/HeaderNav.css";
import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const StyledLink = styled(Link)({
    textDecoration: "none",
    color: "black",
  });

  return (
    <nav style={{marginTop:'30px'}}>
      <h1>
        <StyledLink to="/">Furniture Heaven</StyledLink>
      </h1>
      <div className="top-menu">
        <h3>
          <StyledLink to="/">Home</StyledLink>
        </h3>
        <h3>
          <StyledLink to="/products">Products</StyledLink>
        </h3>
        <h3>About</h3>
        <h3>Contact</h3>
        <Button variant="contained">Sign in</Button>
      </div>
    </nav>
  );
};

export default HeaderNav;
