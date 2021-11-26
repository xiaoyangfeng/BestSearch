import { useState } from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch, searched }) => {
  const [phrase, setPhrase] = useState(searched);
  const onKeyDown = (e) => {
    if (e.keyCode === 13 && phrase) {
      onSearch(phrase);
    }
  };
  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      <TextField
        size="small"
        fullWidth
        placeholder="Search for new products in 961K stores"
        variant="outlined"
        onChange={(e) => setPhrase(e.target.value)}
        value={phrase}
        onKeyDown={onKeyDown}
      />
      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          if (phrase) {
            onSearch(phrase);
          }
        }}
        sx={{ ml: "10px", color: "#bbb", borderColor: "#bbb" }}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchBar;
