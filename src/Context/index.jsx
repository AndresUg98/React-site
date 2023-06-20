import { createContext, useState } from "react";

export const ShoppingCartContext = createContext(); //Creamos el contexto, podemos usar cualquier nombre

//Necesitamos un provider, para dar la informacion a los componentes
export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0); //estado de la cantidad de articulos en el carrito de compra

  //State in charge to open and close the window
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //product detal + show product
  const [productToShow, setProductToShow] = useState({});

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
