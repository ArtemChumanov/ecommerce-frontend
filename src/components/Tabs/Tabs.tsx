import React from "react";
import styled from "styled-components/macro";
const TabContent = ({ children }) => (
  <TabContentStyle>
    <p>{children}</p>
  </TabContentStyle>
);
const Tabs = ({ items, children }) => {
  const [active, setActive] = React.useState(0);

  const openTab = (e) => setActive(+e.target.dataset.index);

  return (
    <div>
      <TabStyle>
        {items.map((n, i) => (
          <button
            className={`tablinks ${i === active ? "active" : ""}`}
            onClick={openTab}
            data-index={i}
          >
            {n.title}
          </button>
        ))}
      </TabStyle>
      <TabContent children={children[active]} />
    </div>
  );
};

export default Tabs;
export const TabStyle = styled.div`
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #2d2d2e;

  button {
    color: white;
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 30px;
    transition: 0.3s;
    font-size: 17px;
  }
  button:hover {
    color: #f7941d;
  }
  button.active {
    transition: 1s;
    color: #f7941d;
  }
`;
const TabContentStyle = styled.div`
  padding: 50px 80px 20px;
  border: 1px solid #ccc;
  border-top: none;
`;
