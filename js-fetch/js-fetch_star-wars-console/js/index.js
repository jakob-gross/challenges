console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const data = await fetch(url);
    if (data.ok) {
      const people = await data.json();

      console.log(data);
      console.log(people);
      console.log(people.results[2].eye_color);
    } else {
      console.error("bad response");
    }
  } catch (error) {
    console.error("an error occured");
  }
}
try {
} catch (error) {}
fetchData();
