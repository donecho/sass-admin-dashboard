import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import ConfirmDialog from "../ui/ConfirmDialog";
import { useToast } from "../../context/ToastContext";

interface ToastContextType {
  showToast: (message: string, type?: "success" | "error") => void;
}
import {
  getUsers,
  deleteUser,
  updateUser,
} from "../../services/userService";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const { showToast } = useToast() as ToastContextType;

  // ✅ FETCH USERS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();

        // map API → dashboard structure
        const mapped = data.map((u: User) => ({
          id: u.id,
          name: u.name,
          email: u.email,
          role: "User",
          status: "Active",
        }));

        setUsers(mapped);
      } catch {
        showToast("Failed to load users", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ UPDATE USER
  const saveUser = async () => {
    if (!editingUser) return;
    try {
      await updateUser(Number(editingUser.id), editingUser);

      setUsers((prev) =>
        prev.map((u) => (u.id === editingUser.id ? editingUser : u))
      );

      showToast("User updated");
      setEditingUser(null);
    } catch {
      showToast("Update failed", "error");
    }
  };

  // ✅ DELETE USER
  const confirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteUser(Number(deleteTarget.id));

      setUsers((prev) =>
        prev.filter((u) => u.id !== deleteTarget.id)
      );

      showToast("User deleted");
      setDeleteTarget(null);
    } catch {
      showToast("Delete failed", "error");
    }
  };

  if (loading) {
    return <p className="p-6">Loading users...</p>;
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b dark:border-slate-700">
        <h2 className="text-lg font-semibold">Users</h2>
      </div>

      <table className="w-full">
        <thead className="bg-slate-50 dark:bg-slate-700 text-sm">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4"></th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <td className="p-4 font-medium">{user.name}</td>
              <td className="p-4 text-slate-500">{user.email}</td>

              <td className="p-4 text-right space-x-2">
                <button
                  onClick={() => setEditingUser(user)}
                  className="px-3 py-1 text-sm rounded hover:bg-slate-200 dark:hover:bg-slate-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => setDeleteTarget(user)}
                  className="px-3 py-1 text-sm text-red-600 rounded hover:bg-red-50 dark:hover:bg-red-900/30"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EDIT MODAL */}
      {editingUser && (
        <Modal title="Edit User" onClose={() => setEditingUser(null)}>
          <div className="space-y-3">
            <input
              value={editingUser.name}
              onChange={(e) =>
                setEditingUser({
                  ...editingUser,
                  name: e.target.value,
                })
              }
              className="w-full border p-2 rounded"
              placeholder="Name"
            />

            <input
              value={editingUser.email}
              onChange={(e) =>
                setEditingUser({
                  ...editingUser,
                  email: e.target.value,
                })
              }
              className="w-full border p-2 rounded"
              placeholder="Email"
            />

            <button
              onClick={saveUser}
              className="w-full bg-indigo-600 text-white py-2 rounded"
            >
              Save
            </button>
          </div>
        </Modal>
      )}

      {/* DELETE CONFIRM */}
      {deleteTarget && (
        <ConfirmDialog
          title="Delete User"
          message={`Delete ${deleteTarget.name}?`}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}
