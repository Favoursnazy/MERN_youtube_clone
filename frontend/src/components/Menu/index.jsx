import React from "react";
import styled from "styled-components";
import AddHomeIcon from "@mui/icons-material/AddHome";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import HistoryIcon from "@mui/icons-material/History";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsIcon from "@mui/icons-material/Sports";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HdIcon from "@mui/icons-material/Hd";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100%;
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
  font-size: 14px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const LoginButton = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #gray;
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const index = ({ mode, setMode }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src="https://png.pngtree.com/png-clipart/20210214/ourmid/pngtree-youtube-logo-transparent-png-png-image_5990834.png" />
            FavourTube
          </Logo>
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Items>
            <AddHomeIcon />
            Home
          </Items>
        </Link>
        <Link to="/trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Items>
            <ExploreIcon />
            Explore
          </Items>
        </Link>
        <Link
          to="/subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Items>
            <SubscriptionsIcon />
            Subscription
          </Items>
        </Link>

        <Hr />
        <Items>
          <LibraryAddIcon />
          Library
        </Items>
        <Items>
          <HistoryIcon />
          History
        </Items>
        <Hr />

        {!currentUser && (
          <>
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <LoginButton>
                  <AccountBalanceIcon /> SIGN UP
                </LoginButton>
              </Link>
            </Login>
            <Hr />
          </>
        )}
        <Title>BEST OF FAVOUR</Title>
        <Items>
          <MusicNoteIcon />
          Music
        </Items>
        <Items>
          <SportsIcon />
          Sports
        </Items>
        <Items>
          <SportsEsportsIcon />
          Gaming
        </Items>
        <Items>
          <HdIcon />
          Movies
        </Items>
        <Items>
          <NewspaperIcon />
          News
        </Items>
        <Items>
          <LiveTvIcon />
          Live
        </Items>
        <Hr />
        <Items>
          <SettingsIcon />
          Settings
        </Items>
        <Items>
          <HelpIcon />
          Help
        </Items>
        <Items onClick={() => setMode(!mode)}>
          <LightModeIcon />
          {mode ? "Light" : "Dark"} Mode
        </Items>
      </Wrapper>
    </Container>
  );
};

export default index;
