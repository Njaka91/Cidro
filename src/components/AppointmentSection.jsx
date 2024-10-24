import { useState } from "react";
import emailjs from "@emailjs/browser";
import img from "../assets/images/IMG_0574.jpg";
import PlusDeco from "./PlusDeco";
import fond1 from "../assets/images/fond1.png";
import fond2 from "../assets/images/fond2.png";
import blocOpperatoire from "../assets/images/bloc_operatoire.jpg";

const AppointmentSection = () => {
  const [errors, setErrors] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    age: "", 
    telephone: "",
    email: "",
    adresse: "",
    ville: "",
    dateDeRendezVous: "",
    heure: "",
    demande: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Efface l'erreur correspondante si l'utilisateur commence à taper
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.nom.trim()) {
      newErrors.nom = "Champ obligatoire.";
    }
    if (!formData.dateDeRendezVous.trim()) {
      newErrors.dateDeRendezVous = "Champ obligatoire.";
    }
    if (!formData.age.trim()) {
      newErrors.age = "Champ obligatoire.";
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = "Champ obligatoire.";
    } else if (!/^\d+$/.test(formData.telephone)) {
      newErrors.telephone = "Le téléphone doit être uniquement en chiffres.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Champ obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide.";
    }

    // Ajoutez d'autres validations pour les autres champs ici

    setErrors(newErrors);
    // Si l'objet newErrors est vide, cela signifie qu'il n'y a pas d'erreurs
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(false);

    if (
      errors.nom === "" &&
      errors.age === "" &&
      errors.dateDeRendezVous === "" &&
      errors.telephone === "" &&
      errors.email === ""
    ) {
      setErrorMessage(false);
    }

    if (!validateForm()) {
      setErrorMessage(true);
      return;
    }
    setSuccessMessage(false);

    const templateParams = {
      nom: formData.nom,
      age: formData.age,
      telephone: formData.telephone,
      email: formData.email,
      adresse: formData.adresse ? formData.adresse : "-----",
      ville: formData.ville ? formData.ville : "-----",
      dateDeRendezVous: formData.dateDeRendezVous,
      heureDeRendezVous: formData.heure,
      demande: formData.demande ? formData.demande : "Aucune",
    };

    console.log(templateParams);

    emailjs
      .send(
        "service_vvr0s0i", // Remplacez par votre service ID
        "template_4gfsnca", // Remplacez par votre template ID
        templateParams,
        "tuKu1SRcKJQ7bZc5p" // Remplacez par votre user ID
      )
      .then(
        (result) => {
          console.log("Email envoyé avec succès!", result.text);
          setIsOpen(true);
          setSuccessMessage(true);
          setErrorMessage(false);
        },
        (error) => {
          console.log("Erreur lors de l'envoi de l'email:", error.text);
        }
      );
  };

  return (
    <div className="relative py-10">
      <div className="absolute hidden md:block left-32 top-32 overflow-hidden rounded-tl-3xl z-10 rounded-br-3xl shadow-xl w-1/4 h-2/6">
        <img src={blocOpperatoire} alt="dentiste" className="object-cover w-full h-full" />
      </div>
      <div className="absolute hidden md:block left-36 top-36 overflow-hidden bg-none rounded-tl-3xl border-fuchsia-900 border-2 border-opacity-35 z-20 rounded-br-3xl w-1/4 h-2/6" />
      <div className="absolute hidden md:block left-28 top-28 overflow-hidden bg-none rounded-tl-3xl border-[#1B2C51] z-0 border-2 border-opacity-35 rounded-br-3xl w-1/4 h-2/6" />
      <div className="absolute hidden md:block right-32 bottom-32  overflow-hidden rounded-tr-3xl z-10 rounded-bl-3xl shadow-xl w-1/4 h-2/6">
        <img src={img} alt="dentiste" className="object-cover w-full h-full" />
      </div>
      <div className="absolute hidden md:block right-36 bottom-36 overflow-hidden bg-none rounded-tr-3xl border-[#1B2C51] border-2 border-opacity-35 z-0 rounded-bl-3xl w-1/4 h-2/6" />
      <div className="absolute hidden md:block right-28 bottom-28 overflow-hidden bg-none rounded-tr-3xl border-fuchsia-900 z-20 border-2 border-opacity-35 rounded-bl-3xl w-1/4 h-2/6" />

      <div
        className="
      relative bg-[#1B2C51] z-30  bg-opacity-60 w-[90%] mx-auto rounded-3xl py-10 flex items-center flex-col
      lg:w-3/5 

      "
      >
        <div>
          <h1 className="text-2xl font-semibold text-white text-center">
            FORMULAIRE DE DEMANDE DE RENDEZ-VOUS
          </h1>
          <p className="text-white mt-6 text-center">
            Merci de répondre à ce formuliare pour permettre au secrétariat de
            vous
            <span className=" block pt-[10px]"> </span>
            organiser un rendez-vous
          </p>
        </div>

        <div className="pt-7">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              <div className="relative flex items-center w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 256 256"
                  className="absolute left-3 h-4 w-4 opacity-70"
                >
                  <path
                    fill="currentColor"
                    d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"
                  ></path>
                </svg>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  onFocus={(e) => {
                    e.target.placeholder = "Nom et prénom du patient ";
                    e.target.classList.remove("placeholder-red-500"); // Supprime la classe d'erreur pour le placeholder
                  }}
                  onBlur={(e) => {
                    if (!formData.nom && !errors.nom) {
                      e.target.placeholder = "Nom et prénom du patient "; // Rétablit le placeholder par défaut
                    }
                  }}
                  className={`pl-10 bg-white text-black p-2 rounded-2xl border ${
                    errors.nom
                      ? "border-red-500 placeholder-red-500" // Bordure rouge si erreur
                      : "border-slate-400 focus:border-fuchsia-900" // Bordure grise par défaut, bleue au focus
                  } w-full focus:outline-none`} // focus:outline-none pour supprimer le contour par défaut
                  placeholder={errors.nom || "Nom et prénom du patient "} // Affiche l'erreur ou le placeholder par défaut
                />
              </div>

              <div className="relative flex items-center w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="absolute left-3 h-4 w-4 opacity-70"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M3 .5h18m-18 23h18m-15.5 0v-6l2.856-1.714a4.415 4.415 0 0 0 0-7.572L5.5 6.5v-6m13 0v6l-2.856 1.714a4.416 4.416 0 0 0 0 7.572L18.5 17.5v6"
                  ></path>
                </svg>

                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  onFocus={(e) => {
                    e.target.placeholder = "Age du patient ";
                    e.target.classList.remove("placeholder-red-500");
                  }}
                  onBlur={(e) => {
                    if (!formData.age && !errors.age) {
                      e.target.placeholder = "Age du patient ";
                    }
                  }}
                  className={`pl-10 bg-white text-black p-2 rounded-2xl border ${
                    errors.age
                      ? "border-red-500 placeholder-red-500"
                      : "border-slate-400 focus:border-fuchsia-900"
                  } w-full focus:outline-none`}
                  placeholder={errors.age || "Age du patient "}
                />
              </div>

              <div>
                <div className="relative flex items-center w-72">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="absolute left-3 h-4 w-4 opacity-70"
                  >
                    <path
                      fill="currentColor"
                      d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 0 1-.03.039l-.01.01l-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.5 1.5 0 0 0 .42-.236l.05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01l.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"
                    ></path>
                  </svg>

                  <input
                    type="text"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    onFocus={(e) => {
                      e.target.placeholder = "N° de telephone ";
                      e.target.classList.remove("placeholder-red-500"); // Supprime la classe d'erreur pour le placeholder
                    }}
                    onBlur={(e) => {
                      if (!formData.telephone && !errors.telephone) {
                        e.target.placeholder = "N° de telephone "; // Rétablit le placeholder par défaut
                      }
                    }}
                    className={`pl-10 bg-white text-black p-2 rounded-2xl border ${
                      errors.telephone
                        ? "border-red-500 placeholder-red-500" // Bordure rouge si erreur
                        : "border-slate-400 focus:border-fuchsia-900" // Bordure grise par défaut, bleue au focus
                    } w-full focus:outline-none`} // focus:outline-none pour supprimer le contour par défaut
                    placeholder={errors.telephone || "N° de telephone "} // Affiche l'erreur ou le placeholder par défaut
                  />
                </div>
                {errors.telephone ===
                  "Le téléphone doit être uniquement en chiffres." && (
                  <p className="text-red-500 text-sm mt-1 bg-white bg-opacity-50 rounded-full px-1">
                    {errors.telephone}
                  </p>
                )}
              </div>

              <div>
                <div className="relative flex items-center w-72">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="absolute left-3 h-4 w-4 opacity-70"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <rect
                        width={18.5}
                        height={17}
                        x={2.682}
                        y={3.5}
                        rx={4}
                      ></rect>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.729 7.59l7.205 4.13a3.96 3.96 0 0 0 3.975 0l7.225-4.13"
                      ></path>
                    </g>
                  </svg>

                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={(e) => {
                      e.target.placeholder = "Adresse Email ";
                      e.target.classList.remove("placeholder-red-500"); // Supprime la classe d'erreur pour le placeholder
                    }}
                    onBlur={(e) => {
                      if (!formData.email && !errors.email) {
                        e.target.placeholder = "Adresse Email "; // Rétablit le placeholder par défaut
                      }
                    }}
                    className={`pl-10 bg-white text-black p-2 rounded-2xl border ${
                      errors.email
                        ? "border-red-500 placeholder-red-500" // Bordure rouge si erreur
                        : "border-slate-400 focus:border-fuchsia-900" // Bordure grise par défaut, bleue au focus
                    } w-full focus:outline-none`} // focus:outline-none pour supprimer le contour par défaut
                    placeholder={errors.email || "Adresse Email "} // Affiche l'erreur ou le placeholder par défaut
                  />
                </div>
                {errors.email ===
                  "Veuillez entrer une adresse email valide." && (
                  <p className="text-red-500 text-sm mt-1 bg-white bg-opacity-50 rounded-full px-1 text-center">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="relative flex items-center w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="absolute left-3 h-4 w-4 opacity-70"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </g>
                </svg>
                <input
                  type="text"
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  className="focus:outline-none focus:border-fuchsia-900 pl-10 bg-white text-black p-2 rounded-2xl border border-slate-400 w-full"
                  placeholder="Adresse"
                />
              </div>

              <div className="relative flex items-center w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="-1.5 -1 24 24"
                  className="absolute left-3 h-4 w-4 opacity-70"
                >
                  <path
                    fill="currentColor"
                    d="M18.913 2.9L2.632 9.226l4.829 2.006a5.77 5.77 0 0 1 3.118 3.119l2.006 4.828zm1.847.682l-6.328 16.281c-.4 1.03-1.551 1.557-2.571 1.18a1.92 1.92 0 0 1-1.11-1.067l-2.007-4.83a3.85 3.85 0 0 0-2.079-2.078l-4.828-2.006C.833 10.645.375 9.486.814 8.472A2.05 2.05 0 0 1 1.949 7.38L18.23 1.052a1.945 1.945 0 0 1 2.53 2.53"
                  ></path>
                </svg>
                <input
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  className="focus:outline-none focus:border-fuchsia-900 pl-10 bg-white text-black p-2 rounded-2xl border border-slate-400 w-full"
                  placeholder="Ville"
                />
              </div>

              <div className="relative flex items-center w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="absolute left-3 h-4 w-4 opacity-70"
                >
                  <path d="M3 0a.5.5 0 00-.5.5V1h-1A1.5 1.5 0 000 2.5v11A1.5 1.5 0 001.5 15h13A1.5 1.5 0 0016 13.5v-11A1.5 1.5 0 0014.5 1h-1V.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V1h-5V.5a.5.5 0 00-.5-.5h-1zM1 4h14v10H1V4zm3 3h2v2H4V7zm4 0h2v2H8V7z" />
                </svg>

                <input
                  type={formData.dateDeRendezVous ? "date" : "text"} // Type texte si pas de date
                  name="dateDeRendezVous"
                  value={formData.dateDeRendezVous}
                  onChange={handleChange}
                  onClick={(e) => e.target.showPicker()}
                  onFocus={(e) => {
                    e.target.type = "date"; // Changer en date lors du focus
                    e.target.classList.remove("placeholder-red-500");
                    e.target.showPicker();
                  }}
                  onBlur={(e) => {
                    if (!formData.dateDeRendezVous && !errors.dateDeRendezVous) {
                      e.target.type = "text"; // Revenir à texte si vide
                      e.target.placeholder = "Date de rendez-vous souhaitée"; // Placeholder personnalisé
                    }
                  }}
                  className={`pl-10 bg-white text-black p-2 rounded-2xl border ${
                    errors.dateDeRendezVous
                      ? "border-red-500 placeholder-red-500"
                      : " focus:border-fuchsia-900"
                  } w-full focus:outline-none`}
                  placeholder={
                    errors.dateDeRendezVous || "Date de rendez-vous souhaitée"
                  } // Placeholder si champ de texte
                />
              </div>

              <div className="relative flex items-center w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="absolute left-3 h-4 w-4 opacity-70"
                >
                  <path d="M8 3.5a.5.5 0 0 1 .5.5v4.25l3.25 1.75a.5.5 0 0 1-.5.85l-3.5-1.875A.5.5 0 0 1 7.5 8V4a.5.5 0 0 1 .5-.5zm0-3a8 8 0 1 0 0 16A8 8 0 0 0 8 .5zm0 1A7 7 0 1 1 8 15a7 7 0 0 1 0-14z" />
                </svg>

                <input
                  type="text"
                  name="heure"
                  value={formData.heure}
                  onChange={handleChange}
                  className="focus:outline-none focus:border-fuchsia-900 pl-10 bg-white text-black p-2 rounded-2xl border border-slate-400 w-full"
                  placeholder="Heure de rendez-vojus souhaitée"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="w-[90%] md:w-3/4 mx-auto  justify-between py-7">
                <textarea
                  className="focus:outline-none focus:border-fuchsia-900 pl-10 bg-white text-black p-2 rounded-2xl border border-slate-400 w-full h-28"
                  placeholder="Date et heure suggérées au secrétariat pour vous appeler afin de convenir d'un rendez-vous"
                  name="demande"
                  value={formData.demande}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex flex-col w-3/4 mx-auto flex-wrap justify-center items-center gap-4 pt-7">
                <button className="rounded-full shadow-lg btn w-52  mx-auto bg-[#1B2C51] border-0 text-white hover:bg-fuchsia-900">
                  {successMessage ? (
                    "Envoyer"
                  ) : (
                    <span className="loading loading-spinner loading-md"></span>
                  )}
                </button>

                {errorMessage && (
                  <p className="text-red-500 text-sm text-center mt-1 w-1/2 bg-white bg-opacity-50 rounded-full px-1">
                    Veuillez bien remplir tous les champs
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-md"></div>
          <div className="relative p-10 w-1/2 rounded-2xl overflow-hidden z-10 flex flex-col justify-center bg-[#F5F5F5] items-center">
            <PlusDeco />
            <div
              style={{
                backgroundImage: `url(${fond1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="z-0 absolute left-0 bottom-0 w-1/3 h-3/4"
            />
            <div
              style={{
                backgroundImage: `url(${fond2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="z-0 absolute right-0 top-10 w-1/4 h-1/2"
            />

            <div className="flex flex-col justify-center items-center p-4 w-full z-40 rounded-xl bg-opacity-50 bg-[#faf9f9] shadow-md">
              <div className="text-fuchsia-900 flex flex-row items-center justify-center">
                <span className="w-28">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path
                      fill="currentColor"
                      d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.4-.188-2.794-.688-4.094L26.688 13.5c.2.8.313 1.6.313 2.5c0 6.1-4.9 11-11 11S5 22.1 5 16S9.9 5 16 5c3 0 5.694 1.194 7.594 3.094L25 6.688C22.7 4.388 19.5 3 16 3m11.28 4.28L16 18.563l-4.28-4.28l-1.44 1.437l5 5l.72.686l.72-.687l12-12l-1.44-1.44z"
                    />
                  </svg>
                </span>
                <span className="font-medium text-4xl text-center">
                  Votre demande a bien été envoyé !!!
                </span>
              </div>

              <span className="text-center text-[#1B2C51] mt-4">
                Nous avons bien reçu votre demande. Notre secrétaire vous
                contactera sous peu pour convenir d&apos;une date de
                rendez-vous. Merci pour votre confiance !
              </span>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn relative bg-[#1B2C51] w-52 rounded-full shadow-xl border-0 text-white font-medium group hover:bg-[#1B2C51]"
                >
                  <span className="relative z-40">
                    <span>Fermer</span>
                  </span>
                  <span className="absolute inset-0 w-0 h-full opacity-0 rounded-full bg-fuchsia-900 transition-all duration-300 group-hover:opacity-75 group-hover:w-full"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentSection;
