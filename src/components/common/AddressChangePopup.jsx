import { useState, useEffect } from "react";
import { MapPin } from "@phosphor-icons/react";

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

  const handleItinerary = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=-18.915410,47.527332",
      "_blank"
    );
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
        <div className="popup-blink bg-fuchsia-200 border-2 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div
            className="flex justify-center bg-fuchsia-800 items-center gap-3 px-4 py-3"
            
          >
            <div
              className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              <MapPin size={20} weight="duotone" className="text-white" aria-hidden="true" />
            </div>
            <p className=" text-md font-semibold text-white">
              NOTRE CABINET A DÉMÉNAGÉ
            </p>
          </div>

          {/* Body */}
          <div className="flex flex-col px-4 py-4">
            <p className="text-center leading-relaxed mb-3" style={{ color: "#701a4f" }}>
              Retrouvez-nous désormais au :
            </p>

            <button
              onClick={handleItinerary}
              aria-label="Ouvrir l'itinéraire vers le cabinet"
              className="w-full flex items-start gap-2 rounded-xl border p-3 mb-1 text-left transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2"
              style={{ background: "#fce7f3", borderColor: "#f0abfc" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#fbcfe8")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#fce7f3")}
            >
              <MapPin
                size={18}
                weight="fill"
                className="flex-shrink-0 mt-0.5"
                style={{ color: "#86198f" }}
                aria-hidden="true"
              />
              <span className="text-sm font-semibold leading-snug" style={{ color: "#701a4f" }}>
                Immeuble Akany Rainimamonjy
                <br />
                FJKM Amparibe Famonjena, 2ème étage
              </span>
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 pb-4">
            <button
              onClick={handleClose}
              className="w-full rounded-xl py-2.5 text-sm font-semibold bg-fuchsia-800 text-white transition-colors duration-150 focus:outline-none focus:ring-2"
              onMouseOver={(e) => (e.currentTarget.style.background = "#c026d3")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#a21caf")}
            >
              J&apos;ai compris
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
