import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET" /* 'POST', 'PUT', 'DELETE' */,
      baseURL: "https://fakestoreapi.com",
      url: `/products/${id}`
      //   responseType: "stream"

      //   params: {
      //     _limit: 10
      //   },
      // headers: {
      //   Accept: "application/json"
      // },
    })
      .then(({ data } /* = response */) => setProduct(data))
      .catch(() => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Try again later</p>;
  return (
    <div className="Cards">
      <div className="CardDetail">
        <div>{product.title}</div>
        <img className="Image" src={product.image} alt="" />
        <div>{product.description}</div>
        <div>{product.price}</div>
      </div>
    </div>
  );
}

export default ProductDetail;
