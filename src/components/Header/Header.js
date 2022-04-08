import { AccessTime, HelpOutline, Search } from '@mui/icons-material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { HeaderContainer, HeaderLeft, HeaderAvatar, HeaderSearch, HeaderRight } from './Header.styles';
import { auth } from "../../firebase";

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <HeaderContainer>
            {/* header-left */}
            <HeaderLeft>
                <HeaderAvatar 
                    onClick={() => auth.signOut()}
                    src={user?.photoURL}
                    alt={user?.displayName}
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
