import { AlertTriangle } from "lucide-react";

    type ConfirmDialogProps = {
      title: string;
      message: string;
      onConfirm: () => void;
      onCancel: () => void;
    };

    export default function ConfirmDialog({
      title,
      message,
      onConfirm,
      onCancel,
    }: ConfirmDialogProps) {
      return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* overlay */}
      <div
        onClick={onCancel}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* dialog */}
      <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-xl w-full max-w-sm p-6 z-10">
        
        <div className="flex items-center gap-3 mb-4 text-red-600">
          <AlertTriangle size={22} />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
          {message}
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
