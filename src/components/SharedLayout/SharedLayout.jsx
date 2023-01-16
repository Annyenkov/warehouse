import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Header, Link } from "./SharedLayout.styled"
import { PacmanLoader } from "react-spinners"

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to='/'>Показатели</Link>
          <Link to='/supply'>Закупки</Link>
          <Link to='/movies'>Продажи</Link>
          <Link to='/goods'>Товары</Link>
          <Link to='/movies'>Контрагенты</Link>
          <Link to='/movies'>Деньги</Link>
          <Link to='/movies'>Розница</Link>
          <Link to='/movies'>Производство</Link>
          <Link to='/movies'>Задачи</Link>
          <Link to='/movies'>Приложения</Link>
        </nav>
      </Header>
      <Suspense fallback={ <PacmanLoader
        color="blue"
        size={25}
      /> }>
         <Outlet />
     </Suspense>
    </>
  )
}

export default SharedLayout