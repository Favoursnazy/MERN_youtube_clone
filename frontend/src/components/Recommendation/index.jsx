import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Card";

const Container = styled.div`
  flex: 2;
`;

const index = ({ tags }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.post(`/videos/tags?tags=${tags}`);
      setVideos(res.data);
    };

    fetchVideos();
  });

  return (
    <Container>
      {videos &&
        videos.map((video) => <Card type="sm" key={video._id} video={video} />)}
    </Container>
  );
};

export default index;
