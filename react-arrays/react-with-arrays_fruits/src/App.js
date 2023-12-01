import Card from "./components/Card";
import { fruits } from "./lib/fruits";
export default function App() {
  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card name={fruit.name} key={fruit.id} color={fruit.color} />;
      })}
    </div>
  );
}
