const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
let componentMounted = true;

const getProducts = async () => {
  setLoading(true);
  const response = await fetch("https://fakestoreapi.com/products");
  // console.log(data);
  if (componentMounted) {
    setData(await response.json());
    setLoading(false);
    console.log(setData);
  }
  return () => {
    componentMounted = false;
  };
};

export default getProducts;
