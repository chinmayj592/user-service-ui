import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="page" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ textAlign: "center", paddingTop: "60px" }}>
                <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>👥 User Management System</h1>
                <p style={{ fontSize: "18px", color: "var(--text)", marginBottom: "40px" }}>
                    Manage users efficiently with our modern interface
                </p>

                <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                    <button
                        onClick={() => navigate("/users")}
                        style={{
                            padding: "16px 32px",
                            fontSize: "18px",
                            background: "linear-gradient(135deg, var(--accent) 0%, #5558e3 100%)",
                        }}
                    >
                        👥 View All Users
                    </button>
                    <button
                        onClick={() => navigate("/create")}
                        style={{
                            padding: "16px 32px",
                            fontSize: "18px",
                            background: "linear-gradient(135deg, var(--success) 0%, #059669 100%)",
                        }}
                    >
                        ➕ Create New User
                    </button>
                </div>
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "24px",
                marginTop: "40px"
            }}>
                <div style={{
                    background: "var(--surface)",
                    border: "2px solid var(--border)",
                    borderRadius: "16px",
                    padding: "24px",
                    textAlign: "center"
                }}>
                    <h3 style={{ color: "var(--accent)" }}>📋 View Users</h3>
                    <p style={{ color: "var(--text)", marginBottom: "16px" }}>
                        Browse all users in your database with detailed information
                    </p>
                    <button
                        onClick={() => navigate("/users")}
                        style={{
                            padding: "10px 20px",
                            fontSize: "14px",
                            background: "linear-gradient(135deg, var(--info) 0%, #2563eb 100%)",
                        }}
                    >
                        View Users
                    </button>
                </div>

                <div style={{
                    background: "var(--surface)",
                    border: "2px solid var(--border)",
                    borderRadius: "16px",
                    padding: "24px",
                    textAlign: "center"
                }}>
                    <h3 style={{ color: "var(--accent-2)" }}>➕ Add User</h3>
                    <p style={{ color: "var(--text)", marginBottom: "16px" }}>
                        Create new users with complete profile information
                    </p>
                    <button
                        onClick={() => navigate("/create")}
                        style={{
                            padding: "10px 20px",
                            fontSize: "14px",
                            background: "linear-gradient(135deg, var(--success) 0%, #059669 100%)",
                        }}
                    >
                        Create User
                    </button>
                </div>

                <div style={{
                    background: "var(--surface)",
                    border: "2px solid var(--border)",
                    borderRadius: "16px",
                    padding: "24px",
                    textAlign: "center"
                }}>
                    <h3 style={{ color: "var(--accent-3)" }}>✏️ Edit User</h3>
                    <p style={{ color: "var(--text)", marginBottom: "16px" }}>
                        Modify user information from the users list
                    </p>
                    <button
                        onClick={() => navigate("/users")}
                        style={{
                            padding: "10px 20px",
                            fontSize: "14px",
                            background: "linear-gradient(135deg, var(--warning) 0%, #f59e0b 100%)",
                        }}
                    >
                        Go to Users
                    </button>
                </div>
            </div>
        </div>
    );
}

