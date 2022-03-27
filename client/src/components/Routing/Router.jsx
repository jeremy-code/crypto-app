import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = ({ paths, elements }) => {
  return (
    <BrowserRouter>
      <Routes>
        {paths.map((path, index) => {
          return <Route key={index} path={path} element={elements[index]} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
