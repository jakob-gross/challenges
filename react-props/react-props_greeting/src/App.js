import "./styles.css";

export default function App() {
  return <Greeting name="Jakob" />;
}

function Greeting({ name }) {
  let greetingText;
  if (name === "Sven") {
    greetingText = "Hallo Coach!";
  } else {
    greetingText = `Hallo ${name}`;
  }
  return <h1>{greetingText}</h1>;
}
