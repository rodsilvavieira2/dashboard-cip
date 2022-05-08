import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 16rem;

  box-shadow: ${(props) => props.theme.shadows.base};

  background-color: ${(props) => props.theme.primary};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 11.875rem;
`;

export const BrandTextPLaceholder = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 3.1819rem;
  line-height: 1.75rem;
  text-transform: uppercase;
`;

export const SidebarNav = styled.nav`
  padding: 0 2.2225rem;

  ul {
    li + li {
      margin-top: 40px;
    }

    li:first-child {
      a {
        background: linear-gradient(
          90deg,
          #3374ab 0%,
          #5ab1f3 59.9%,
          #6bd8fe 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }
`;
