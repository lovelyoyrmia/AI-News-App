import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCard from "../../components/NewsCard/NewsCard";
import wordsToNumbers from "words-to-numbers";
import { FooterContainer, NavBar } from "../../components";
import iconRobot from "../../images/icon.png";

const alanKey = process.env.ALAN_KEY;

function Home() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
          console.log(articles);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumbers =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumbers - 1];

          if (parsedNumbers > 20) {
            alanBtn().playText("Please try that again");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening..");
          }
        }
      },
    });
    document.title = "AI News";
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={iconRobot}
            alt="icon.png"
            style={{
              width: "20rem",
              height: "20rem",
            }}
          />
        </div>
        <NewsCard articles={newsArticles} activeArticle={activeArticle} />
      </div>
      <FooterContainer />
    </>
  );
}

export default Home;
