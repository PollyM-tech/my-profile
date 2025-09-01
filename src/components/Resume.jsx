import { useState } from "react";

export default function ResumeButton() {
  const [disabled, setDisabled] = useState(false);

  const handleDownload = () => {
    if (disabled) return;

    // Disable button
    setDisabled(true);

    // Trigger download
    const link = document.createElement("a");
    link.href = "/Pauline_Moraa_Resume.pdf";
    link.setAttribute("download", "Pauline_Moraa_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Re-enable after 10 seconds
    setTimeout(() => {
      setDisabled(false);
    }, 10000);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={disabled}
      className={`btn btn-success ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      style={{
        backgroundColor: "#70e000",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        fontWeight: "bold",
      }}
    >
      {disabled ? "Please wait..." : "Download Resume"}
    </button>
  );
}
