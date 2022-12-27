import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Header, Link } from "./SharedLayout.styled"
import { PacmanLoader } from "react-spinners"

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movies</Link>
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