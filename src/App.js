import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCategory from "./component/AddCategory";
import Category from "./component/Category";
import MainNav from "./component/MainNav";
import Footer from "./component/Footer";
import NotFound from "./component/NotFound";
import Cantact from "./component/Cantact";
import LogOut from "./component/LogOut";
import Detail from "./component/Detail";
import Update from "./component/Update";
import SignUp from "./component/SignUp";
import LogIn from "./component/LogIn";

function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route path="/category" element={<Category />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Cantact />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="edit/:id" element={<Update />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
