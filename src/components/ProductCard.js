import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET" /* 'POST', 'PUT', 'DELETE' */,
      baseURL: "https://fakestoreapi.com",
      url: "/products"
      // responseType: "stream"
      //   params: {
      //     _limit: 10
      //   },
      // headers: {
      //   Accept: "application/json"
      // },
      //   timeout: 1000
    })
      .then(({ data } /* = response */) => setProducts(data))
      .catch((error) => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Try again later</p>;
  return (
    <div>
      {products.map((product) => {
        // console.log(product);
        return (
          <div key={product.id}>
            <div>{product.title}</div>
            <img className="Image" src={product.image} alt="" />
            {/* <button>Detalles</button> */}
            <Link to={`/detalle/${product.id}`}>Detalles</Link>
          </div>
        );
      })}
    </div>
  );
}
export default ProductCard;
