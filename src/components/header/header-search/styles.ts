import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  align-items: center;

  height: 2.5rem;

  width: 100%;
  max-width: 21.875rem;

  border-radius: 6.25rem;

  background-color: ${(props) => props.theme.primary};

  padding: 0 1rem;
`;

export const Input = styled.input`
  appearance: none;
  width: 100%;

  background-color: transparent;

  color: ${(props) => props.theme.text.primary};
  font-family: inherit;

  border: 0;
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1rem;
  letter-spacing: 0.0063rem;

  margin-left: 0.75rem;

  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.neutralGray};
  }
`;
