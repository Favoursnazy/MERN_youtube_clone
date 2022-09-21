import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.post(`/videos/search${query}`);
      setVideos(res.data);
    };

    fetchVideos();
  }, [query]);

  return (
    <Container>
      {videos && videos.map((video) => <Card video={video} key={video._id} />)}
    </Container>
  );
};

export default Search;