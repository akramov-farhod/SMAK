import { useState } from "react";
import { useMenuItemsContext } from "../hooks/useMenuItemsContext";

const MenuItemForm = () => {
  const { dispatch } = useMenuItemsContext();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const menuItem = { title, price, description };

    const response = await fetch("/api/menu", {
      method: "POST",
      body: JSON.stringify(menuItem),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setTitle("");
      setPrice("");
      setDescription("");
      setError(null);
      setEmptyFields([]);
      console.log("New Menu Item has been added.", json);
      dispatch({ type: "CREATE_MENUITEM", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Menu Item</h3>

      <label>Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Price ($):</label>
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className={emptyFields.includes("price") ? "error" : ""}
      />

      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={emptyFields.includes("description") ? "error" : ""}
      />

      <button>Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default MenuItemForm;
