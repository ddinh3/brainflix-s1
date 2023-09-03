import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoUploadPage from "./components/Upload/UploadForm";
import Home from "./Pages/Home";
import React from "react";


function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/videos/:id' element={<Home />} />
          <Route path='/upload' element={<VideoUploadPage />} />
          <Route path='*' element={<h2>Oops! Page not found.</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


