import { useState } from "react";
import { Button, List, Avatar } from "antd";
import IProduct from "../Library/interfaces/IProduct";
import { products } from "../Library/helpers/data";

const ProductList = () => {
  const [list, setList] = useState<IProduct[]>(products);

  function handleDelete(id: string) {
    setList(list.filter((x) => x.id !== id));
  }

  return (
    <List
      dataSource={list}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={
              <Avatar
                style={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                }}
              >
                {item.productType[0]}
              </Avatar>
            }
            title={item.id + " - " + item.productName}
            description={"Sold at: " + item.soldAt.toDateString()}
          />
          <Button danger onClick={() => handleDelete(item.id)}>
            Delete{" "}
          </Button>
        </List.Item>
      )}
    />
  );
};
export default ProductList;
