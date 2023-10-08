import { useState } from "react";
import styled from "styled-components";

interface ButtonProps {
  text?: string;
}

export function TheMonorepoButtonStyled(props: ButtonProps) {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={() => setCount(count + 1)}>
      {count} {props.text ? props.text : "Clicks"}
    </Button>
  );
}

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: 0;
`;
