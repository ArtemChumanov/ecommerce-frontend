import React from "react";
import styled from "styled-components/macro";

const List = ({ item, title, onClick }) => {
  return (
    <ListStyle>
      <h2>{title}</h2>
      <ul>
        {item.slice(0, 5).map((i) => (
          <li key={i} onClick={onClick}>
            {<a href={"#"}>{i.name}</a>}
          </li>
        ))}
      </ul>
    </ListStyle>
  );
};

export default List;

const ListStyle = styled.div`
  h2 {
    color: #f7941d;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 22px;
    margin-bottom: 10px;
  }
  ul {
    padding: 0px 0 0 4px;
    margin: 0;
    display: block;
    list-style-type: none;
    li {
      font-weight: 500;
      padding: 18px 10px;
      border-bottom: 1px solid #2e2e2e;
      color: #898989;
      a {
        color: inherit;
        text-align: left;
        text-transform: uppercase;
        font-size: 1rem;
      }
      &:hover {
        background: black;
        color: white;
      }
    }
  }
`;
