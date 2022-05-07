import { NavLink } from "./nav-link";
import { navItems } from "./sidebar.conf";
import { Brand, BrandTextPLaceholder, Container, SidebarNav } from "./styles";

export const Sidebar = () => {
  return (
    <Container>
      <Brand>
        <BrandTextPLaceholder>logo</BrandTextPLaceholder>
      </Brand>

      <SidebarNav>
        <ul>
          {navItems.map((navItem) => (
            <li key={navItem.id}>
              <NavLink {...navItem} />
            </li>
          ))}
        </ul>
      </SidebarNav>
    </Container>
  );
};
