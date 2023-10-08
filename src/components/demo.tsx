import { TheMonorepoButton } from "./button";
import { TheMonorepoButtonStyled } from "./button-styled";
import { TheMonorepoImg } from "./img";
import { TheMonorepoLabel } from "./label";
import { TheMonorepoSvg } from "./svg";
import { TheMonorepoSvgr } from "./svgr";

export function TheMonorepoDemo() {
  return (
    <div>
      <TheMonorepoButton />
      <br />
      <TheMonorepoLabel />
      <br />
      <TheMonorepoImg />
      <br />
      <TheMonorepoSvg />
      <br />
      <TheMonorepoSvgr />
      <br />
      <TheMonorepoButtonStyled />
    </div>
  );
}
