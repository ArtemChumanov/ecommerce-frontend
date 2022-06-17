import React, { FC, useState } from "react";
import styled from "styled-components/macro";
import { Link, useHistory } from "react-router-dom";
import { CategoryType } from "../../../types/types";

interface CategoryBarProps {
  categories: CategoryType[];
}

const DropDownList = ({ subcategory }) => {
  return (
    <NavbarDropdownContent>
      <ul>
        {subcategory.map((s) => (
          <li>
            <a href="#">{s.name}</a>
          </li>
        ))}
      </ul>
    </NavbarDropdownContent>
  );
};

const CategoryBar: FC<CategoryBarProps> = ({ categories }) => {
  const { push } = useHistory();
  const groupByProductHandle = (category) => {
    push(`/list/${category.categoryType}`);
  };
  return (
    <NavbarDropdown>
      {categories?.map((i) => (
        <li key={i.id}>
          {i.subcategory?.length ? (
            <span onClick={() => groupByProductHandle(i)}>{i.name}</span>
          ) : (
            <Link to={`/list/${i.categoryType}`}>{i.name}</Link>
          )}
          {i.subcategory?.length ? (
            <DropDownList subcategory={i.subcategory} />
          ) : null}
        </li>
      ))}
    </NavbarDropdown>
  );
};

export default CategoryBar;

const NavbarDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.backgrounds.lightBackgroundsSidebar};
  z-index: 1;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;

    & > li {
      display: block;
      a,
      span {
        display: block;
        color: #fff;
        font-size: 12px;
        text-decoration: none;
      }
      &:hover {
        background: #666669;
      }
    }
  }
`;
const NavbarDropdown = styled.ul`
  display: flex;
  border-top: 1px solid #4d4d4e;
  background: #2d2d2e;
  padding: 0 200px;
  margin: 0;
  list-style: none;
  position: relative;

  & > li {
    flex-grow: 1;
    a,
    span {
      display: block;
      padding: 4px 10px;
      color: #fff;
      font-size: 20px;
      text-decoration: none;
    }

    &:hover {
      background: #666669;
    }

    &:hover ${NavbarDropdownContent} {
      display: block;
    }
  }
`;
