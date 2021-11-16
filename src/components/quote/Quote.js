import React from "react";
import Container from '@mui/material/Container';
import "../quote/quote.css"; 

const Quote = ({ breakingBadQuote }) => {
  return (
    <Container fixed  style={{ background: "white", marginTop: 30, padding: 15, borderRadius: 3}}>
      <h1>{breakingBadQuote.quote}</h1>
      <p>{breakingBadQuote.author}</p>
    </Container>
  );
};

export default Quote;
