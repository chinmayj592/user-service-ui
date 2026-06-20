import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    name: "",
    email: "",
    primaryMobile: "",
    secondaryMobile: "",
    aadhaar: "",
    pan: "",
    dateOfBirth: "",
    placeOfBirth: "",
    currentAddress: "",
    permanentAddress: "",
};

const fieldLabels = {
    name: "Full Name",
    email: "Email Address",
    primaryMobile: "Primary Mobile",
    secondaryMobile: "Secondary Mobile",
    aadhaar: "Aadhaar Number",
    pan: "PAN Number",
    dateOfBirth: "Date of Birth",
    placeOfBirth: "Place of Birth",
    currentAddress: "Current Address",
    permanentAddress: "Permanent Address",
};

export default function UserForm({ onSubmit, initialData = {}, isEdit = false }) {
    const [form, setForm] = useState({ ...initialState, ...initialData });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = e =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await onSubmit(form);
        } catch (err) {
            setError(err.message || "Failed to submit form");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card" style={{ maxWidth: "800px" }}>
            <h2>👤 Personal Information</h2>
            <div className="grid">
                {["name", "email", "primaryMobile", "secondaryMobile", "aadhaar", "pan", "dateOfBirth", "placeOfBirth"].map(field => (
                    <input
                        key={field}
                        name={field}
                        placeholder={fieldLabels[field]}
                        value={form[field]}
                        onChange={handleChange}
                        required={[
                            "name",
                            "email",
                            "primaryMobile",
                            "aadhaar",
                            "pan",
                            "dateOfBirth",
                        ].includes(field)}
                        type={field === "dateOfBirth" ? "date" : field === "email" ? "email" : "text"}
                    />
                ))}
            </div>

            <h2>📍 Address Information</h2>
            <div className="grid">
                {["currentAddress", "permanentAddress"].map(field => (
                    <textarea
                        key={field}
                        name={field}
                        placeholder={fieldLabels[field]}
                        value={form[field]}
                        onChange={handleChange}
                        required={true}
                        style={{ gridColumn: "1 / -1" }}
                    />
                ))}
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                <button type="submit" disabled={loading} style={{ flex: 1, background: "linear-gradient(135deg, var(--success) 0%, #059669 100%)" }}>
                    {loading ? (isEdit ? "💾 Updating..." : "💾 Creating...") : (isEdit ? "✅ Update User" : "✨ Create User")}
                </button>
                <button
                    type="button"
                    className="secondary"
                    onClick={() => navigate("/")}
                    style={{ flex: 1, background: "transparent", border: "2px solid var(--accent)", color: "var(--accent)" }}
                >
                    ← Cancel
                </button>
            </div>

            {error && <p style={{ color: "var(--error)", background: "var(--error-bg)", padding: "12px 16px", borderRadius: "10px", marginTop: "16px", border: "2px solid var(--error)" }}>❌ {error}</p>}
        </form>
    );
}

