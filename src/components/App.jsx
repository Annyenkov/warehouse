import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { lazy } from "react";
import Supply from "pages/Supply";
import SupplyList from "./SupplyList";
import { useState } from "react";
import Auth from "./Auth";
import Goods from "pages/Goods";

const NotFound = lazy(() => import('../pages/NotFound'));


const App = () => {
  const [auth, setAuth] = useState(false)

  const isAuth = (e) => {
    e.name === 'admin' && e.password === 'admin' ? setAuth(true) : alert('неверное имя пользователя')
  }

  return (
    <Routes>
      {auth && <Route path="/" element={ <Auth onSubmit={isAuth}/> } />}
      {!auth &&
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Supply />} />
          <Route path="/supply" element={<Supply />}>
            <Route path="/supply/all" element={<SupplyList />} />
          </Route>
          <Route path="/goods" element={<Goods />}>
            <Route path="/goods/all">
              <Route path="/goods/all/elements"/>
            </Route>
          </Route>
        <Route path="*" element={<NotFound />} />
      </Route>}
    </Routes>
  );
};

export default App