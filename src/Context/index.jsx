import { createContext, useState, useEffect } from "react";

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

  //Shoping cart . order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState([]);

  // filter products
  const [filteredItems, setFilteredItems] = useState(null);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") //nos permite hacer el llamado para pedir los productos
      .then((res) => res.json()) //una vez recibina la respuesta la convertimos a JSON para poder leerla
      .then((json) => setItems(json)); // Una vez recibida la promesa del JSON la guardamos en setItems
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && !searchByCategory) {
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    }
    if (searchByCategory && !searchByTitle) {
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    }
    if (!searchByCategory && !searchByTitle) {
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
    }
    if (searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    }
  }, [items, searchByTitle, searchByCategory]);

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
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
