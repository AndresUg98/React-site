import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { XMarkIcon } from "@heroicons/react/24/solid"; //Añadiendiendo iconos con hero icons (https://heroicons.com/)

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext); // importamos el contexto para poder acceder al estado global, donde se encuentra "count" y "setCount" para que el contador del carrito funcione
  // console.log("PRODUCT TO SHOW", context.productToShow);

  console.log("CART: ", context.cartProducts);

  return (
    //Creando el menu despegable
    <aside
      className={` ${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => context.closeCheckoutSideMenu()}>
          {/* El icono lo podemos añadir como un componente */}
          <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" />
        </div>
      </div>

      <div className="px-6">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
