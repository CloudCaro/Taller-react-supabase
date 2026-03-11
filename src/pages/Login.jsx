import { useState } from "react"
import { supabase } from "../services/supabaseClient"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    if (error) {
      alert(error.message)
    } else {
      alert("Login correcto")
    }
  }

  return (
    <div>

      <h2>Iniciar sesión</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button>Ingresar</button>

      </form>

    </div>
  )
}
