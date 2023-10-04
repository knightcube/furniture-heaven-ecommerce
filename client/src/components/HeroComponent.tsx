import { Box, Button, Typography } from "@mui/material";
import '../styles/HeroComponent.css'
import { Link } from "react-router-dom";

const HeroComponent = () => {

  const shopBtnHandler = (e:React.MouseEvent<HTMLElement>)=>{
    e.preventDefault()

  }

  return (
    <div>
       <div className='inner-hero'>
        <Box>
          <Typography variant='h1'>Modern Furniture</Typography>
          <Typography ml={1} mb={2} display='block' variant='body1' width={'800px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
          <Box ml={1}><Button variant="contained" onClick={shopBtnHandler}><Link to='/products' style={{textDecoration:'none', color:'inherit'}}>Shop Now</Link></Button></Box>
        </Box>
      </div>
    </div>
  );
};

export default HeroComponent;
