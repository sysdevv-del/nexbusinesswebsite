import { AlertTriangle } from "@/lib/icons";

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="text-center py-20">
      <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <AlertTriangle size={28} className="text-red-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Something went wrong</h3>
      <p className="text-gray-500 mb-6 max-w-md mx-auto">{message || "An unexpected error occurred. Please try again."}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
