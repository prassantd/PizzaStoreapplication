


import { Route,Routes } from "react-router-dom";
import Delete from "./component/DeletItem";
import Main from "./component/Main";
import UpdateItem from "./component/UpdateItem";
import Updateshow from "./component/updateshow";
import About from "./component/About";
import Display from "./component/Display";
import AddNewItem from "./component/AddNewItem";
import Footer from "./component/Footer";
import Home from "./component/Home";

function App(){
  return(
    <>
     <Main/>
    <Routes>
     
      <Route path="/" element={<Home/>} />
      <Route path="/update" element={<Updateshow/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/delete" element={<Delete/>} />
      <Route path="/add" element={<AddNewItem/>} />
      <Route path="/update/:id" element={<UpdateItem/>} />
      <Route path="/display" element={<Display/>} /> 
       </Routes>
   <Footer/>
       </>

  )

}
export default App;