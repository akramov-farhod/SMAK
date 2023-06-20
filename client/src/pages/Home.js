import { useEffect, useState } from "react";

// Components
import MenuItemDetails from "../components/MenuItemDetails";

const Home = () => {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch("/api/menu");
      const json = await response.json();

      if (response.ok) {
        setMenuItems(json);
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
    </div>
  );
};

export default Home;
