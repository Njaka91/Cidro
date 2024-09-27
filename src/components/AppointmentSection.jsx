import { useState } from "react";
import emailjs from "emailjs-com";

const AppointmentSection = () => {
  const [hasMutuelle, setHasMutuelle] = useState("");
  const [isForMe, setIsForMe] = useState("");
  const [appointementDay, setAppointementDay] = useState("");
  const [appointementHour, setAppointementHour] = useState("");
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    adresse: "",
    ville: "",
    codePostal: "",
    email: "",
    telephone: "",
    mutuelle: "",
    secuSociale: "",
    nomEtPernomEnfant: "",
    dateNaissanceEnfant: "",
    demande: "",
  });

  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  const hour = ["8h30-12h", "14h00-17h"];

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
    if (!formData.prenom.trim()) {
      newErrors.prenom = "Champ obligatoire.";
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

    if (!validateForm()) {
      return;
    }

    const templateParams = {
      nom: formData.nom,
      prenom: formData.prenom,
      dateNaissance: formData.dateNaissance,
      adresse: formData.adresse,
      ville: formData.ville,
      codePostal: formData.codePostal,
      email: formData.email,
      telephone: formData.telephone,
      mutuelle: formData.mutuelle,
      secuSociale: formData.secuSociale,
      demande: formData.demande,
      appointementDay: appointementDay,
      appointementHour: appointementHour,
      isForMe:isForMe
    };

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
        },
        (error) => {
          console.log("Erreur lors de l'envoi de l'email:", error.text);
        }
      );
    console.log(
      "Form data: ",
      formData,
      hasMutuelle,
      isForMe,
      appointementDay,
      appointementHour
    );
    // Add API submission or other logic here
  };

  return (
    <div className="py-10">
      <div className="bg-[#1B2C51] bg-opacity-60 w-3/5 mx-auto rounded-3xl py-7">
        <div>
          <h1 className="text-2xl font-semibold text-white text-center">
            QUESTIONNAIRE DE DEMANDE DE RENDEZ-VOUS
          </h1>
          <p className="text-white mt-6 text-center">
            Merci de prendre le temps de répondre à ce questionnaire afin que
            notre
            <span className=" block pt-[10px]"> </span>
            secrétariat vous recontacte dans les meilleurs délais pour vous
            proposer
            <span className=" block pt-[10px]"> </span>
            un rendez-vous.
          </p>
        </div>

        <div className="py-7">
          <form onSubmit={handleSubmit}>
            <div className="flex w-3/4 max-w-3xl mx-auto flex-row flex-wrap justify-between gap-4">
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
                    e.target.placeholder = "Nom ";
                    e.target.classList.remove("placeholder-red-500"); // Supprime la classe d'erreur pour le placeholder
                  }}
                  onBlur={(e) => {
                    if (!formData.nom && !errors.nom) {
                      e.target.placeholder = "Nom "; // Rétablit le placeholder par défaut
                    }
                  }}
                  className={`pl-10 bg-white text-black p-2 rounded-2xl border ${
                    errors.nom
                      ? "border-red-500 placeholder-red-500" // Bordure rouge si erreur
                      : "border-slate-400 focus:border-fuchsia-900" // Bordure grise par défaut, bleue au focus
                  } w-full focus:outline-none`} // focus:outline-none pour supprimer le contour par défaut
                  placeholder={errors.nom || "Nom "} // Affiche l'erreur ou le placeholder par défaut
                />
              </div>

              <div className="relative flex items-center w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="absolute left-3 h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM8 9a5 5 0 00-5 5v.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V14a5 5 0 00-5-5z" />
                </svg>

                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  onFocus={(e) => {
                    e.target.placeholder = "Prénom ";
                    e.target.classList.remove("placeholder-red-500");
                  }}
                  onBlur={(e) => {
                    if (!formData.prenom && !errors.prenom) {
                      e.target.placeholder = "Prénom ";
                    }
                  }}
                  className={`pl-10 bg-white text-black p-2 rounded-2xl border ${
                    errors.prenom
                      ? "border-red-500 placeholder-red-500"
                      : "border-slate-400 focus:border-fuchsia-900"
                  } w-full focus:outline-none`}
                  placeholder={errors.prenom || "Prénom "}
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
                  type={formData.dateNaissance ? "date" : "text"} // Type texte si pas de date
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleChange}
                  onClick={(e) => e.target.showPicker()}
                  onFocus={(e) => {
                    e.target.type = "date"; // Changer en date lors du focus
                    e.target.classList.remove("placeholder-red-500");
                    e.target.showPicker();
                  }}
                  onBlur={(e) => {
                    if (!formData.dateNaissance && !errors.dateNaissance) {
                      e.target.type = "text"; // Revenir à texte si vide
                      e.target.placeholder = "Date de naissance"; // Placeholder personnalisé
                    }
                  }}
                  className={`pl-10 bg-white text-black p-2 rounded-2xl border ${
                    errors.dateNaissance
                      ? "border-red-500 placeholder-red-500"
                      : " focus:border-fuchsia-900"
                  } w-full focus:outline-none`}
                  placeholder={errors.dateNaissance || "Date de naissance"} // Placeholder si champ de texte
                />
              </div>

              <div className="relative flex items-center w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="absolute left-3 h-4 w-4 opacity-70"
                >
                  <path d="M8 .5l7 6.5v8A1.5 1.5 0 0113.5 16h-3A1.5 1.5 0 019 14.5V11H7v3.5A1.5 1.5 0 015.5 16h-3A1.5 1.5 0 010 14.5v-8L8 .5z" />
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
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="absolute left-3 h-4 w-4 opacity-70"
                >
                  <path d="M8 0a5 5 0 00-5 5c0 3.5 5 10 5 10s5-6.5 5-10a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" />
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
                  <path d="M3 0a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V1a1 1 0 00-1-1H3zm1 1h8v12H4V1z" />
                  <path d="M5 3h6v1H5V3zm0 2h6v1H5V5zm0 2h6v1H5V7zm0 2h6v1H5v-1z" />
                </svg>
                <input
                  type="text"
                  name="codePostal"
                  value={formData.codePostal}
                  onChange={handleChange}
                  className="focus:outline-none focus:border-fuchsia-900 pl-10 bg-white text-black p-2 rounded-2xl border border-slate-400 w-full"
                  placeholder="Code postal"
                />
              </div>
              <div>
                <div className="relative flex items-center w-72">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="absolute left-3 h-4 w-4 opacity-70"
                  >
                    <path d="M1.5 2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V2.5a.5.5 0 00-.5-.5h-13zM1 3.5v-.5h14v.5h-14zm0 1h14v10H1V4.5zm0 0z" />
                    <path d="M1 4.5l7 4.5 7-4.5v10l-7 4.5-7-4.5V4.5z" />
                  </svg>

                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={(e) => {
                      e.target.placeholder = "Email ";
                      e.target.classList.remove("placeholder-red-500"); // Supprime la classe d'erreur pour le placeholder
                    }}
                    onBlur={(e) => {
                      if (!formData.email && !errors.email) {
                        e.target.placeholder = "Email "; // Rétablit le placeholder par défaut
                      }
                    }}
                    className={`pl-10 bg-white text-black p-2 rounded-2xl border ${
                      errors.email
                        ? "border-red-500 placeholder-red-500" // Bordure rouge si erreur
                        : "border-slate-400 focus:border-fuchsia-900" // Bordure grise par défaut, bleue au focus
                    } w-full focus:outline-none`} // focus:outline-none pour supprimer le contour par défaut
                    placeholder={errors.email || "Email "} // Affiche l'erreur ou le placeholder par défaut
                  />
                </div>
                {errors.email ===
                  "Veuillez entrer une adresse email valide." && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="relative flex items-center w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 50 50"
                  className="absolute left-3 h-4 w-4 opacity-70"
                >
                  <path
                    fill="none"
                    stroke="#306cfe"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M43.75 31.25v8.187a4.166 4.166 0 0 1-4.77 4.167A37.5 37.5 0 0 1 6.541 11.021a4.167 4.167 0 0 1 4.146-4.771h8.062a2.083 2.083 0 0 1 2.083 1.854c.207 2.73.913 5.4 2.084 7.875a2.083 2.083 0 0 1-.875 2.625l-1.792 1.02a2.085 2.085 0 0 0-.687 3.043a29.3 29.3 0 0 0 7.687 7.687a2.083 2.083 0 0 0 3.042-.687l1.02-1.792a2.083 2.083 0 0 1 2.709-.792a22.4 22.4 0 0 0 7.875 2.084a2.083 2.083 0 0 1 1.854 2.083"
                  ></path>
                </svg>
                <input
                  type="text"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="focus:outline-none focus:border-fuchsia-900 pl-10 bg-white text-black p-2 rounded-2xl border border-slate-400 w-full"
                  placeholder="N° de telephone"
                />
              </div>

              <div className="relative flex items-center w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 14 14"
                  className="absolute left-3 h-4 w-4 opacity-70"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8.315 1.031a.5.5 0 0 0-.5.5v1.407H6.409a.5.5 0 0 0-.5.5v1.625a.5.5 0 0 0 .5.5h1.406v1.406a.5.5 0 0 0 .5.5H9.94a.5.5 0 0 0 .5-.5V5.563h1.406a.5.5 0 0 0 .5-.5V3.438a.5.5 0 0 0-.5-.5H10.44V1.53a.5.5 0 0 0-.5-.5zm-7.732 9.75l2.444 2.037a2 2 0 0 0 1.28.463h6.443c.46 0 .833-.373.833-.833c0-.92-.746-1.667-1.667-1.667H5.437"></path>
                    <path d="m3.583 9.781l.75.75a1.06 1.06 0 1 0 1.5-1.5L4.669 7.867a2 2 0 0 0-1.414-.586H.583"></path>
                  </g>
                </svg>
                <select
                  className="focus:outline-none focus:border-fuchsia-900 pl-10 bg-white text-black p-2 rounded-2xl border border-slate-400 w-full"
                  value={hasMutuelle}
                  onChange={(e) => setHasMutuelle(e.target.value)}
                >
                  <option value="" disabled selected>
                    Disposez-vous d&apos;une mutuelle ?
                  </option>
                  <option value="oui">Oui, j&apos;ai une mutuelle.</option>
                  <option value="non">
                    Non, je n&apos;ai pas de mutuelle.
                  </option>
                </select>
              </div>

              <div className="relative flex items-center w-72">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 14 14"
                  className="absolute left-3 h-4 w-4 opacity-70"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8.315 1.031a.5.5 0 0 0-.5.5v1.407H6.409a.5.5 0 0 0-.5.5v1.625a.5.5 0 0 0 .5.5h1.406v1.406a.5.5 0 0 0 .5.5H9.94a.5.5 0 0 0 .5-.5V5.563h1.406a.5.5 0 0 0 .5-.5V3.438a.5.5 0 0 0-.5-.5H10.44V1.53a.5.5 0 0 0-.5-.5zm-7.732 9.75l2.444 2.037a2 2 0 0 0 1.28.463h6.443c.46 0 .833-.373.833-.833c0-.92-.746-1.667-1.667-1.667H5.437"></path>
                    <path d="m3.583 9.781l.75.75a1.06 1.06 0 1 0 1.5-1.5L4.669 7.867a2 2 0 0 0-1.414-.586H.583"></path>
                  </g>
                </svg>
                <input
                  type="text"
                  name="mutuelle"
                  value={formData.mutuelle}
                  onChange={handleChange}
                  className={`focus:outline-none focus:border-fuchsia-900 pl-10 bg-white text-black p-2 rounded-2xl border border-slate-400 w-full ${
                    hasMutuelle === "non" || hasMutuelle === ""
                      ? "opacity-75"
                      : ""
                  }`}
                  placeholder="Si oui laquelle ?"
                  disabled={hasMutuelle === "non" || hasMutuelle === ""}
                />
              </div>

              <div className="relative flex items-center w-72">
                <svg
                  className="absolute left-3 h-4 w-4 opacity-70"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  >
                    <path d="M12 11.543A2.17 2.17 0 1 0 12 7.2a2.17 2.17 0 0 0 0 4.342m0 .001v3.256"></path>
                    <path d="M20.672 11.89V6.61a1.93 1.93 0 0 0-1.32-1.831L14.438 3.14a7.8 7.8 0 0 0-4.876 0L4.648 4.778a1.93 1.93 0 0 0-1.32 1.83v5.28a7.71 7.71 0 0 0 3.603 6.524l4.048 2.544a1.93 1.93 0 0 0 2.042 0l4.047-2.544a7.71 7.71 0 0 0 3.604-6.523"></path>
                  </g>
                </svg>
                <input
                  type="text"
                  name="secuSociale"
                  value={formData.secuSociale}
                  onChange={handleChange}
                  className="focus:outline-none focus:border-fuchsia-900 pl-10 bg-white text-black p-2 rounded-2xl border border-slate-400 w-full"
                  placeholder="N° de sécurité sociale"
                />
              </div>

              <div className="relative flex items-center w-72">
                <svg
                  className="absolute left-3 h-4 w-4 opacity-70"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M26 16h-8.532l-5-6H5a3.003 3.003 0 0 0-3 3v6a2 2 0 0 0 2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7h-2v7H6v-9H4v-6a1 1 0 0 1 1-1h6.532l5 6H26a1 1 0 0 1 1 1v3h-2v6h-3v-6h-2v6a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-4a2 2 0 0 0 2-2v-3a3.003 3.003 0 0 0-3-3"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M23.5 15a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5m0-5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5M8 9a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"
                  ></path>
                </svg>
                <select
                  className="focus:outline-none focus:border-fuchsia-900 pl-10 bg-white placeholder:text-red-600 text-black p-2 rounded-2xl  border border-slate-400 w-full"
                  value={isForMe}
                  onChange={(e) => setIsForMe(e.target.value)}
                >
                  <option value="" disabled selected>
                    Le rendez-vous est pour :
                  </option>
                  <option value="le demandeur">moi</option>
                  <option value="l'enfant du demandeur">mon enfant</option>
                </select>
              </div>
            </div>
            <div>
              <div className="flex w-3/4 max-w-3xl mx-auto flex-row flex-wrap justify-between gap-4 py-7">
                <textarea
                  className="focus:outline-none focus:border-fuchsia-900 pl-10 bg-white text-black p-2 rounded-2xl border border-slate-400 w-full h-28"
                  placeholder="Avez-vous une demande particulière ?"
                  name="demande"
                  value={formData.demande}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex w-3/4 max-w-3xl mx-auto flex-row flex-wrap justify-between gap-4 ">
                <h1 className="text-2xl font-semibold text-white text-center">
                  A quel moment notre secrétariat peut-il vous appeler afin de
                  convenir d&apos;un rendez-vous ?
                  <span className=" block pt-[10px]"> </span>
                  Jour:
                </h1>
              </div>
              <div className="flex flex-row items-center gap-4 w-3/4 justify-between mx-auto">
                {days.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <label className="label cursor-pointer">
                      <span className="label-text text-lg font-semibold text-white">
                        {day}
                      </span>
                    </label>
                    <input
                      type="radio"
                      name="appointementDay"
                      value={day}
                      onChange={(e) => setAppointementDay(e.target.value)}
                      className="radio  bg-white border-0 checked:bg-fuchsia-900 checked:ring-white text-white" // Stylisation du bouton radio
                    />
                  </div>
                ))}
              </div>

              <div className="flex w-3/4 max-w-3xl mx-auto flex-row flex-wrap justify-between gap-4 ">
                <h1 className="text-2xl font-semibold text-white text-center mx-auto mt-4">
                  <span className=" block pt-[10px]"> </span>
                  Créneau horaire :
                </h1>
              </div>

              <div className="flex flex-row items-center gap-4 w-3/4 justify-center mx-auto">
                {hour.map((hour, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <label className="label cursor-pointer">
                      <span className="label-text text-lg font-semibold text-white">
                        {hour}
                      </span>
                    </label>
                    <input
                      type="radio"
                      name="hour"
                      value={hour}
                      onChange={(e) => setAppointementHour(e.target.value)}
                      className="radio radio-primary bg-white text-white checked:bg-fuchsia-900 border-none" // Stylisation du bouton radio
                    />
                  </div>
                ))}
              </div>

              <div className="flex w-3/4 max-w-3xl mx-auto flex-row flex-wrap justify-between gap-4 py-7">
                <button className="rounded-full shadow-xl btn w-52 max-w-sm mx-auto bg-[#1B2C51] border-0 text-white hover:bg-fuchsia-900">
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
