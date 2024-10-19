import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PokemonCategoryPage from './pages/PokemonCategoryPage';
import { Provider } from 'react-redux';
import store from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<PokemonCategoryPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
