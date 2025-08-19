type TitlePartProps = {
  text: string;
  id?: string; // pour ancrage scroll
};

export default function TitlePart({ text, id }: TitlePartProps) {
  return (
    <h2
      id={id}
      className="text-3xl font-bebas mt-12 mb-4 border-b border-gray-700 pb-2"
    >
      {text}
    </h2>
  );
}
