import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.primary};

  height: 5.5rem;
  width: 100%;
  max-width: 15.9375rem;

  box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
  border-radius: 8px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;

  margin-left: 1.5rem;
`;

export const CardInfoLabel = styled.h3`
  font-weight: 700;

  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.0063rem;

  margin-bottom: 0.25rem;
`;

export const CardInfoAmount = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: 0.0063rem;

  background: linear-gradient(90deg, #3374ab 0%, #5ab1f3 59.9%, #6bd8fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const CardIconWrapper = styled.div`
  position: relative;
  overflow: hidden;

  height: 2.5rem;
  width: 2.5rem;
`;
