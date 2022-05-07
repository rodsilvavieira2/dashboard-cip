import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;
  
  text-align: left;
  font-size: 1.2446rem;
  line-height: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.0089rem;

  color: ${(props) => props.theme.text.secondary};

  > span {
    margin-left: 1.0688rem;
  }
`;
