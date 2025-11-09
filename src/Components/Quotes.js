import React, { useEffect, useState } from "react";
import "./Quotes.css";

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
  const apiUrl = "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent("https://zenquotes.io/api/random");

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const quoteData = data[0];
      setQuote({ content: quoteData.q, author: quoteData.a });
    })
    .catch((err) => {
      console.error("Error fetching quote:", err);
      setError("Failed to load quote. Please try again later.");
    });
}, []);

  return (
    <div className="quote-box">
      <h3>Daily Inspiration</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {quote ? (
        <blockquote>
          “{quote.content}” — <span>{quote.author}</span>
        </blockquote>
      ) : (
        !error && <p>Loading quote..?</p>
      )}
    </div>
  );
};

export default Quotes;
