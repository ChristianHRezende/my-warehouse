import "./App.css";
import { Typography } from "./@shared/components/dataDisplay/Typography";
import { Button } from "./@shared/components";
import { FaArrowRight } from 'react-icons/fa';

function App() {


  return (
    <>
      <div className = "container">
        <div className = "left"> 
       
          <Typography variant="title_login_bar">
            Cubix
          </Typography>
          
          <Typography variant="subtitle_login_bar">
            The most popular Warehouse System is here.
          </Typography>

          <Button variant="primary">
            <Typography variant="text_button">
              Know More
            </Typography>
            <FaArrowRight style={{ marginLeft: '0px' }}/>
          </Button>
        </div>

        <div className = "right">
          <Button variant="secondary">
              <Typography variant="text_button">
                Login
              </Typography>
             
            </Button>
        </div>
      </div>
    </>
  );
}

export default App;
