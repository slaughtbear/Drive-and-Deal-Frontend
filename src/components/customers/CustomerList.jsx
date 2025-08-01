import CustomerCard from "./CustomerCard";

const CustomerList = ({ customers }) => (
  <div className="grid grid-cols-4 gap-4">
    {customers.map((customer, i) => (
      <CustomerCard customer={customer} key={i} />
    ))}
  </div>
);

export default CustomerList;
