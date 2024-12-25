import React from "react";

import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import useKeyDown from "../../hooks/use-keydown";

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, [setToasts]);

  useKeyDown("Escape", handleEscape);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast id={toast.id} variant={toast.variant}>
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
