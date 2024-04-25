import React, { MouseEventHandler } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
type Props = {
  className?: string;
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  isLoading: boolean;
};
export const Button = ({
  size = "md",
  children,
  onClick,
  disabled,
  variant = "contained",
  isLoading = false,
  color = "primary",
  className = "",
  startIcon,
  endIcon,
}: Props) => {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        className={classNames(
          className,
          styles[size],
          disabled ? styles["disabled-button"] : styles[variant],
          styles[color],
          styles["common-button"]
        )}
      >
        <div className={startIcon && styles["icon"]}>{startIcon}</div>

        {(isLoading && (
          <i
            className={`fa-duotone fa-loader fa-spin-pulse ${styles.loading}`}
          ></i>
        )) ||
          children}
        <div className={classNames(endIcon && styles["icon"])}>{endIcon}</div>
      </button>
    </div>
  );
};
