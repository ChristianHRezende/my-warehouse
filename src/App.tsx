import "./App.css";
import { Typography } from "./@shared/components/dataDisplay/Typography";
import { Button } from "./@shared/components";
import { FaArrowRight } from 'react-icons/fa';

function App() {


  return (
    <>
      <div className = "container">
        <div className = "left"> 
       
          <Typography variantTypography="title_login_bar">
            Cubix
          </Typography>
          
          <Typography variantTypography="subtitle_login_bar">
            The most popular Warehouse System is here.
          </Typography>

          <Button variant="primary">
            <Typography variantTypography="text_buton">
              Know More
            </Typography>
            <FaArrowRight style={{ marginLeft: '0px' }}/>
          </Button>
        </div>

        <div className = "right">
          <Button variant="secondary">
              <Typography variantTypography="text_buton">
                Login
              </Typography>
             
            </Button>
        </div>
      </div>
    </>
  );
}

export default App;
