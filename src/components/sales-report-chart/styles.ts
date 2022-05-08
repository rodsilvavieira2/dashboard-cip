import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2.25rem;
  background-color: ${(props) => props.theme.primary};

  box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
  border-radius: 0.5rem;

  height: 373px;

  padding: 13px 19px;

  flex-shrink: 0;
`;
