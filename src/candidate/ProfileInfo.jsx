import { useOutletContext } from "react-router-dom";
import ProfileForm from "./profile/ProfileForm";

function ProfileInfo() {
    const { user, setUser } = useOutletContext();
    const token = localStorage.getItem("auth_token");

    const handleProfileUpdate = () => {
        // Refresh profile data after update
        window.dispatchEvent(new Event("authChange"));
    };

    return (
        <ProfileForm 
            userId={token} 
            userData={user} 
            onUpdate={handleProfileUpdate}
            onUserUpdate={setUser}
        />
    );
}

export default ProfileInfo;