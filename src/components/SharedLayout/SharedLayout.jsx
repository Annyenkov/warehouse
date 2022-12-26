import { Outlet } from "react-router-dom"
import { Header, Link } from "./SharedLayout.styled"

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </>
  )
}

export default SharedLayout