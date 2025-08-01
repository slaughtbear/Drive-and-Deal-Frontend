import { useEffect, useState } from "react";
import RepairList from "../components/repairs/RepairList";
import { fetchRepairs } from "../api/repairs";

function Repairs() {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    fetchRepairs()
      .then((res) => {
        setRepairs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <RepairList repairs={repairs} />;
}

export default Repairs;
