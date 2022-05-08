import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;

  height: 100vh;
  width: 100vw;
`;

export const HomeMain = styled.main`
  max-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;

  flex: 1;

  padding: 0 2.25rem;
`;

export const HomeCardWrapper = styled.div`
  display: flex;
  align-items: center;

  > div + div {
    margin-left: 1.875rem;
  }
`;
