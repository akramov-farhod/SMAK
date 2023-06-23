import { useMenuItemsContext } from "../hooks/useMenuItemsContext";

//date FNS
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const MenuItemDetails = ({ menuItem }) => {
  const { dispatch } = useMenuItemsContext();

  const handleClick = async () => {
    const response = await fetch("/api/menu/" + menuItem._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_MENUITEM", payload: json });
    }
  };

  return (
    <div className="menuItem-details">
      <h4>{menuItem.title}</h4>
      <p>
        <strong>Price ($): </strong>
        {menuItem.price}
      </p>
      <p>
        <strong>Description: </strong>
        {menuItem.description}
      </p>
      <p>
        {formatDistanceToNow(new Date(menuItem.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick} className="material-symbols-outlined">
        delete
      </span>
    </div>
  );
};

export default MenuItemDetails;
