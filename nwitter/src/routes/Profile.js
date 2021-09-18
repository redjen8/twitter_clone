import { authService } from "fbase";

const Profile = () => {
    const onLogoutClick = () => authService.signOut();

    return (
        <>
        <button onClick={onLogoutClick}>Log Out</button>
        </>
    );   
};

export default Profile;