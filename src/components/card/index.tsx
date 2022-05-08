import Image, { StaticImageData } from "next/image";
import { transformToCurrency } from "../../helpes";
import {
  CardInfo,
  Container,
  CardInfoAmount,
  CardInfoLabel,
  CardIconWrapper,
} from "./styles";

type CardType = "number" | "currency";

export type CardProps = {
  iconUrl: string | StaticImageData;
  label: string;
  amount: number;
  type: CardType;
};



export function Card({ amount, iconUrl, label, type }: CardProps) {
  return (
    <Container>
      <CardIconWrapper>
        <Image src={iconUrl} alt={label} layout="responsive" />
      </CardIconWrapper>

      <CardInfo>
        <CardInfoLabel>{label}</CardInfoLabel>

        <CardInfoAmount>
          {type === "number" ? amount : transformToCurrency(amount, 4)}
        </CardInfoAmount>
      </CardInfo>
    </Container>
  );
}
