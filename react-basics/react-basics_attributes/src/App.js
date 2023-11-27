import React from "react";
import "./styles.css";

export default function App() {
  return <WriteArticle />;
}

function WriteArticle() {
  return (
    <article>
      <h2 className="article__title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum sequi
        aliquid eos culpa, at dolore labore non ipsam ex esse, cumque fugiat,
        nisi sed porro! Possimus ipsum quo totam deserunt.
        <label id="input" htmlFor="input1"></label>
        <input id="input" htmlFor="input1"></input>
      </h2>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Paul_Lynch_(Autor)"
      >
        Wikipedia Article blablabla
      </a>
    </article>
  );
}
