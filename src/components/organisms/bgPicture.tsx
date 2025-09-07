type NgPictureProps = {
  image: string;
  titre: string;
  sousTitre?: string;
  hSize?: string;
  home?: boolean;
};

export default function NgPicture({ image, titre, sousTitre, hSize, home }: NgPictureProps) {
  return (
    <div
      className="relative w-screen overflow-hidden"
      style={{ height: hSize ?? "85vh" }}
    >
      <img
        src={image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-105"
      />

      <div className="absolute inset-0 bg-gray-950 bg-opacity-30" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
        
        <h1
          className={`${
            home ? "text-8xl" : "text-6xl"
          } font-bebas drop-shadow-lg select-none tracking-wide animate-fadeSlide mt-10`}
        >
          {titre}
        </h1>
        {home ? (
          <div
            className="mt-4 flex items-center gap-2 bg-gray-800/70 px-4 py-2 rounded-lg text-lg drop-shadow-md select-none opacity-0 animate-fadeSlide delay-300"
          >
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span>{sousTitre}</span>
          </div>
        ) : (
          <p
            className="mt-4 text-xl drop-shadow-md select-none opacity-0 animate-fadeSlide delay-300"
          >
            {sousTitre}
          </p>
        )}
      </div>
    </div>
  );
}
