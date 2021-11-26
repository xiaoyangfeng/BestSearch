import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { Typography, Container } from "@mui/material";

const Home = () => {
  let navigate = useNavigate();
  const onSearch = (input) => {
    let path = input.trim().replace(/\s+/g, "+");
    navigate(`search/${path}`);
  };
  return (
    <>
      <Header/>
      <Container maxWidth="lg" style={{ textAlign: "center" }}>
        <Typography variant="h3" m="100px 0">
          Search Trends
        </Typography>
        <SearchBar onSearch={onSearch} />
      </Container>
    </>
  );
};

export default Home;
