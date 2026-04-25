import { useEffect, useState } from 'react'

export default function ResetPasswordPage() {
  const [showFallback, setShowFallback] = useState(false)
  const queryParams = new URLSearchParams(window.location.search)
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''))

  const accessToken =
    hashParams.get('access_token') || queryParams.get('access_token')
  const type = hashParams.get('type') || queryParams.get('type')

  const deepLinkParams = new URLSearchParams()
  if (accessToken) deepLinkParams.set('access_token', accessToken)
  if (type) deepLinkParams.set('type', type)

  const deepLink = `invisibill://invisibill/reset-password${
    deepLinkParams.toString() ? `?${deepLinkParams.toString()}` : ''
  }`

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
