import "./TrendingSearches.css";
import React, { useState, useEffect } from "react";
import GetTrendingTerms from "../../Services/GetTrendingTerms";
import { Link } from "wouter";

const TrendingSearches = () => {
  const [trendingKeywords, updateTrendingKeywords] = useState<Array<string>>([]);

  useEffect(() => {
    GetTrendingTerms().then(data => {
      updateTrendingKeywords(data);
    });
  }, []);

  return (
    <div className="trending-searches-container">
      <h2>Trending Searches</h2>
      <div className='trending-words-container'>
        {trendingKeywords.map((keyword, i) => {
          return (
            <div key={i}>
              <Link className='link' href={`/giffs/${keyword}`}>
                {keyword}{" "}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    
  );
};

export default TrendingSearches;
