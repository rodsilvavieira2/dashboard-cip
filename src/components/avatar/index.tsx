import Image, { StaticImageData } from "next/image";
import { Container } from "./styles";


type AvatarProps = {
  src: string | StaticImageData;
  alt: string;
};

export function Avatar({ alt, src }: AvatarProps) {
  return (
    <Container>
      <Image src={src} alt={alt} layout="responsive" />
    </Container>
  );
}
