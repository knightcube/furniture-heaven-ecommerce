import HeaderNav from "../components/HeaderNav";
import "../styles/LandingPage.css";
import HeroComponent from "../components/HeroComponent";
import { Stack } from "@mui/material";
import FooterComponent from "../components/FooterComponent";
import MiniatureSection from "../components/MiniatureSection";

const LandingPage = () => {
  return (
    <Stack gap={10}>
      <div className="hero-section">
        <HeaderNav></HeaderNav>
        <HeroComponent />
      </div>
      <MiniatureSection />
      <FooterComponent />
    </Stack>
  );
};

export default LandingPage;
