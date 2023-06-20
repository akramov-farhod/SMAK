import { createContext, useReducer } from "react";

export const MenuItemsContext = createContext();

export const menuItemsReducer = (state, action) => {
  switch (action.type) {
    case "SET_MENUITEMS":
      return {
        menuItems: action.payload,
      };
    case "CREATE_MENUITEM":
      return {
        menuItems: [action.payload, ...state.menuItems],
      };
    default:
      return state;
  }
};

export const MenuItemsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(menuItemsReducer, {
    menuItems: null,
  });

  return (
    <MenuItemsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MenuItemsContext.Provider>
  );
};
