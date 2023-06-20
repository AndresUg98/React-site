import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid"; //Añadiendiendo iconos con hero icons (https://heroicons.com/)

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext); // importamos el contexto para poder acceder al estado global, donde se encuentra "count" y "setCount" para que el contador del carrito funcione
 // console.log("PRODUCT TO SHOW", context.productToShow);

  return (
    //Creando el menu despegable
    <aside
      className={` ${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => context.closeProductDetail()}>
          {/* El icono lo podemos añadir como un componente */}
          <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.image}
          alt={context.productToShow.title}
          srcset=""
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">{context.productToShow.price} </span>
        <span className="font-medium text-md">{context.productToShow.title} </span>
        {/*    */}
      </p>
    </aside>
  );
};

export default ProductDetail;
