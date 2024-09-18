const ErrorPage = () => {
    return (
      <div className="flex justify-center items-center bg-gradient-to-r from-[#1B2C51] to-fuchsia-900 min-h-screen min-w-full p-20">
        <div className="flex flex-col gap-4 justify-center items-center bg-gradient-to-r from-[#29488b] to-[#901c96] w-full h-full py-36 font-semibold shadow-lg text-white text-9xl">
        <span className="text-4xl">Error !!!</span>
            <span>404</span>
            <span className="text-4xl">Page not found</span>
        </div>
      </div>
    )
  }
  
  export default ErrorPage