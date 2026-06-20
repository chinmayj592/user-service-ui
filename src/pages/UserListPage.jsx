import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api/userApi";
import { maskAadhaar, maskPan } from "../utils/maskUtils";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import "../styles/UserList.css";

export default function UserListPage() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await getUsers(page, 5);
            setUsers(response.data.content || []);
            setTotalPages(response.data.totalPages || 0);
        } catch (error) {
            console.error("Error fetching users:", error);
            setUsers([]);
            setTotalPages(0);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [page]);

    const handleDelete = (id, userName) => {
        if (window.confirm(`Are you sure you want to delete ${userName}?`)) {
            deleteUser(id)
                .then(() => {
                    alert("✅ User deleted successfully");
                    fetchUsers();
                })
                .catch(err => alert("Error: " + (err || "Failed to delete")));
        }
    };

    if (loading) {
        return (
            <div className="page">
                <div className="header-section">
                    <h1>👥 User Management</h1>
                    <button onClick={() => navigate("/create")}>✨ Create New User</button>
                </div>
                <p style={{ textAlign: "center", fontSize: "18px", color: "var(--text)", paddingTop: "40px" }}>⏳ Loading users...</p>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="header-section">
                <h1>👥 User Management</h1>
                <button onClick={() => navigate("/create")}>✨ Create New User</button>
            </div>

            {users.length > 0 ? (
                <div className="table-card">
                    <table>
                        <thead>
                        <tr>
                            <th>👤 Name</th>
                            <th>✉️ Email</th>
                            <th>🔐 Aadhaar</th>
                            <th>📋 PAN</th>
                            <th>⚙️ Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{maskAadhaar(user.aadhaar)}</td>
                                <td>{maskPan(user.pan)}</td>
                                <td>
                                    <div className="action-buttons">
                                        <button
                                            className="edit"
                                            onClick={() => navigate(`/edit/${user.id}`, { state: user })}
                                        >
                                            ✏️ Edit
                                        </button>
                                        <button
                                            className="delete"
                                            onClick={() => handleDelete(user.id, user.name)}
                                        >
                                            🗑️ Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="table-card">
                    <div className="no-data">
                        <p>📭 No users found. Create one to get started!</p>
                        <button onClick={() => navigate("/create")} style={{ marginTop: "16px" }}>
                            ✨ Create First User
                        </button>
                    </div>
                </div>
            )}

            {totalPages > 1 && (
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    isFirst={page === 0}
                    isLast={page === totalPages - 1}
                    onPageChange={setPage}
                />
            )}
        </div>
    );
}

