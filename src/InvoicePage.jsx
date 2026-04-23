import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

export default function InvoicePage() {
  const { id } = useParams();
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (!id) return;

    window.location.href = `invisibill://invoice/${id}`;

    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [id]);

  if (showFallback) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Couldn't open the InvisiBILL app</h2>
        <p>Make sure the app is installed on your device.</p>
        <a href={`invisibill://invisibill/invoice/${id}`}>Try Again</a>
      </div>
    );
  }

  return <div>Opening invoice in InvisiBILL...</div>;
}
