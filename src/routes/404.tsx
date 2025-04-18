import { useNavigate } from "react-router";

export const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 flex flex-col items-center">
      <img
        src="./src/assets/404.webp"
        alt="404"
        className="w-64 mb-4 clickable"
        onClick={() => navigate("/")}
      />
      <p className="text-white text-lg">
        Tu es perdu ? Retour à la fontaine{" "}
        <span
          onClick={() => navigate("/")}
          className="text-[#8484ff] cursor-pointer hover:font-bold"
        >
          juste ici
        </span>
      </p>
    </div>
  );
};
