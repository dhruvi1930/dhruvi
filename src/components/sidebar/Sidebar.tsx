import SocialMedia from "../socialMedia/SocialMedia";
import { Text, VerticalLine } from "./styled";

/**
 *
 * @param {} props
 * @returns {JSX.Element}
 *
 * ```tsx
 * <Sidebar/>
 */
const Sidebar = (): JSX.Element => {
  return (
    <>
      <SocialMedia isRotation={true} width={35} height={35} />
      <VerticalLine />
      <Text>Follow Me</Text>
    </>
  );
};

export default Sidebar;
