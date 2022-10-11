
import { GlobalStyles } from "./GlobalStyles";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

import { Homepage } from "./Homepage";
import { ResearchSection } from "./ResearchSection";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/research' element={<ResearchSection/>}/>
      </Routes>
      <Sidebar/>

    </BrowserRouter>
  )
}

export default App;
