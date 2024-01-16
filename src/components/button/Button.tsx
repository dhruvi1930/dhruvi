import { useCallback } from "react";
import { MainButton } from "./styled";
import { ButtonProps } from "./types";

/**
 *
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 *
 * ```tsx
 * <Button
 * text="Contact",
 *href="www.w3school.com"
 * />
 */
const Button = ({ text, callback }: ButtonProps): JSX.Element => {
  const handleClick = useCallback(() => {
    if (callback) {
      // eslint-disable-next-line callback-return
      callback();
    }
  }, [callback]);

  return <MainButton onClick={() => handleClick()}>{text}</MainButton>;
};

export default Button;
