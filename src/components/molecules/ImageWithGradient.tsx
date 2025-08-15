

interface ImageWithGradientProps {
  image: string;
  gradientColor?: string; // ex: "from-blue-600"
}

export default function ImageWithGradient({
  image,
  gradientColor = "from-blue-600",
}: ImageWithGradientProps) {
  return (
    <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b ${gradientColor} to-transparent opacity-60`}
      ></div>
    </div>
  );
}
