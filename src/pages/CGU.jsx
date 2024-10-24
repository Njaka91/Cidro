import { Link } from "react-router-dom";

const CGU = () => {
  return (
    <div className="px-6 md:px-8 lg:px-24 xl-px-32 py-10 flex flex-col gap-10 text-[#1B2C51]">
      <h1 className="uppercase text-3xl font-semibold">
        Conditions générales d&apos;utilisation (CGU)
      </h1>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">Objet</h2>
        <p className="mt-3">
          Le site vitrine du cabinet dentaire <Link to="/" className="font-bold">CIDRO</Link> (Clinique d’Implantologie
          Dentaire et de Réhabilitation Orale) est destiné à fournir des
          informations sur le cabinet, ses services, son équipe, ainsi qu&apos;à
          permettre la demande de <Link to="/prendre-rendez-vous" className="font-bold">rendez-vous en ligne</Link>.
        </p>
      </div>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">
          Acceptation des conditions
        </h2>
        <p className="mt-3">
          En accédant au Site, l&apos;utilisateur accepte de se conformer aux
          présentes CGU.
        </p>
      </div>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">Accès au Site</h2>
        <p className="mt-3">
          Le Site est accessible <span className="font-semibold">24h/24</span>, <span className="font-semibold">7j/7</span>, sauf interruption pour des
          raisons techniques.
        </p>
      </div>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">Responsabilité</h2>
        <p className="mt-3">
          Le cabinet dentaire s’efforce de fournir des informations actualisées
          et précises. Toutefois, le cabinet ne peut être tenu responsable
          d&apos;éventuelles erreurs ou omissions, ni des dommages directs ou
          indirects liés à l&apos;utilisation du Site.
        </p>
      </div>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">Propriété intellectuelle</h2>
        <p className="mt-3">
          Tous les contenus (textes, images, logos) présents sur le Site sont la
          propriété exclusive du cabinet dentaire. Toute reproduction, même
          partielle, est strictement interdite sans autorisation préalable.
        </p>
      </div>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">Demande de rendez-vous</h2>
        <p className="mt-3">
          L&apos;utilisateur peut <Link to="/prendre-rendez-vous" className="font-bold">demander un rendez-vous</Link> en fournissant ses
          informations personnelles via le formulaire prévu à cet effet. Ces
          informations sont strictement destinées à la gestion de la demande de
          rendez-vous et à la prise de contact par la secrétaire du cabinet.
        </p>
      </div>
      <div>
        <h2 className="text-fuchsia-900 text-2xl font-semibold">Modifications</h2>
        <p className="mt-3">
          Le cabinet se réserve le droit de modifier à tout moment les présentes
          CGU.
        </p>
      </div>
    </div>
  );
};

export default CGU;
