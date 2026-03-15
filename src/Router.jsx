import { Routes, Route } from "react-router-dom";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import Appf1 from "./folder1/Appf1";
import Appf2 from "./folder1/Appf2";
import Appf3 from "./folder1/Appf3";
import Appf4 from "./folder1/Appf4"

function Router() {
  return (
    <Routes>
 <Route path="/" element={<App />} />
 <Route path="/app2" element={<App2 />}/>
 <Route path = "/app3" element={<App3 />} />
 <Route path= "/app4" element={<App4 />} />
 <Route path= "/appf1" element={<Appf1 />}/>
 <Route path= "/appf2" element={<Appf2 />}/>
 <Route path= "/appf3" element={<Appf3 />}/>
  <Route path= "/appf4" element={<Appf4 />}/>
    </Routes>
  );
}

export default Router;