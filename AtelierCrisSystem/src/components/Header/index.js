import { Container, TitleContainer, Icon } from './style';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <Container>
            <h1>header</h1>
                {/* <Link to="/"><Icon src='../../assets/header.png'/></Link> */}
        </Container>
    )
}

export default Header;