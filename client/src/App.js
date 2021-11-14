import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/layout/Navbar';
import { Landing } from './components/layout/Landing';
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login';
import { Provider } from "react-redux";
import { store } from './store';

const App = () => {
  return (
      <Provider store={store}>
          <Router>
              <>
                  <Navbar />
                  <Routes>
                      <Route exact path="/" element={ <Landing /> } />
                      <Route exact path="/register" element={<Register />} />
                      <Route exact path="/login" element={<Login />} />
                  </Routes>
              </>
          </Router>
      </Provider>
  );
}

export default App;
