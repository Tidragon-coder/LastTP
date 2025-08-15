type NgPictureProps = {
  image: string;
  titre: string;
  sousTitre: string;
  hSize?: string;
};

export default function NgPicture({ image, titre, sousTitre, hSize }: NgPictureProps) {
  return (
    <div
      className="relative w-screen overflow-hidden"
      style={{ height: hSize ?? '85vh' }}
    >
      <img
        src={image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        style={{ transform: 'scale(1.05)' }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-30" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-6xl font-bebas drop-shadow-lg select-none">{titre}</h1>
        <p className="mt-4 text-xl drop-shadow-md select-none">{sousTitre}</p>
      </div>
    </div>
  );
}

