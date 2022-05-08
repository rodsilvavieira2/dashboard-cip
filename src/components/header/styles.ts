import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 5.9375rem;

  flex-shrink: 0;
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 1.4375rem;
  }
`;

export const NotificationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  appearance: none;
  background-color: transparent;
  border: 0;
`;

export const Badge = styled.span`
  position: absolute;

  top: -4px;
  right: -6px;

  background: ${(props) => props.theme.brand};

  height: 1rem;
  width: 1rem;


  border: 2px solid ${(props) => props.theme.background};
  border-radius: 1rem;

  color: ${(props) => props.theme.primary};

  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.75rem;
  letter-spacing: 0.0125rem;
`;
