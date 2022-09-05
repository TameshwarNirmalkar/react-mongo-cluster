import { Route, Routes } from "react-router-dom";

const ServicesId = () => {
  return <div>Service Id</div>;
};

export const ServiceRoutes = () => {
  return (
    <Routes>
      <Route path=":id" element={<ServicesId />} />
    </Routes>
  );
};
