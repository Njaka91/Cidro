const LegalNotices = () => {
  return (
    <div className="px-6 md:px-8 lg:px-24 xl-px-32 py-10 flex flex-col gap-10 text-[#1B2C51]">
      <h1 className="uppercase text-3xl font-semibold">Mentions Légales</h1>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">
          Éditeur du site
        </h2>
        <div className="mt-3">
          <div>
            Nom de l&apos;entreprise :
            <span className="font-semibold"> Informatika Team Service</span>
          </div>
          <div>
            Adresse :{" "}
            <span className="font-semibold">
              14, Rue des 5 perches 77500 Chelles, France
            </span>
          </div>
          <div>
            Téléphone :{" "}
            <span className="font-semibold">
              09 87 32 19 12
            </span>
          </div>
          <div>
            Mail :{" "}
            <span className="font-semibold">Informatika@informatika-group.com</span>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">
          Client (propriétaire du site)
        </h2>
        <div className="mt-3">
          <div>
            Nom du cabinet :{" "}
            <span className="font-semibold">
              Clinique d’Implantologie Dentaire et de Réhabilitation Orale
              (CIDRO)
            </span>
          </div>
          <div>
            Adresse :{" "}
            <span className="font-semibold">
              Lot IBF 5Bis Résidence &quot;Les Rosiers&quot; Antsahavola
            </span>
          </div>
          <div>
            Téléphone :<span className="font-semibold"> +261 34 02 267 27</span>
          </div>
          <div>
            Email :{" "}
            <span className="font-semibold">
            allainrazakatianad@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">
          Hébergement du site
        </h2>
        <div className="mt-3">
          <div>
            Nom de l&apos;hébergeur :{" "}
            <span className="font-semibold">
              Tranokala
            </span>
          </div>
          <div>
            Adresse :{" "}
            <span className="font-semibold">VI 30 Ambatovinaky, Près du Ministère de l’Eau, de l’Assainissement</span>
          </div>
          <div>
            Téléphone :{" "}
            <span className="font-semibold">
            +261 34 41 189 33
            </span>
          </div>
          <div>
            Email:{" "}
            <span className="font-semibold">
            contact@tranokala.pro
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotices;
