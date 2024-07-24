import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function UploadComponent() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Veuillez sélectionner un fichier à téléverser");
      return;
    }

    const toastId = toast.info("Chargement en cours...", { autoClose: false });

    setLoading(true);
    setTimeout(async () => {
      try {
        const formData = new FormData();
        formData.append("station", file);

        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        toast.update(toastId, {
          render: "Le fichier a bien été téléversé",
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
        });
      } catch (error) {
        toast.update(toastId, {
          render: "Erreur lors du téléversement du fichier",
          type: toast.TYPE.ERROR,
          autoClose: 5000,
        });
      } finally {
        toast.dismiss(toastId);
        setLoading(false);
        toast.dismiss();
        toast.success("Fichier téléchargé avec succès !");
      }
    }, 25000);
  };

  return (
    <div className="text-xs w-40">
      <form className="p-4 max-w flex flex-col" onSubmit={handleSubmit}>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button
          className={`bg-GreenComp rounded-sm p-1 mt-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          type="submit"
          disabled={loading}
        >
          Télécharger
        </button>
      </form>
    </div>
  );
}
