import React, { useEffect, useState } from "react";
import { PeopleType as Props } from "../types/peopleType";

type Propstype = {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
};

const AddToList: React.FC<Propstype> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput((perValue) => {
      return {
        ...perValue,
        [name]: value,
      };
    });
  };

  const handleClick = () => {
    if (input.name && input.age && input.url && input.note) {
      setPeople((perValue) => {
        localStorage.setItem("people", JSON.stringify([...perValue, input]));

        return [
          ...perValue,
          {
            name: input.name,
            age: parseInt(input.age),
            url: input.url,
            note: input.note,
          },
        ];
      });
      setInput({
        name: "",
        age: "",
        url: "",
        note: "",
      });
    }
  };

  localStorage.setItem("items", JSON.stringify(people));

  useEffect(() => {
    const getPeople = JSON.parse(localStorage.getItem("people") || "[]");
    setPeople(getPeople);
  }, [setPeople]);

  return (
    <div className="AddToList">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={input.name}
        placeholder="Name"
        className="AddToList-input"
        autoComplete="off"
        required
      />
      <input
        type="text"
        name="age"
        onChange={handleChange}
        value={input.age}
        placeholder="Age"
        className="AddToList-input"
        autoComplete="off"
        required
      />
      <input
        type="text"
        name="url"
        onChange={handleChange}
        value={input.url}
        placeholder="Image Url"
        className="AddToList-input"
        autoComplete="off"
        required
      />
      <textarea
        name="note"
        onChange={handleChange}
        value={input.note}
        placeholder="Note"
        className="AddToList-input"
        autoComplete="off"
        required
      />

      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
