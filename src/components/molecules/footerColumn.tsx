import FooterLink from "../atoms/footerLink";

type FooterColumnProps = {
  title: string;
  links: { text: string; href: string }[];
};

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link, index) => (
          <li key={index}>
            <FooterLink text={link.text} href={link.href} />
          </li>
        ))}
      </ul>
    </div>
  );
}
