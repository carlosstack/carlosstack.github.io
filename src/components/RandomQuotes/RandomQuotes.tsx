import React, { useState } from "react";
import "./RandomQuotes.scss";
import QuotesJson from "../../assets/quotes/quotes";

const RandomQuotes = () => {
  const QuoteSelector = () => {
    let n = Math.floor(Math.random() * QuotesJson.length);
    return QuotesJson[n];
  };

  const NewQuote = () => {
    setQuote(QuoteSelector());
  };

  let [quote, setQuote] = useState(QuoteSelector());
  return (
    <button className="RandomQuotes" onClick={() => NewQuote()}>
      <p>
        <i className="fas fa-quote-left"></i>
        {quote}
        <i className="fas fa-quote-right"></i>
      </p>
    </button>
  );
};
export default RandomQuotes;
