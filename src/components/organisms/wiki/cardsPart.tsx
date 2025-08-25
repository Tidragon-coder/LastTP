type CardProps = {
  title: string;
  subtitle: string;
  link: string;
};

export default function CardsPart({ title, subtitle, link }: CardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-5 w-72 h-80 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
    >
      {/* Icône centrée */}
      <div className="flex justify-center items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="#63b3ed"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62Z"
          />
          <path
            fill="none"
            stroke="#63b3ed"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M256 56v120a32 32 0 0 0 32 32h120"
          />
        </svg>
      </div>

      {/* Texte */}
      <h3 className="text-xl font-semibold text-white text-center mb-2 group-hover:text-cyan-400 transition">
        {title}
      </h3>
      <p className="text-sm text-gray-400 text-center">{subtitle}</p>
    </a>
  );
}
