const { Link, Outlet } = require("react-router-dom")

const Goods = () => {
  return (
    <>
      <nav>
        <Link to='/goods/all'>Товары и услуги</Link>
      </nav>
      <Outlet/>
    </>
  )
}

export default Goods;