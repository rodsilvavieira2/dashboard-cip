import Link from "next/link";
import { Container } from "./styles";

type NavLinkProps = {
  link: string;
  label: string;
  icon: React.ReactNode;
};

export function NavLink({ icon, label, link }: NavLinkProps) {
  return (
    <Link href={link}>
      <Container>
        {icon} <span>{label}</span>
      </Container>
    </Link>
  );
}
