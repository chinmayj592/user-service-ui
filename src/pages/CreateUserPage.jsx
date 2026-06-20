

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance";
import "../styles/CreateUser.css";

export default function CreateUserPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        primaryMobile: "",
        secondaryMobile: "",
        aadhaar: "",
        pan: "",
        dateOfBirth: "",
        placeOfBirth: "",
        currentAddress: "",
        permanentAddress: ""
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            await axios.post("/users", form);
            setMessage("✅ User created successfully! Redirecting...");
            setTimeout(() => navigate("/"), 1500);
            setForm({
                name: "",
                email: "",
                primaryMobile: "",
                secondaryMobile: "",
                aadhaar: "",
                pan: "",
                dateOfBirth: "",
                placeOfBirth: "",
                currentAddress: "",
                permanentAddress: ""
            });
        } catch (err) {
            setMessage(err.response?.data?.message || "❌ Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="page">
            <h1>➕ Create New User</h1>

            <form className="card" onSubmit={handleSubmit}>
                <h2>👤 Personal Details</h2>

                <div className="grid">
                    <input
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="primaryMobile"
                        placeholder="Primary Mobile (+91)"
                        value={form.primaryMobile}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="secondaryMobile"
                        placeholder="Secondary Mobile (Optional)"
                        value={form.secondaryMobile}
                        onChange={handleChange}
                    />
                    <input
                        name="aadhaar"
                        placeholder="Aadhaar Number (12 digits)"
                        value={form.aadhaar}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="pan"
                        placeholder="PAN Number"
                        value={form.pan}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={form.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="placeOfBirth"
                        placeholder="Place of Birth"
                        value={form.placeOfBirth}
                        onChange={handleChange}
                    />
                </div>

                <h2>📍 Address Details</h2>

                <div className="grid">
                    <textarea
                        name="currentAddress"
                        placeholder="Current Address (Street, City, State, Zip)"
                        value={form.currentAddress}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="permanentAddress"
                        placeholder="Permanent Address (Street, City, State, Zip)"
                        value={form.permanentAddress}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? "💾 Saving..." : "✨ Create User"}
                </button>

                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
}

