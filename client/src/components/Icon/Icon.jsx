import { IconContext } from "react-icons";

const Icon = ({ icon, size, color }) => {
  return (
    <IconContext.Provider value={{ color, size }}>
      {icon}
    </IconContext.Provider>
  );
}

export default Icon;