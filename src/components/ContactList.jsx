import React, { useState } from "react";
import { ContactCard } from "./ContactCard";

var initItem = [
  {
    id: 1,
    img: "image",
    name: "Annette Murphy",
    email: "sara.cuz@example.com",
    phone: "8920494692",
  },
  {
    id: 2,
    img: "image",
    name: "Theresa Watson",
    email: "michael.mitchell@example.com",
    phone: "8920494692",
  },
  {
    id: 3,
    img: "image",
    name: "Cody Howard",
    email: "glen.lane@example.com",
    phone: "8920494692",
  },
  {
    id: 4,
    img: "image",
    name: "Max Lane",
    email: "dwight.fleming@example.com",
    phone: "8920494692",
  },
  {
    id: 5,
    img: "image",
    name: "Marvin Fisher",
    email: "dwight.fleming@example.com",
    phone: "8920494692",
  },
  {
    id: 6,
    img: "image",
    name: "Brooklyn Mccoy",
    email: "chad.stephens@example.com",
    phone: "8920494692",
  },
];

export function ContactList() {
  const [data, setData] = useState(initItem);

  return (
    <>
      {data.map((item) => {
        return (
          <ContactCard
            key={item.id}
            name={item.name}
            email={item.email}
            image={item.img}
            phone={item.phone}
          />
        );
      })}
    </>
  );
}
