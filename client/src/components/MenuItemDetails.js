const MenuItemDetails = ({ menuItem }) => {
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
      <p>{menuItem.createdAt}</p>
    </div>
  );
};

export default MenuItemDetails;
