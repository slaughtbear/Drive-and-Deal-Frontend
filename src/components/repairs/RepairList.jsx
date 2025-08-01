import RepairCard from "./RepairCard";

const RepairList = ({ repairs }) => (
  <div className="grid grid-cols-4 gap-4">
    {repairs.map((repair, i) => (
      <RepairCard repair={repair} key={i} />
    ))}
  </div>
);

export default RepairList;
