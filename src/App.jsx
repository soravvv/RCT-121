import { useState } from "react";
import "./App.css";
import { ContactCard } from "./components/ContactCard";
import { ContactList } from "./components/ContactList";

function App() {
  return (
    <div>
      <ContactCard />
      <ContactList />
    </div>
  );
}

export default App;
