import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const newMessage = {
      id: crypto.randomUUID(),
      message,
      variant,
    };

    const newToasts = [...toasts, newMessage];
    setToasts(newToasts);
  }

  function handleDismiss(id) {
    const currentToasts = [...toasts];
    const remainingToasts = currentToasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(remainingToasts);
  }

  return (
    <ToastContext value={{ toasts, createToast, handleDismiss }}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
