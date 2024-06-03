import React, { createContext} from "react";
import Api_Fetch from "./componets/Api_Fetch/Api_Fetch";
import Header from './componets/Header/Header';
import "./App.css";

export const MainContext = createContext(null);
function App() {


  return (
    <div className="App">
      <Header/>
      {/* <Header/> Will return username entered from user */}
      {/* context will then forward the user name to api forward and thenm will make container there */}
      {/* <MainContext.Provider>
      </MainContext.Provider>*/}
      
    </div>
  );
}

export default App;