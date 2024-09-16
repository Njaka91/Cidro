import Button from "./Button"


// eslint-disable-next-line react/prop-types
const StickyImg = ({imgBg}) => {
  return (
    <div style={{
        backgroundImage: `url(${imgBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '75vh',
        top: 12
    }}
        className="sticky overflow-hidden">
      <div
      className="absolute inset-0 h-4/5 items-center w-4/5 rounded-full bg-[#1ea06c] opacity-50 blur-3xl shadow-[0_0_30px_rgba(0,0,0,0.8)]"/>  
      <div
      className="absolute inset-0 bg-[#1ea06c]/30"/>
      <Button/>
    </div>
  )
}

export default StickyImg
