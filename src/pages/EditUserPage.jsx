
import { useLocation, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { updateUser } from "../api/userApi";
import "../styles/CreateUser.css";

export default function EditUserPage() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) return <div className="page"><p>❌ No user data available</p></div>;

    const handleUpdate = data =>
        updateUser(state.id, data).then(() => {
            navigate("/");
        });

    return (
        <div className="page">
            <h1>✏️ Edit User Profile</h1>
            <UserForm initialData={state} onSubmit={handleUpdate} isEdit={true} />
        </div>
    );
}



