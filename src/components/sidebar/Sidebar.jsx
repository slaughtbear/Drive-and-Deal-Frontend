import { MdGroups, MdDirectionsCar, MdCarRental, MdCarRepair, MdLogout } from "react-icons/md";
import SideBarIcon from "./SideBarIcon";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-neutral-950 text-white shadow-lg">
    <Link to="/dashboard/cars">
      <SideBarIcon icon={<MdDirectionsCar size="28" />} text="Autos" />
    </Link>
    <Link to="/dashboard/rentals">
      <SideBarIcon icon={<MdCarRental size="28" />} text="Rentas" />
    </Link>
    <Link to="/dashboard/customers">
      <SideBarIcon icon={<MdGroups size="28" />} text="Clientes" />
    </Link>
    <Link to="/dashboard/repairs">
      <SideBarIcon icon={<MdCarRepair size="28" />} text="Reparaciones" />
    </Link>
    <SideBarIcon icon={<MdLogout size="28" />} text="Cerrar sesión" />
  </div>
);

export default Sidebar;