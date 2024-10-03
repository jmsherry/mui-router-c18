import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import PageLayout from "./components/PageLayout";

import Home from "./pages/Home";
import About from './pages/About'
import NotFound from "./pages/NotFound";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
