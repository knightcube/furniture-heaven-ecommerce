import React, { Suspense } from "react";
import HeaderNav from "../components/HeaderNav";
import "../styles/LandingPage.css";
import HeroComponent from "../components/HeroComponent";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import room from "../assets/room_miniature_1.png";
import MiniatureModel from "../components/MiniatureModel";
import { Canvas } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import FooterComponent from '../components/FooterComponent'

const MiniatureSection = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
    >
      <Box>
        <Typography variant="h1">3D Miniatures</Typography>
        <Typography
          ml={1}
          mb={2}
          display="block"
          variant="body1"
          width={"800px"}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Box ml={1}>
          <Button variant="contained">
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              View More
            </Link>
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "30%", height: "500px"}}>
       
        {/* <img src={room} alt="" width={"500px"} /> */}
        <Canvas>
          <Suspense
            fallback={null}
            style={{
              backgroundColor: "#111a21",
            }}
          >
            <ambientLight intensity={1.75} />
            <MiniatureModel scale={2} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minAzimuthAngle={-Math.PI / 2}
              maxAzimuthAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI - Math.PI / 6}
            />
          </Suspense>
        </Canvas>
      </Box>
    </Stack>
  );
};

const LandingPage = () => {
  return (
    <Stack gap={10} >
      <div className="hero-section">
        <HeaderNav></HeaderNav>
        <HeroComponent />
      </div>
      <MiniatureSection />
      <FooterComponent/>
    </Stack>
  );
};

export default LandingPage;
