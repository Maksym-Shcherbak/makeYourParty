import { useMediaQuery } from "react-responsive";
import FooterMob from "./FooterMob/FooterMob";
import FooterTab from "./FooterTab/FooterTab";
import FooterDesc from "./FooterDesc/FooterDesc";

const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  return (
    <>
      {isMobile && <FooterMob />}
      {isTablet && <FooterTab />}
      {isDesktop && <FooterDesc />}
    </>
  );
};

export default Footer;
