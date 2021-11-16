import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Quote from "./components/quote/Quote.js"; 
import Button from '@mui/material/Button';

function App() {
  const [breakingBadQuote, setBreakingBadQuote] = useState({});

  const handleClickQuotes = async () => {
    const apiRequest = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const quote = await apiRequest.json();

    setBreakingBadQuote(quote[0]);
  };

  useEffect(() => {
    handleClickQuotes();
  }, []);

  return (
    <Fragment >
      <Quote breakingBadQuote={breakingBadQuote} />
      <Button  variant="contained"  style={{ margin: "auto", background: "#114a39", border:"black", fontWeight: "bold", marginLeft: 900, padding:10, marginTop:30, fontFamily: "Arial"}}  onClick={handleClickQuotes}>Get quote</Button>
    </Fragment>
  );
}

export default App;
