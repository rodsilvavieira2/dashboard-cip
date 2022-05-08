import { SearchIcon } from "../../../icons";
import { Container, Input } from "./styles";

export function HeaderSearch() {
  return (
    <Container>
      <SearchIcon /> <Input placeholder="Pesquisar" />
    </Container>
  );
}
