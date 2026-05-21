import { useEffect } from "react";
import "./Tost.css";

function Toast({ message, type, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`toast-notification toast-${type}`}>
            <div className="toast-content">
                <i className={`toast-icon ${
                    type === "success" ? "fa fa-check-circle" : 
                    type === "error" ? "fa fa-exclamation-circle" : 
                    "fa fa-info-circle"
                }`}></i>
                <span className="toast-message">{message}</span>
                <button className="toast-close" onClick={onClose}>
                    <i className="fa fa-times"></i>
                </button>
            </div>
        </div>
    );
}

export default Toast;