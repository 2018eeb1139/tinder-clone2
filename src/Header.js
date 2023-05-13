import React from "react";
import "./Header.css";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = ({ backButton }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backButton ? (
        <IconButton
          onClick={() => {
            navigate(backButton);
          }}
        >
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
          alt="tinder logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
