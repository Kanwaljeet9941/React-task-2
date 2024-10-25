import Userprofile from "./Components/t-1/userProfile";
import Userprofile2 from "./Components/t-2/userProfile2";
import Product from "./Components/t-3/product";
import "./App.css";

function App() {
    const profileInfo = {
      name: "Kamal",
      age: 21,
      location: "Gharaunda, Karnal, Haryana",
      isActive: true,
      email: "kamal@gmail.com",
    };

  const productInfo = {
    name: "Samsung",
    price: 150,
    inStock: true,
  };
  return (
    <div>
      <Userprofile info={profileInfo} />
      <Userprofile2 info={profileInfo} />
      <Product {...productInfo} />
    </div>
  );
}

export default App;
