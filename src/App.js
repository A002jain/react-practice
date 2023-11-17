import { useState } from "react";
import './App.css';
import axios from 'axios';
import FormSubmitBtn from './form_input/button_type';
import { EditorNav } from './form_input/nav_input';
import {SolutionEditor, ProblemInput, FileTypeInput, Category} from './form_input/text_input';
import { appEnv } from "./AppConfig";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import ToDO from "./todo/todo";
import FamilyTree from "./family/family";
import SideBar from "./sidebar/sidebar1/sidebar";
// import VideoPlayer from "./videoPlayer/videoComp";



function DocumentForm() {
  
  const [formData, setFormData] = useState({
    problemText: "",
    fileType: "text",
    fileText: "",
    tags: ""
  })

  const updatePText = (e) => {
    setFormData(previousFormState => {
      return { ...previousFormState, problemText: e.target.value }
    });
  }

  const updateFType = (e) => {
    setFormData(previousFormState => {
      return { ...previousFormState, fileType: e.target.value }
    });
  }

  const updateFText = (e) => {
    setFormData(previousFormState => {
      return { ...previousFormState, fileText: e.target.value }
    });
  }

  const updateTText = (e) => {
    setFormData(previousFormState => {
      return { ...previousFormState, tags: e.target.value }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${appEnv().baseUrl}/write`)
    console.log(formData)
    axios.post(`${appEnv().baseUrl}/write`,formData)
    .then((res) => {
      console.log(res)
      if(res.status === 200){
        alert(`file written succesfully: ${res.data}`)
      }else{
        alert(`file written failed: ${res.data}`)
      }
    }).catch((error) => {
      console.log(error);
      alert(`file written failed: ${error}`)
    });
  }

  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <ProblemInput handleClick={updatePText}/>
          <div className="form-row offset-sm-2">
            <Category handleClick={updateTText}/>
            <FileTypeInput handleClick={updateFType}/>
          </div>
          <SolutionEditor handleClick={updateFText}/>
          <FormSubmitBtn/>
        </form>
      </div>
  );
}

function Index() {

  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
      console.log(show);
      setShow(!show);
  }

  return (
    <div className="container-fluid">
      <div className="head-container">
        <EditorNav toggleSidebar={toggleSidebar}/>
      </div>
      <div className="middle-container">
        <SideBar show={show}  toggleSidebar={toggleSidebar}/>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
const Home = () => {
  return(
    <>
    <div className="App">
      <h1>Home</h1>
      {/* <VideoPlayer/> */}
    </div>
    {/* <div className="leftBar">
    </div> */}
    </> 
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}>
          <Route index element={<Home/>} />
          <Route path="create" element={<DocumentForm/>} />
          <Route path="todo" element={<ToDO/>} />
          <Route path="read" element={<Home/>} />
          <Route path="account" element={<Home/>} />
          <Route path="family" element={<FamilyTree/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;

// const FormSubmitBtn = ()=>{
//   return (
//       <button type="submit" className="btn btn-primary">Submit</button>
//   )
// }


// const SolutionEditor = ({handleClick})=>{
//   return (
//     <div className="form-group">
//         <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
//         <textarea className="form-control c-dark" id="exampleFormControlTextarea1" rows="10"
//         onChange = {handleClick}></textarea>
//     </div>  
//   );
// }

// const ProblemInput = ({handleClick})=>{
// return(
//     <div className="form-group">
//         <label htmlFor="exampleInputEmail1">Problem Statement</label>
//         <input type="text" className="form-control c-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Problem Statement"
//         onChange = {handleClick}/>
//         <small id="emailHelp" className="form-text text-muted">input problem statement format avc-avc-avc</small>
//     </div>
//   )
// }

// const FileTypeInput = ({handleClick})=>{
//   const fileTypes = ['text', 'json', 'yaml', 'csv'];
//   return (
//     <div className="form-row">
//       <div className="form-group col-md-4">
//         <label htmlFor="inputState">State</label>
//         <select id="inputState " className="form-control c-dark " 
//         onChange = {handleClick}>
//           {fileTypes.map((fileType, key) => <option>{fileType}</option>)}
//         </select>
//       </div>
//     </div>
//   )
// }


// export const EditorNav= ()=>{
//   return(
//       <nav className="navbar fixed-top navbar-light bg-dark pd-0">
//           <a className="navbar-brand text-light" href="/">Fixed top</a>
//       </nav>
//   )
// }