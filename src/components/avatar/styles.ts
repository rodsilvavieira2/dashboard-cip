import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  height: 46px;
  width: 46px;

  border-radius: 46px;

  overflow: hidden;

  border: 3px solid ${(props) => props.theme.neutralDivider};
`;
