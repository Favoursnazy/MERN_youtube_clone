import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Upload from "../Upload";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  height: 100%;
  justify-content: flex-end;
  position: relative;
`;

const Search = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-raduis: 3px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  padding-right: 10px;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text};
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

const User = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: #999;
`;

const index = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const [q, setQ] = useState("");

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input
              placeholder="Search Your Videos"
              onChange={(e) => setQ(e.target.value)}
            />
            <SearchOutlinedIcon
              onClick={() => navigate(`/search?q=${q}`)}
              style={{ cursor: "pointer" }}
            />
          </Search>
          {currentUser ? (
            <User>
              <VideoCallIcon
                onClick={() => setOpenModal(true)}
                style={{ cursor: "pointer" }}
              />
              <Avatar src={currentUser.img} />
              {currentUser.name.split(" ")[0]}
            </User>
          ) : (
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <Button>SIGN IN</Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {openModal && <Upload setOpenModal={setOpenModal} />}
    </>
  );
};

export default index;
