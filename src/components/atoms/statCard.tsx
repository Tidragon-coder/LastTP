type StatCardProps = {
  number: string | number;
  title: string;
  description: string;
};

export default function StatCard({ number, title, description }: StatCardProps) {
  return (
    <div className="flex flex-col items-center text-center text-white max-w-xs">
      <span className="text-5xl font-bold text-blue-400">{number}</span>
      <h2 className="mt-2 text-2xl font-semibold">{title}</h2>
      <p className="mt-1 text-sm opacity-80">{description}</p>
    </div>
  );
}
