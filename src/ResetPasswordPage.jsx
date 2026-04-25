import { useEffect, useState } from 'react'

export default function ResetPasswordPage() {
  const [showFallback, setShowFallback] = useState(false)
  const deepLink = 'invisibill://invisibill.com/reset-password'

  useEffect(() => {
    window.location.href = deepLink

    const timer = setTimeout(() => {
      setShowFallback(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [deepLink])

  if (showFallback) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Couldn&apos;t open the InvisiBILL app</h2>
        <p>Make sure the app is installed on your device.</p>
        <a href={deepLink}>Try Again</a>
      </div>
    )
  }

  return <div>Opening reset password in InvisiBILL...</div>
}
