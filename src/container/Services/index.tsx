import { Outlet } from "react-router-dom";
import { ServiceRoutes } from "./routes";

const ServicesContainer = () => {
  return (
    <div>
      Services
      <ServiceRoutes />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default ServicesContainer;
