import { useEffect } from "react";
import { useMenuItemsContext } from "../hooks/useMenuItemsContext";

// Components
import MenuItemDetails from "../components/MenuItemDetails";
import MenuItemForm from "../components/MenuItemForm";

const Home = () => {
  const { menuItems, dispatch } = useMenuItemsContext();

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch("/api/menu");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_MENUITEMS", payload: json });
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="home">
      <div className="menuItems">
        {menuItems &&
          menuItems.map((menuItem) => (
            <MenuItemDetails key={menuItem._id} menuItem={menuItem} />
          ))}
      </div>
      <MenuItemForm />
    </div>
  );
};

export default Home;
