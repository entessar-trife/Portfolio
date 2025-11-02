const LoaderComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden relative">
      <p className="font-pacifico mb-10 text-4xl text-center animate-pulse">
        Hi and welcome to my portfolio...
      </p>

      <div className=" flex gap-6">
        <div className="w-10 h-10 bg-white/40 rounded-full animate-bounce delay-[0ms]"></div>
        <div className="w-10 h-10 bg-purple-300/60 rounded-full animate-bounce delay-150"></div>
        <div className="w-10 h-10 bg-blue-300/60 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default LoaderComponent;
