const Tab = ({ children }) => {
  return (
    <div className="mx-3 bg-indigo-600 hover:bg-indigo-700 rounded-md p-2 cursor-pointer duration-300 text-sm ">
      {children}
    </div>
  );
};

export default Tab;