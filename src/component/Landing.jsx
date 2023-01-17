import React from "react";
import styled, { css } from "styled-components";
import { FaUserSecret } from "react-icons/fa";
import { DivFlexCenter } from "../globals/styles";
import { GoMarkGithub as GithubIcon } from "react-icons/go";
import SearchBar from "./SearchBar";

export default function Landing() {
  const Container = styled.section`
    background-color: #282c34;
    color: #faf4e4;
  `;

  const Wrapper = styled(DivFlexCenter)`
    height: 100vh;
    flex-direction: column;
    gap: 1rem;
  `;

  const SecretLI = styled.a`
    ${({ theme }) => css`
      color: ${theme.colors.secondary};
      font-size: 2rem;
      position: absolute;
      bottom: 0;
      right: 0;
      cursor: pointer;

      &:hover {
        color: ${theme.colors.primary};
      }
    `}
  `;

  return (
    <Container id="Filters">
      <Wrapper>
        <h1>
          <GithubIcon /> Github Repository Search
        </h1>
        <SearchBar placeholder="Search..." />
      </Wrapper>
    </Container>
  );
}
