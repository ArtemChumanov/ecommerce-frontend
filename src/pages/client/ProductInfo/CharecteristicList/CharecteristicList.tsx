import React from "react";
import styled from "styled-components/macro";

const CharecteristicList = () => {
  return (
    <div>
      <h2>{"Характеристики Iphone 12 SE Dual Sim "}</h2>
      <CharecteristicListSlyle>
        <LiItem>
          <Key>Габариты(ШхГхВ)</Key>
          <Value>28х28х47 см</Value>
        </LiItem>
        <LiItem>
          <Key>(ШхГхВ)</Key>
          <Value>28х28х47 см</Value>
        </LiItem>
        <LiItem>
          <Key>(ШхГхВ)</Key>
          <Value>28х28х47 см</Value>
        </LiItem>
        <LiItem>
          <Key>(ШхГхВ)</Key>
          <Value>28х28х47 см</Value>
        </LiItem>
        <LiItem>
          <Key>(ШхГхВ)</Key>
          <Value>28х28х47 см</Value>
        </LiItem>
        <LiItem>
          <Key>(ШхГхВ)</Key>
          <Value>28х28х47 см</Value>
        </LiItem>
        <LiItem>
          <Key>(ШхГхВ)</Key>
          <Value>28х28х47 см</Value>
        </LiItem>
        <LiItem>
          <Key>(ШхГхВ)</Key>
          <Value>28х28х47 см</Value>
        </LiItem>
        <LiItem>
          <Key>(ШхГхВ)</Key>
          <Value>28х28х47 см</Value>
        </LiItem>
        <LiItem>
          <Key>Size</Key>
          <Value>12</Value>
        </LiItem>
      </CharecteristicListSlyle>
      <p>
        * Внимание! Все ноутбуки имеют кириллические буквы на клавиатуре и
        сопровождаются официальной гарантией от производителя! Перед установкой
        программного обеспечения просьба проверить совместимость с устройством,
        указанные на упаковке, документации или на веб
        <br />* Характеристики и комплектация товара могут изменяться
        производителем без уведомления.
        <br /> * Обзор подготовлен на базе одной из моделей серии. Точные
        спецификации смотрите во вкладке "Характеристики".
      </p>
    </div>
  );
};

export default CharecteristicList;
const CharecteristicListSlyle = styled.ul`
  display: inline-block;
  margin: 0 auto 40px;
  padding: 0;
  width: 90%;
`;
const LiItem = styled.li`
  display: block;
  letter-spacing: -1ex;
  margin: 15px auto;
`;
const Key = styled.div`
  margin-right: 0%;
  width: 80%;
  vertical-align: top;
  overflow: hidden;
  display: inline-block;
  letter-spacing: normal;

  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    margin: 0 -99% 0 3px;
    vertical-align: baseline;
    border-bottom: 1px dashed #888;
  }
`;
const Value = styled.div`
  display: inline-block;
  letter-spacing: normal;
  //padding-left: 3px;
  //margin-left: 10px;
  width: 20%;
  vertical-align: bottom;
`;
