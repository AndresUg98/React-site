import { createContext, useState } from "react";

export const ShoppingCartContext = createContext(); //Creamos el contexto, podemos usar cualquier nombre

//Necesitamos un provider, para dar la informacion a los componentes
export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0); //estado de la cantidad de articulos en el carrito de compra

  //State in charge to open and close the window open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //State in charge to open and close the window
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //product detail + show product
  const [productToShow, setProductToShow] = useState({});

  // Shoping Cart - add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  return (
    //El proveedor encapsulara todos los componentes que tenemos en App, para poder darle la informacion
    //En el index.jsx de App nuestro ShoppingCartProvider esta envolviendo toda la aplicacion perminiento tener un globalContext para pasar todos los estados
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
