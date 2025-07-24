import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    // Clear fields
    setQuantity(1);
    setDescription("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="add-form">
        <h3>What do you need for your 😍 trip?</h3>
        <select
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item..."
        />
        <button>Add</button>
      </form>
      {/* <p>{list}</p> */}
    </>
  );
}
