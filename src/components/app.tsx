import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/main';
import Login from '../pages/login';
import Offer from '../pages/offer';
import NotFound from '../pages/notFound';
import Favorites from '../pages/favorites';

type AppScreenProps = {
  placesFound: number;
}

export default function App({placesFound}: AppScreenProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main placesFound={placesFound}/>} />
          <Route path="login" element={<Login />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="offer/">
            <Route path=":id" element={<Offer/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
