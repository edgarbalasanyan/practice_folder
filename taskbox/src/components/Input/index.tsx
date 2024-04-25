import React, { HTMLAttributes } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

type Props = {
  className?: string;
  variant: "standart" | "filled" | "outlined";
  type: "text" | "password" | "email";
  disabled?: boolean;
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  fullwidth?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
};

export const Input = ({
  className = "",
  variant = "outlined",
  type = "text",
  color = "primary",
  disabled = false,
  fullwidth = false,
  startIcon,
  endIcon,
}: Props) => {
  console.log("endicon", endIcon);
  return (
    <div className={classNames(styles.wrapper, fullwidth && styles.fullWidth)}>
      <i className={styles.startIcon}>{startIcon}</i>
      <input
        disabled={disabled}
        type={type}
        color={color}
        className={classNames(
          className,
          styles.input,
          styles[variant],
          styles[color],
          startIcon && styles.withStartIcon,
          endIcon && styles.withEndIcon,
          disabled && styles.disabled
        )}
      />
      <i className={styles.endIcon}>{endIcon}</i>
    </div>
  );
};
