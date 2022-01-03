import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const calculateTime = () => {
  let seg = Math.floor(Math.random() * 180);
  return seg;
};
const formatTime = (timer) => {
  if (timer <= 0) return "00:00:00";
  else return `00:0${Math.floor(timer / 60)}:${timer % 60}`;
};
function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(calculateTime());

  let intervalRef = useRef();

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET" /* 'POST', 'PUT', 'DELETE' */,
      baseURL: "https://fakestoreapi.com",
      url: "/products"
    })
      .then(({ data } /* = response */) => setProducts(data))
      .catch((error) => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const decreaseNum = () => setTimer((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Try again later</p>;
  return (
    <div className="Cards">
      {products.map((product) => {
        return (
          <div key={product.id} className="Card">
            <div>
              <img className="Image" src={product.image} alt="" />
            </div>
            <div className="Text">{product.title}</div>
            <div className="CardInfo">
              <div className="Text"> {formatTime(timer)}</div>
              {timer <= 0 ? (
                <button className="BtnDetailD">Go To Detail</button>
              ) : (
                <Link to={`/detalle/${product.id}`}>
                  <button className="BtnDetail">Go To Detail</button>
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ProductCard;
