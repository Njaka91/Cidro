import LocationApi from '../common/LocationApi';

const Location = () => {
  return (
    <div
      id="Location"
        className="  border-purple-500 relative z-10 w-full h-[480px] md:h-96  overflow-hidden mb-8 px-4
        md:px-8 
      lg:px-24 
      xl:px-32
      "
      >
        <div className='relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-spacing-9 border-[0.5px] border-purple-600'>
        <button
          onClick={() => {
            window.open(
              "https://www.google.com/maps/dir/?api=1&destination=-18.908871,47.522731",
              "_blank"
            );
          }}
          className="absolute w-fit inline-flex items-center py-1 px-2 rounded-primitive bg-[#F2F6F7] z-50 hover:bg-[#daeef3]
        top-12 right-2 
        md:top-3 md:left-3"
        >
          <div
            className="flex flex-row gap-2 py-[5px]
          xl:py-[6px]
          2xl:py-[9px]
          "
          >
            <p >
              Itinéraire vers le cabinet
            </p>
          </div>
        </button>
        <LocationApi />
        </div>
      </div>
  )
}

export default Location
