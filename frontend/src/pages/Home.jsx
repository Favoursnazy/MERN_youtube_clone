import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 20px;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const res = await axios.get(`/videos/${type}`);

      setVideos(res.data);
    };

    getVideos();
  }, [type]);

  return (
    <Container>
      {videos && videos.map((video) => <Card key={video._id} video={video} />)}
    </Container>
  );
};

export default Home;
