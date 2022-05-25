// Done by Merna 
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen.js";
import LandingPage from "./screens/LandingPage/LandingPage.js";
import Interface from "./components/interface/Interface.js";
import Collection from "./components/collection/Collection.js";


const App = () => (
  <BrowserRouter>
    <Header />
    <main className="App">
      {/* routes to all the app pages  */}
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/interface/:id" element={<Interface />} />
        <Route path="/collection/:id" element={<Collection />} />
      </Routes>


    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
