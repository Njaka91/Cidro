import { useState, useEffect } from "react";
import { MapPin, X } from "@phosphor-icons/react";

export default function AddressChangePopup() {
  const [state, setState] = useState("hidden"); // hidden | entering | visible | leaving

  useEffect(() => {
    const t = setTimeout(() => setState("entering"), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (state === "entering") {
      const t = setTimeout(() => setState("visible"), 30);
      return () => clearTimeout(t);
    }
  }, [state]);

  const handleClose = () => {
    setState("leaving");
    setTimeout(() => setState("hidden"), 450);
  };

  if (state === "hidden") return null;

  const isVisible = state === "visible";

  return (
    <>
      <style>{`
        @keyframes blink-border {
          0%, 49% { border-color: #ef4444; }
          50%, 100% { border-color: transparent; }
        }
        .popup-blink {
          animation: blink-border 1s step-start infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .popup-blink { animation: none; border-color: #ef4444; }
        }
      `}</style>

      {/* Popup — coin bas-droite sur desktop, centré bas sur mobile */}
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Information changement d'adresse"
        className="fixed z-50 bottom-4 right-4 left-4 sm:left-auto sm:w-80 md:w-96 transition-all duration-[450ms]"
        style={{
          transitionTimingFunction: isVisible
            ? "cubic-bezier(0.22, 1, 0.36, 1)"
            : "ease-in",
          transform: isVisible ? "translateX(0)" : "translateX(calc(100% + 2rem))",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="popup-blink bg-fuchsia-200 border-2 rounded-2xl shadow-lg p-4 flex items-start gap-3"
          style={{ borderColor: "#1B2C51" }}
        >
          {/* Icône */}
          <MapPin
            size={22}
            weight="duotone"
            className="flex-shrink-0 mt-0.5"
            style={{ color: "#1B2C51" }}
            aria-hidden="true"
          />

          {/* Texte */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold mb-1" style={{ color: "#1B2C51" }}>
              Changement d&apos;adresse à venir&nbsp;!
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#1B2C51" }}>
              À partir du{" "}
              <span className="font-semibold">1er Juillet 2026</span>, le cabinet
              sera transféré à l&apos;
              <span className="font-semibold">
                Immeuble Akany Rainimamonjy FJKM Amparibe Famonjena, 2ème étage
              </span>
              . Nous restons joignables au même numéro.
            </p>
          </div>

          {/* Bouton fermer */}
          <button
            onClick={handleClose}
            aria-label="Fermer ce message"
            className="flex-shrink-0 -mt-1 -mr-1 rounded-full p-1 transition-colors duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2"
            style={{ color: "#1B2C51" }}
          >
            <X size={18} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}
