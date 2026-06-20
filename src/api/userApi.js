import axiosInstance from "./axiosInstance";

export const getUsers = (page = 0, size = 5) => {
    return axiosInstance.get("/users", {
        params: {
            page: page,
            size: size
        }
    });
};

export const createUser = data =>
    axiosInstance.post("/users", data);

export const updateUser = (id, data) =>
    axiosInstance.put(`/users/${id}`, data);

export const deleteUser = id =>
    axiosInstance.delete(`/users/${id}`);

