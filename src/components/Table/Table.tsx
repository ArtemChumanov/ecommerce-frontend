import React, { FC, useEffect, useState } from "react";
import { Button, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components/macro";
import { Actions } from "../../utils/constants";

interface TableComponentProps {
  items: Array<unknown>;
  setActiveItem: ({ activeID: string, action: Actions }) => void;
}
export const createAntColumns = (item) => {
  return Object.keys(item[0]).map((it, index) => {
    return {
      title: it,
      key: index,
      dataIndex: it,
    };
  });
};

const createAntRows = (item) => {
  return item.map((row) => ({
    key: row.id,
    ...row,
  }));
};
const TableComponent: FC<TableComponentProps> = ({ items, setActiveItem }) => {
  const columns = [
    {
      title: "Actions",
      key: "action",
      fixed: "right",
      width: 210,
      render: (_, record) => (
        <>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              setActiveItem({ activeID: record.id, action: Actions.EDIT });
            }}
          />
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => {
              setActiveItem({
                activeID: record.id,
                action: Actions.DELETE,
              });
            }}
          />
        </>
      ),
    },
  ];
  const [dataSource, setDataSource] = useState([]);
  const [dataColumn, setDataColumn] = useState(columns);

  useEffect(() => {
    setDataColumn((prev: any) => [...createAntColumns(items), ...prev]);
  }, []);

  useEffect(() => {
    setDataSource(createAntRows(items));
  }, [items]);

  return (
    <TableWrapper>
      <Table
        bordered
        dataSource={dataSource}
        columns={dataColumn as any}
        size="middle"
        pagination={false}
        rowKey="index"
      />
    </TableWrapper>
  );
};

export default TableComponent;

export const TableWrapper = styled.div`
  margin: 10px 40px 0;
`;
