/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import logo from "../assets/images/Logo.png";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [displaySecondButton, setDisplaySecondButton] = useState(false);

  const onSubmit = (data) => {
    const formData = { ...data };
    delete formData.confirmpassword;
    toast.success("Votre inscritption est prise en compte!");
    setDisplaySecondButton(true);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="rounded-xl w-full max-w-md p-6">
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Logo" className="rounded-full w-20 h-20" />
        </div>
        <div className="flex flex-col gap-3">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="username" className="text-sm font-bold">
                Prénom :
              </label>
              <input
                className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                type="text"
                id="username"
                name="username"
                placeholder="Saisissez votre prénom"
                {...register(" username", {
                  required: "Ce champ est requis !",
                  minLength: {
                    value: 2,
                    message:
                      "Votre prénom doit contenir au minimum 2 caractères",
                  },
                })}
              />
              {errors?.username && (
                <span className="text-red-500 text-center">
                  {" "}
                  {errors.username.message}{" "}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="userlastname" className="text-sm font-bold">
                Nom :
              </label>
              <input
                className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                type="text"
                id="userlastname"
                name="userlastname"
                placeholder="Saisissez votre nom"
                {...register(" userlastname", {
                  required: "Ce champ est requis !",
                  minLength: {
                    value: 2,
                    message: "Votre nom doit contenir au minimum 2 caractères",
                  },
                })}
              />
              {errors?.userlastname && (
                <span className="text-red-500 text-center">
                  {" "}
                  {errors.userlastname.message}{" "}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-bold">
                Email :
              </label>
              <input
                className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                type="email"
                id="email"
                name="email"
                placeholder="Saisissez votre adresse mail"
                {...register("email", {
                  required: "Votre email est obligatoire!",
                  pattern: {
                    value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                    message: "Le format de votre email est incorrect !",
                  },
                })}
              />
              {errors?.email && (
                <span className="text-red-500 text-center">
                  {" "}
                  {errors.email.message}{" "}
                </span>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="text-sm font-bold">
                Mot de passe :
              </label>
              <input
                className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                type="password"
                id="password"
                name="password"
                placeholder="Saisissez votre mot de passe"
                {...register("password", {
                  required: "le mot de passe est requis!",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                    message: "Le format de votre mot de passe est incorrect !",
                  },
                })}
              />
              {errors?.password && (
                <span className="text-red-500 text-center">
                  {" "}
                  {errors.password.message}{" "}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="confirmpassword" className="text-sm font-bold">
                Confirmez votre mot de passe :
              </label>
              <input
                className="input bg-white border border-gray-500 text-black placeholder-gray-500 w-full p-2 mt-1"
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Vérification du mot de passe"
                {...register("confirmpassword", {
                  required: "la confirmation du mot de passe est requise!",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                    message: "Le format de votre mot de passe est incorrect !",
                  },
                  validate: (value) =>
                    value === watch("password") ||
                    "Les mots de passe ne sont pas identiques !",
                })}
              />
              {errors?.confirmpassword && (
                <span className="text-red-500 text-center">
                  {" "}
                  {errors.confirmpassword.message}{" "}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn bg-GreenComp text-white w-full p-2 mt-3 hover:bg-gray-600"
            >
              Inscription
            </button>
            <Link
              to="/registerCar"
              type="button"
              disabled={!displaySecondButton}
              className={`btn w-full p-2 mt-3 ${displaySecondButton ? "bg-yellow-500 text-white  hover:bg-yellow-600" : "bg-gray-500 cursor-not-allowed"}`}
            >
              Suivant
            </Link>
          </form>
          <p className="text-sm mt-2">
            Déjà inscrit ?
            <button
              type="button"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Connexion
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
