import { useState } from "react";
//nombre, email, foto de perfil y país
const CrearUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const validate = (email, telefono) => {
    if (!email.includes("@")) return "Email invalido, no incluye @";
    if (telefono.length < 9 || telefono.length > 9)
      return "Telefono invalido, longitud incorrecta";
  };

  const errorMsg = validate(email, telefono);

  return (
    <div>
      <h2>Registrate</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          autoComplete="off"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="tel"
          name="telefono"
          placeholder="Telefono"
          autoComplete="off"
          value={telefono}
          onChange={(e) => {
            setTelefono(e.target.value);
          }}
        />

        <p>{errorMsg}</p>

        <button type="sumbit" disabled={errorMsg}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export { CrearUsuario };
