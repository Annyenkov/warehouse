import AddSupply from "components/AddSupply";
import SupplyTable from "components/SupplyTable";
import { useState } from "react";

const SupplyList = () => {
  const [newSupply, setNewSupply] = useState(false);
  const [allSupply, setAllSupply] = useState([])

  const addNewSupply = (e) => {
    setAllSupply([...allSupply, e])
    setNewSupply(!newSupply)
  } 

  console.log(allSupply)
  
  return (
    <>
      {!newSupply && <SupplyTable onClick={() => setNewSupply(!newSupply)} data={allSupply} />}
      {newSupply && <AddSupply onClick={ () => setNewSupply(!newSupply) } onSubmit={addNewSupply} />}
    </>
  )
}

export default SupplyList;