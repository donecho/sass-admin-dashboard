const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const deleteUser = async (id: number) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};

interface UserUpdate {
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
  // Add other fields as needed
}

export const updateUser = async (id: number, data: UserUpdate) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Update failed");
  return res.json();
};
