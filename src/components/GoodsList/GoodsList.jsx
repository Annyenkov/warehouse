import { useState } from "react";
import { Link, Outlet } from "react-router-dom"

const GoodsList = () => {
  const [groups, setGroups] = useState({})
  return (
    <>
      <div>
        <h2>Товары и услуги</h2>
        <button>Товар</button>
        <button>Услуга</button>
        <button>Группа</button>
        <button>Фильтр</button>
        <input/>
      </div>
      <div>
        <nav>
          <Link>Товары и услуги</Link>
          {groups.length > 0 && groups.map(item => {
            return (
              <Link>{ item }</Link>
            )
          })}
        </nav>
      </div>
      <Outlet/>
    </>
  )
}
export default GoodsList;