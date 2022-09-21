import React, {useState} from "react";
import './App.css';
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import LoadingBar from "react-top-loading-bar";
import News from "./component/News";

function App() {
  let pageSize1=15;
  let apikey=process.env.REACT_APP_API_KEY;

  const [progress, setprogress] = useState(0)

    // loading progress
  const setProgress=(Progress)=>{
      setprogress(Progress)
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} apikey={apikey}  key="general" pageSize={pageSize1} country='in' category='general' />} />
          <Route path='/business' element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize1} country='in' category='business'/>}/>
          <Route path='/entertainment' element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize1} country='in' category='entertainment'/>} />
          <Route path='/general' element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize1} country='in' category='general'/>} />
          <Route path='/health' element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize1} country='in' category='health'/>} />
          <Route path='/science' element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize1} country='in' category='science'/>} />
          <Route path='/sports' element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize1} country='in' category='sports'/>} />
          <Route path='/technology' element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize1} country='in' category='technology'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
