import React, { useState } from "react";
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { FileUploader } from "react-drag-drop-files";
import Upload from "./pages/Upload";
import Main from "./pages/Main";
import Visualise from "./pages/Visualise";

const fileTypes = ["JPG", "PNG"];

function App() {

   return (
    <BrowserRouter>
    <Routes>
      <Route path="/visualise" element={<Visualise/>}/>
      <Route path="/catalog" element={<Main/>}/>
      <Route path="/" element={<Upload/>}/>
      
    </Routes>
 </BrowserRouter> 
  );
}

export default App;
