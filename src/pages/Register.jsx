import { useState } from "react"
import { supabase } from "../services/supabaseClient"

export default function Register() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password
    })

    if (error) {
      alert(error.message)
    } else {
      alert("Usuario registrado correctamente")
    }
  }

  return (
    <div>

      <h2>Registro de usuario</h2>

      <form onSubmit={handleRegister}>

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

        <button>Registrarse</button>

      </form>

    </div>
  )
}
