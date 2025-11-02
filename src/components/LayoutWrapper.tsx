interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <div>
      <div
        className="px-5 sm:px-10 lg:px-20 
      bg-gradient-to-b from-blue-50 to-purple-50"
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
