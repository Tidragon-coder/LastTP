type TeamMemberCardProps = {
  image: string;
  name: string;
  role: string;
};

export default function TeamMemberCard({ image, name, role }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center text-white max-w-xs">
      <img 
        src={image} 
        alt={name} 
        className="w-32 h-32 rounded-full object-cover border-4 border-[#20a49c] shadow-lg"
      />
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="mt-1 text-sm opacity-80">{role}</p>
    </div>
  );
}
