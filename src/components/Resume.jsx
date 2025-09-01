import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/Pauline_Moraa_Resume.pdf";
    link.download = "Pauline_Moraa_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    navigate("/");
  }, [navigate]);
  return null;
}
