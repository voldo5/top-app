import React from "react";
import { Button, Htag, Paragraph, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <Paragraph fontSize="l">Большой</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph fontSize="s">Маленький</Paragraph>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag color="primary">Green</Tag>
    </>
  );
}
