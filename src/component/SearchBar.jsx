import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { useHistory, withRouter } from "react-router-dom";

export default function SearchBar() {
  const Container = styled.div``;
  const SearchInputs = styled.div`
    display: flex;
    border: 2px solid #faf4e4;

    border-radius: 10px;
    padding: 0.25rem;
  `;
  const SearchInput = styled.input`
    border: 0;
    font-size: 1rem;
    outline: none;

    background-color: transparent;
    text-overflow: ellipsis;
    max-width: 35rem;
    color: #faf4e4;

    ::placeholder {
      color: #faf4e4;
    }
  `;
  const Icon = styled.div`
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `;
  return (
    <Container id={"SearchBar"}>
      <SearchInputs>
        <SearchInput type="text" />
        <Icon>{<MdClear value="" />}</Icon>
        <Icon title={"search"}>
          <FaSearch />
        </Icon>
      </SearchInputs>
    </Container>
  );
}
