import { Avatar } from "../avatar";
import { HeaderSearch } from "./header-search";
import { Badge, Container, HeaderProfile, NotificationButton } from "./styles";

import profileImage from "../../../public/profile.png";
import { NotificationIcon } from "../../icons";

export function Header() {
  return (
    <Container>
      <HeaderSearch />

      <HeaderProfile>
        <NotificationButton>
          <NotificationIcon />

          <Badge>9</Badge>
        </NotificationButton>

        <Avatar src={profileImage} alt="Profile Image" />
      </HeaderProfile>
    </Container>
  );
}
