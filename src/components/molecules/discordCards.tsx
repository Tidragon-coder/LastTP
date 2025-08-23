type DiscordCardProps = {
  title: string;
  link: string;
  image: string;
  description: string;
};

export default function DiscordCard({ title, link, image, description }: DiscordCardProps) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition p-4 flex items-center gap-4">
  
      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm mt-1 flex-1">{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 self-start bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg transition"
        >
          🚀 Rejoindre
        </a>
      </div>
    </div>
  );
}
