/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import logo from "../assets/images/Logo.png";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    toast.success("Votre message à été envoyer !");
    reset();
  };

  return (
    <>
      <Navbar />
      <div className="bg-bg-geocode pt-12 lg:h-screen">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="rounded-full h-20 w-20 mx-auto shadow-3xl shadow-green-700"
          />
        </div>
        <div className="mt-12">
          <p className="text-center text-white text-2xl">
            Vous souhaitez nous contacter <br />
            pour un <span className="text-GreenBlue">partenariat</span> ou pour
            un <br /> soucis <span className="text-GreenBlue">technique</span> ?
          </p>
        </div>
        <div>
          <form
            className="flex flex-col my-4 mx-10 lg:items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="my-8">
              <p className="text-white ">E-mail</p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                className="rounded-lg p-1"
                {...register("email", {
                  required: "Veuillez saisir votre email",
                  pattern: {
                    value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                    message: "Le format de votre email est incorrect !",
                  },
                })}
              />
              {errors?.email && (
                <p className="text-red-500 text-center">
                  {" "}
                  {errors.email.message}{" "}
                </p>
              )}
            </label>
            <label>
              <p className="text-white">Entrez votre message</p>
              <textarea
                type="text"
                name="name"
                className="rounded-lg h-20 w-full lg:w-80"
              />
            </label>
            <div className="border-solid border-GreyComp">
              <button
                type="submit"
                className="text-white bg-GreenComp p-2 rounded-lg border-solid border-GreyComp mb-16 mt-6"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
