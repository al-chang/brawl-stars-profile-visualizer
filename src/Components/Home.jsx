import React from "react";
import SearchBar from "./SearchBar";
import { Container } from "@material-ui/core";

function Home() {
  return (
    <div>
      <Container maxWidth="sm">
        <SearchBar />
      </Container>
    </div>
  );
}

export default Home;
