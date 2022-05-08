import styled, { css } from "styled-components";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 1.25rem;
  background-color: ${(props) => props.theme.primary};

  margin-top: 1.8125rem;
`;

export const Tittle = styled.h1`
  display: flex;
  align-items: center;

  font-weight: 700;

  font-size: 1.25rem;
  line-height: 1.625rem;
  letter-spacing: 0.0125rem;

  text-align: left;

  height: 4.25rem;

  padding: 0 1.5rem;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  height: 3.5rem;

  background-color: ${(props) => props.theme.tableRowBg};

  th {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.0063rem;

    color: ${(props) => props.theme.text.primary};

    text-align: left;
    padding-left: 25px;
  }
`;

export const TableBody = styled.tbody`
  td {
    padding: 1.125rem 0;
    padding-left: 1.5625rem;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.0063rem;

    border-top: 1px solid;
    border-bottom: 1px solid;

    border-color: ${(props) => props.theme.neutralDivider};
  }
`;

export const ShowQuantityButton = styled.button`
  border: 0;
  background-color: transparent;
  appearance: none;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.0063rem;

  background: linear-gradient(90deg, #3374ab 0%, #5ab1f3 59.9%, #6bd8fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ActionButton = styled.button`
  font-weight: 700;
  font-size: 0.5042rem;
  line-height: 1.6875rem;

  text-transform: uppercase;

  border: 0;

  border-radius: 0.1833rem;
  height: 2.0625rem;
  min-width: 8.7081rem;

  padding: 0 13px;

  background: ${(props) => props.theme.brand};
  color: ${(props) => props.theme.primary};
`;

export const TablePagination = styled.div`
  display: flex;
  align-items: center;
  height: 4.875rem;

  padding: 0 1.5rem;

  button + button {
    margin-left: 0.25rem;
  }
`;

type PaginationButtonProps = {
  isCurrentPage?: boolean;
};

export const PaginationButton = styled.button<PaginationButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;
  background-color: ${(props) => props.theme.primary};

  border: 1px solid ${(props) => props.theme.neutralDivider};
  border-radius: 0.25rem;

  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1rem;
  letter-spacing: 0.0063rem;

  ${(props) => {
    if (props.isCurrentPage) {
      return css`
        background: ${props.theme.brand};
        color: ${props.theme.primary};
      `;
    }

    return "";
  }}

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;

export const ArrowRightIcon = styled(MdOutlineKeyboardArrowRight)`
  fill: ${(props) => props.theme.text.primary};
  font-size: 1rem;
`;

export const ArrowLeftIcon = styled(MdOutlineKeyboardArrowLeft)`
  fill: ${(props) => props.theme.text.primary};
  font-size: 1rem;
`;
