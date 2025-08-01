import RentalCard from "./RentalCard";

const RentalList = ({ rentals }) => (
  <div className="grid grid-cols-4 gap-4">
    {rentals.map((rental, i) => (
      <RentalCard rental={rental} key={i} />
    ))}
  </div>
);

export default RentalList;
