import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdesCard";

function MyOrders() {
  const context = useContext(ShoppingCartContext); // importamos el contexto para poder acceder al estado global, donde se encuentra "count" y "setCount" para que el contador del carrito funcione
  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative">
        <h1>MyOrders</h1>
      </div>

      {context.order.map((order, index) => {
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
          ;
        </Link>;
      })}
    </Layout>
  );
}

export default MyOrders;
