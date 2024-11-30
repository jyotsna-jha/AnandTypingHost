import Item from "./Item";
import { PRODUCTS, CONTACT, COMPANY, SUPPORT } from "./Menu";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-16 sm:px-8 px-5 py-16">
      <Item Links={CONTACT} title="CONTACT" />
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;