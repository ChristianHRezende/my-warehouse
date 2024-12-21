import { Typography } from "../../../../@shared/components/dataDisplay/Typography";
import { Button } from "../../../../@shared/components";
import { FaArrowRight } from 'react-icons/fa';
import * as S from "./sign.styles"


const SignIn = () => {
    return (
        <S.Container>
            <S.LeftContainer>
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
                    <FaArrowRight style={{ marginLeft: '0px' }} />
                </Button>
            </S.LeftContainer>
            <S.RightContainer>
                <Button variant="secondary">
                    <Typography variant="text_button">
                        Login
                    </Typography>
                </Button>
            </S.RightContainer>
        </S.Container>
    )
}

export default SignIn