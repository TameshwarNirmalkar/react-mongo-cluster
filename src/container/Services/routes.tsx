import { Route, Routes } from "react-router-dom";

const ServicesId = (): JSX.Element => {
  return <div>Service Id</div>;
};

export const ServiceRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path=":id" element={<ServicesId />} />
    </Routes>
  );
};
