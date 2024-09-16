const Shimmer = () => {
    return (
      <div className="grid grid-cols-4 gap-4 p-6 max-w-4xl mx-auto h-44 w-full">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 animate-pulse rounded-lg shadow-lg p-4"
          >
            <div className="bg-gray-300 h-44 w-full mb-4 rounded-lg"></div>
            <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded"></div>
            <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  