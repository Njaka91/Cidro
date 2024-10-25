import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="px-6 md:px-8 lg:px-24 xl-px-32 py-10 flex flex-col gap-10 text-[#1B2C51]">
      <h1 className="uppercase text-3xl font-semibold">
        Politique de Confidentialité
      </h1>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">
          Collecte des données personnelles
        </h2>
        <p className="mt-3">
          Le cabinet dentaire collecte les données personnelles via le
          formulaire de{" "}
          <Link to="/prendre-rendez-vous" className="font-bold">
            demande de rendez-vous
          </Link>{" "}
          (nom, prénom, adresse email, numéro de téléphone, etc.). Ces
          informations sont uniquement utilisées pour organiser la prise de
          rendez-vous et entrer en contact avec l&apos;utilisateur.
        </p>
      </div>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">
          Finalité des données collectées
        </h2>
        <p className="mt-3">
          Les données collectées sont utilisées pour :
          <ul className="ml-4 mt-3 list-disc">
            <li>Gérer les demandes de rendez-vous</li>
            <li>
              Prendre contact avec l&apos;utilisateur pour confirmer ou ajuster
              le rendez-vous
            </li>
            <li>
              Respecter les obligations légales en matière de gestion de données
              personnelles
            </li>
          </ul>
        </p>
      </div>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">
          Conservation des données
        </h2>
        <p className="mt-3">
          Les données personnelles sont conservées pendant la durée nécessaire
          au traitement des demandes de rendez-vous et conformément à la
          législation en vigueur.
        </p>
      </div>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">
          Droits de l&apos;utilisateur
        </h2>
        <p className="mt-3">
          Conformément à la réglementation applicable, l&apos;utilisateur
          dispose d&apos;un droit d&apos;accès, de rectification et de
          suppression des données le concernant. Pour exercer ce droit, il peut
          envoyer un email à{" "}
          <Link
            to="mailto:allainrazakatianad@gmail.com"
            className="font-semibold"
          >
            allainrazakatianad@gmail.com
          </Link>
          .
        </p>
      </div>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">
          Sécurité des données
        </h2>
        <p className="mt-3">
          Le cabinet met en œuvre les mesures nécessaires pour garantir la
          sécurité des données personnelles des utilisateurs.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
