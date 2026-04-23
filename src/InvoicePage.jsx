import { useParams } from "react-router-dom";
import { useEffect } from 'react'

export default function InvoicePage() {
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    window.location.href = `invisibill://invoice`;
  }, [id]);

  return <div>Loading invoice...</div>;
}