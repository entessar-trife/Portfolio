interface SocialComponentProps {
  icon: React.ReactNode;
  link: string;
}

const SocialComponent = ({ icon, link }: SocialComponentProps) => {
  return (
    <div
      className="flex justify-center items-center
     bg-white border border-purple-500 h-[50px] w-[50px] rounded-full
     hover:scale-110 hover:shadow-xl duration-300"
    >
      <a
        href={link}
        className="text-purple-500 text-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    </div>
  );
};

export default SocialComponent;
