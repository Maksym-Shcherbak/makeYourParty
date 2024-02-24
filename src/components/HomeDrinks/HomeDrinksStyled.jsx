import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeMainLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  border-radius: 42px;
  padding: 18px 44px;
  background: #f3f3f3;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: black;
  &:hover{
    background-color: inherit;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid;
    border-color: rgba(243, 243, 243, 0.5);
    color: rgba(243, 243, 243, 0.5);
  }
`;

export const HomeLinkWrap = styled.li`
  display: flex;
  justify-content: center;
`;