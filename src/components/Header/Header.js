import { AccessTime, HelpOutline, Search } from '@mui/icons-material';
import { HeaderContainer, HeaderLeft, HeaderAvatar, HeaderSearch, HeaderRight } from './Header.styles';

const Header = () => {

    return (
        <HeaderContainer>
            {/* header-left */}
            <HeaderLeft>
                <HeaderAvatar 
                    //Add onclick
                />
                <AccessTime />
            </HeaderLeft>

            {/* header-searchbar */}
            <HeaderSearch>
                <Search />
                <input placeholder='Search Tech Connect' />
            </HeaderSearch>

            {/* header-right */}
            <HeaderRight>
                <HelpOutline />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;
