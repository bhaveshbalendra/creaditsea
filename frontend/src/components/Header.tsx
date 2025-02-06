import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#2894ff] text-white p-1 shadow-md flex justify-center items-center w-full h-14">
      <h1
        className="text-2xl font-semibold cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => navigate("/")}
      >
        App
      </h1>
    </div>
  );
};

export default Header;
