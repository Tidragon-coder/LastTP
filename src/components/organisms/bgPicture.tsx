type NgPictureProps = {
  image: string;
};

export default function NgPicture({ image}: NgPictureProps) {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-6xl font-extrabold drop-shadow-lg select-none">LastRP</h1>
        <p className="mt-4 text-xl drop-shadow-md select-none">XX joueurs en ligne</p>
      </div>
    </div>
  );
}
