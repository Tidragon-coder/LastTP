type FooterLinkProps = {
  text: string;
  href: string;
};

export default function FooterLink({ text, href }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      {text}
    </a>
  );
}
