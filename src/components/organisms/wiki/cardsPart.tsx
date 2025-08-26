type CardProps = {
  title: string;
  subtitle: string;
  link: string;
  reglement?: boolean;
};

export default function CardsPart({ title, subtitle, link, reglement }: CardProps) {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="group relative block rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-5 w-72 h-80 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
    >
      {/* Icône centrée */}
      {reglement ? (
        <div className="flex justify-center items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24"><g fill="none" stroke="#63b3ed" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M2 14.167C2 17.389 4.686 20 8 20s6-2.611 6-5.833c0-1.98-1.014-3.729-2.565-4.783c-.309-.21-.435-.386-.435-.772c0-.803 0-1.204-.133-1.522C10.415 6.01 9.34 6 8.314 6h-.628c-1.026 0-2.1.01-2.553 1.09C5 7.408 5 7.81 5 8.612c0 .368-.116.555-.435.772C3.014 10.438 2 12.187 2 14.167" /><path d="M14.51 8.066c.374-.064.779-.066 1.177-.066h.628c1.026 0 2.1.01 2.553 1.09c.133.317.133.719.133 1.522c0 .386.126.561.435.772c1.55 1.054 2.565 2.803 2.565 4.783C22 19.388 19.315 22 16 22a6.1 6.1 0 0 1-2.76-.653" /><circle cx="8" cy="14" r="2" /><path d="M16.115 17.997a2 2 0 0 0 .884-3.73M16 9V6.933c0-1.651 0-2.477-.424-3.074c-.423-.598-1.15-.798-2.606-1.199l-.12-.033c-2.173-.598-3.26-.897-4.01-.308a2 2 0 0 0-.138.119C8 3.097 8 4.33 8 6.798" /></g></svg>
        </div>
      ) : (

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
      )}

      {/* Texte */}
      <h3 className="text-xl font-semibold text-white text-center mb-2 group-hover:text-cyan-400 transition">
        {title}
      </h3>
      <p className="text-sm text-gray-400 text-center">{subtitle}</p>
    </a>
  );
}
