/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/images/Logo.png";

export default function ConnexionPage() {
  const { currentUser, setCurrentUser } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.role === "User") {
      navigate("/map");
    }
    if (currentUser?.role === "Admin") {
      navigate("/admin");
    }
  }, [currentUser, navigate]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (errors.email || errors.password) {
      toast.error(errors.email.message || errors.password.message);
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        data,
        {
          withCredentials: true,
        }
      );
      setCurrentUser(response.data.user);
    } catch (e) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
      } else {
        toast.error("Une erreur s'est produite");
      }
    }
  };

  return (
    <main className="flex flex-col justify-center">
      <div className="flex m-auto">
        <img
          src={logo}
          alt=""
          className="w-20 h-20 rounded-full mt-16 border-solid border-white"
        />
      </div>
      <div>
        <form
          className="flex items-center flex-col my-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="my-12" htmlFor="email">
            <p className="text-white ">E-mail</p>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              className="rounded-lg p-1"
              {...register("email", {
                required: "Votre email est obligatoire!",
                pattern: {
                  value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                  message: "Le format de votre email est incorrect !",
                },
              })}
            />
            {errors.email && (
              <span className="flex justify-center max-w-48 text-center text-red-500 ">
                {errors.email.message}
              </span>
            )}
          </label>
          <label>
            <p className="text-white" htmlFor="password">
              Mot de passe :
            </p>
            <input
              type="password"
              name="password"
              className="rounded-lg p-1"
              {...register("password", {
                required: "le mot de passe est requis!",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                  message: "Le format de votre mot de passe est incorrect !",
                },
              })}
            />
            {errors.password && (
              <span className="flex justify-center max-w-48 text-center text-red-500 ">
                {errors.password.message}
              </span>
            )}
          </label>
          <p className="text-white my-12 text-center">
            Si vous ne possédez pas de compte cliquez
            <a href="/" className="text-GreenComp">
              <span> ici</span>
            </a>
          </p>
          <div className="border-solid border-GreyComp">
            <button
              type="submit"
              className="text-white bg-GreenComp p-2 rounded-lg border-solid border-GreyComp mb-16"
            >
              Connexion
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
