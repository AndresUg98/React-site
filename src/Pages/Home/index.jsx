import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") //nos permite hacer el llamado para pedir los productos
      .then((res) => res.json()) //una vez recibina la respuesta la convertimos a JSON para poder leerla
      .then((json) => setItems(json)); // Una vez recibida la promesa del JSON la guardamos en setItems
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
