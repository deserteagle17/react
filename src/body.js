import React from "react";
import Product from "./product.js";
import prodet from "./prodet.js";
import Row from "react-bootstrap/Row";

export default function Body() {
  const productcomponent = prodet.map((prodet) => (
    <Product
      key={prodet.id}
      img={prodet.img}
      name={prodet.name}
      detail={prodet.det}
    />
  ));

  const style = {
    padding: "1.5em",
  };

  return <Row style={style}>{productcomponent}</Row>;
}
