import { Link, Outlet } from "react-router-dom";

const Supply = () => {
  
  return (
    <>
      <nav>
      <Link to='/'>Заказы поставщикам</Link>
      <Link to='/movies'>Счета поставщиков</Link>
      <Link to='/supply/all'>Приемки</Link>
      <Link to='/movies'>Возвраты поставщикам</Link>
      <Link to='/movies'>Счета-фактуры полученные</Link>
      <Link to='/movies'>Управление закупками</Link>
    </nav>
    <Outlet/>
    </>
  )
}
export default Supply;