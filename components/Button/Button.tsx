import React from "react";
import styled from "styled-components";

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <StyledButton {...props}>
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </StyledButton>
  );
};

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  variant?: "stroke" | "colored" | "bright" | "simple";
  level?: "small" | "medium" | "large";
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`;
