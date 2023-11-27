import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>headings are the best</h1>
      <p>hi, i am a p tag</p>
    </article>
  );
}
