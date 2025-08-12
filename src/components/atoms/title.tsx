type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return (
    <h2 className="text-white text-4xl font-bold text-center border-b-4 border-white inline-block pb-2">
      {text}
    </h2>
  );
}
