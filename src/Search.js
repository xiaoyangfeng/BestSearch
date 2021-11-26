import { useParams, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GrowthCard from "./components/GrowthCard";
import { Typography, Container, Grid, Skeleton } from "@mui/material";
import { useSearchByPhraseQuery } from "./app/apis/search";

const Search = () => {
  let { phrase } = useParams();
  let body = {
    login_token: "INTERVIEW_SIMPLY2021",
    search_phrase: phrase,
  };
  const { data, isFetching } = useSearchByPhraseQuery(body);

  let navigate = useNavigate();
  const onSearch = (input) => {
    let path = input.trim().replace(/\s+/g, "+");
    console.log(path);
    navigate(`/search/${path}`);
  };

  return (
    <>
      <Header>
        <SearchBar onSearch={onSearch} searched={phrase} />
      </Header>
      <Container maxWidth="lg">
        <Typography variant="h5" m="50px 0">
          Related product trends
        </Typography>
        <Grid container spacing={2}>
          {isFetching
            ? [1, 2, 3, 4].map((item, index) => (
                <Grid key={index} item xs={12} sm={6} lg={3}>
                  <Skeleton width="75%" style={{ marginBottom: "6px" }} />
                  <Skeleton width="40%" style={{ marginBottom: "6px" }} />
                  <Skeleton variant="rect" height={250} />
                </Grid>
              ))
            : null}
        </Grid>
        <Grid container spacing={2}>
          {!isFetching
            ? data.data.product_trends.map((item, index) => (
                <GrowthCard data={item} phrase={phrase} key={index} />
              ))
            : null}
        </Grid>
      </Container>
    </>
  );
};

export default Search;
