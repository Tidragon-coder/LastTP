import { Link } from "react-router-dom";

interface ReglementCardProps {
  image: string;
  title: string;
  link: string;
  className?: string;
}

export default function ReglementCard({ image, title, link, className }: ReglementCardProps) {
  return (
    <Link
      to={link}
      className={`relative w-72 h-96 rounded-xl overflow-hidden group ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
        <h3 className="text-white text-2xl font-bold p-4">{title}</h3>
      </div>
    </Link>
  );
}
