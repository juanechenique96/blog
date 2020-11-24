import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Card from "../components/Card";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  margin-bottom: 30px;
`;

const ContainerCards = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`;

const Post = () => {
  const [blog, setBlog] = useState([]);

  const fetchBlog = async () => {
    const response = await axios.get("http://localhost:8000/api/");
    const articulos = await response.data;
    setBlog(articulos);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <Title>Latest posts</Title>
      <ContainerCards className="grid">
        {blog.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            excerpt={item.excerpt}
            date={item.published}
          />
        ))}
      </ContainerCards>
    </>
  );
};

export default Post;
