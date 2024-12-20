import { Route, Routes } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { Footer, Header, SideBar } from "./components/common";
import Home from "./components/home/Home";
import User from "./components/user/User";
import UserDetail from "./components/user-detail/UserDetail";
import BreadsList from "./components/breads/BreadsList";
import AlergyList from "./components/allergy/AlergyList";
import ProductList from "./components/product-list/ProductList";
import AddProduct from "./components/add-product/AddProduct";
import EditProduct from "./components/edit-product/EditProduct";
import ProductCategory from "./components/product-category/ProductCategory";
import OrderList from "./components/order-list/OrderList";
import DeliverOrderList from "./components/delivered-order/DeliverOrderList";
import DriverList from "./components/driver/DriverList";
import AddDriver from "./components/add-driver/AddDriver";
import EditDriver from "./components/edit-driver/EditDriver";
import Profile from "./components/my-profile/Profile";
import OrderDetail from "./components/order-detail/OrderDetail";
import DriverDetail from "./components/driver-detail/DriverDetail";
import Login from "./components/auth/sign-in/Login";
import PetsCategoryList from "./components/pets-category/PetsCategoryList";
import NotFound from "./components/not-found/NotFound";

function App() {
  const routes = useRoutes([
    { path: "/login", element: <Login /> },
    {
      path: "/*",
      element: (
        <div class="grid-container">
        <Header />
        <SideBar />
        <main className="main">
          <Routes>
            <Route index element={<Home />} />
            
            <Route path="/user-list" index element={<User />} />
            <Route path="/user/user-detail" index element={<UserDetail />} />
            <Route path="/bread-list" index element={<BreadsList />} />
            <Route path="/allergy-list" index element={<AlergyList />} />
           <Route path="/product/product-category-list" index element={<ProductCategory />} />
            <Route path="/product/product-list" index element={<ProductList />} />
            <Route path="/product/add-product" index element={<AddProduct />} />
            <Route path="/product/edit-product" index element={<EditProduct />} />
            <Route path="/order/order-list" index element={<OrderList />} />
            <Route path="/order/deliver-order-list" index element={<DeliverOrderList />} />
            <Route path="/order/order-detail" index element={<OrderDetail />} />
            <Route path="/driver-list" index element={<DriverList />} />
            <Route path="/driver/add-driver" index element={<AddDriver />} />
            <Route path="/driver/edit-driver" index element={<EditDriver />} />
            <Route path="/driver/driver-detail" index element={<DriverDetail />} />
            <Route path="/settings/my-profile" index element={<Profile />} />
            <Route path="/pets-category" index element={<PetsCategoryList />} />
            <Route path="/page-not-Found" index element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      ),
    },
  ])
  return (
    <>
      {/* <div class="grid-container">
        <Header />
        <SideBar />
        <main className="main">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/user-list" index element={<User />} />
            <Route path="/user/user-detail" index element={<UserDetail />} />
            <Route path="/bread-list" index element={<BreadsList />} />
            <Route path="/allergy-list" index element={<AlergyList />} />
           <Route path="/product/product-category-list" index element={<ProductCategory />} />
            <Route path="/product/product-list" index element={<ProductList />} />
            <Route path="/product/add-product" index element={<AddProduct />} />
            <Route path="/product/edit-product" index element={<EditProduct />} />
            <Route path="/order/order-list" index element={<OrderList />} />
            <Route path="/order/deliver-order-list" index element={<DeliverOrderList />} />
            <Route path="/order/order-detail" index element={<OrderDetail />} />
            <Route path="/driver-list" index element={<DriverList />} />
            <Route path="/driver/add-driver" index element={<AddDriver />} />
            <Route path="/driver/edit-driver" index element={<EditDriver />} />
            <Route path="/driver/driver-detail" index element={<DriverDetail />} />
            <Route path="/settings/my-profile" index element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div> */}
      {routes}
    </>
  );
}

export default App;
