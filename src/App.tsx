import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";
import { PeopleType } from "./types/peopleType";

function App() {
  const [people, setPeople] = useState<PeopleType["people"]>([
    {
      name: "Vin Diesel",
      age: 54,
      url: "https://notrix.at/img/rates/95/how-vin-diesel-got-his-big-break-hollywood.jpg",
      note: "My favorite actor :)",
    },
  ]);
  return (
    <div className="App">
      <h1 className="App_heading">People Invited to my Birthday🍮🍺🍰🥧</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
