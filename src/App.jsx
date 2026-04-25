import { Routes, Route } from 'react-router-dom'
import InvoicePage from './InvoicePage'
import ResetPasswordPage from './ResetPasswordPage'
import './App.css'

function Home() {
  return (
    <section id="center">
      <h1>InvisiBILL</h1>
      <p>Smart invoicing, made invisible.</p>
    </section>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invoice/:id" element={<InvoicePage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
    </Routes>
  )
}

export default App
