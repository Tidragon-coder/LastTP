type LogoProps = {
  src: string;
  alt?: string;
};

export default function Logo({ src, alt = 'Server Logo' }: LogoProps) {
  return (
    <img src={src} alt={alt} className="h-10 w-auto" />
  );
}
