type LogoProps = {
  src: string;
  alt?: string;
};

export default function Logo({ src, alt = 'Server Logo' }: LogoProps) {
  return (
    <img src={src} alt={alt} className="h-20 w-auto" />
  );
}
