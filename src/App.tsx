import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import {
  Homepage,
  News,
  Portfolio,
  Stocks,
  Cryptocurrencies,
  SingleCryptoDetailsPage,
  BuyCryptocurrencies,
} from './pages';
import RootLayout from './layouts/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route
            path={'/cryptocurrencies/crypto/:id'}
            element={<SingleCryptoDetailsPage />}
          />
          <Route
            path={'cryptocurrencies/crypto/buy'}
            element={<BuyCryptocurrencies />}
          />
          <Route path="/news" element={<News />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
