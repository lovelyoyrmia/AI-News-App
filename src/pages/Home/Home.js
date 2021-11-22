import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCard from "../../components/NewsCard/NewsCard";
import wordsToNumbers from "words-to-numbers";
import iconRobot from "../../images/icon.png";

const alanKey =
  "543264df21a06aa1c062ab91db8468c62e956eca572e1d8b807a3e2338fdd0dc/stage";

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
              width: "17rem",
              height: "17rem",
            }}
          />
        </div>
        <NewsCard articles={newsArticles} activeArticle={activeArticle} />
      </div>
    </>
  );
}

export default Home;
