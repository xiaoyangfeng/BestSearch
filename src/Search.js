import { useParams, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GrowthCard from "./components/GrowthCard";
import { Typography, Container, Grid, Skeleton } from "@mui/material";
import { useSearchByPhraseQuery } from "./app/apis/search";

const Search = () => {
  let { state } = useLocation();
  let { phrase } = useParams();
  // If current URL is accessed DIRECTLY (from bookmark for example), the search phrase
  // will be set as it is. Phrase will be 'one+' for http://localhost:3000/search/one+
  // This is becasue there is no way to tell if '+' from user input or transformed from
  // " " in this situation.
  // if this requirement is for real production (space to +), better think about it carefully
  if (state) {
    phrase = state.phrase;
  }
  let body = {
    login_token: "INTERVIEW_SIMPLY2021",
    search_phrase: phrase,
  };
  const { data, isFetching } = useSearchByPhraseQuery(body);

  let navigate = useNavigate();
  const onSearch = (input) => {
    let path = input.replace(/\s+/g, "+");
    navigate(`/search/${path}`, { state: { phrase: input } });
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
