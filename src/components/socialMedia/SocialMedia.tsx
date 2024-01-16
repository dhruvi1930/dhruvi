import {
  HorizontalMediaContainer,
  MediaImage,
  MediaLink,
  VerticalMediaContainer,
} from "./styled";
import { SocialMediaProps } from "./types";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import gmail from "../../assets/email.png";

/**
 *
 * @param {SocialMediaProps} props
 * @returns {JSX.Element}
 *
 * ```tsx
 * <SocialMedia
 * isRotation={false},
 * width=45
 * height=45
 * />
 */
const SocialMedia = ({
  isRotation,
  width,
  height,
}: SocialMediaProps): JSX.Element => {
  return isRotation ? (
    <VerticalMediaContainer>
      <MediaLink href="http://github.com/dhruvi1930" target="_blank">
        <MediaImage src={github} width={width} height={height} />
      </MediaLink>
      <MediaLink
        href="https://www.linkedin.com/in/dhruvi-lad-b645771a2/"
        target="_blank"
      >
        <MediaImage src={linkedIn} width={width} height={height} />
      </MediaLink>
      <MediaLink href="mailto:dhruvihl369@gmail.com" target="_blank">
        <MediaImage src={gmail} width={width} height={height} />
      </MediaLink>
    </VerticalMediaContainer>
  ) : (
    <HorizontalMediaContainer>
      <MediaLink href="http://github.com/dhruvi1930" target="_blank">
        <MediaImage src={github} width={width} height={height} />
      </MediaLink>
      <MediaLink
        href="https://www.linkedin.com/in/dhruvi-lad-b645771a2/"
        target="_blank"
      >
        <MediaImage src={linkedIn} width={width} height={height} />
      </MediaLink>
      <MediaLink href="mailto:dhruvihl369@gmail.com" target="_blank">
        <MediaImage src={gmail} width={width} height={height} />
      </MediaLink>
    </HorizontalMediaContainer>
  );
};

export default SocialMedia;
