import localStorageService from "../../services/localStorageService";

export const loginUsuario = async (credenciais) => {
  const resposta = await fetch("http://localhost:3001/usuarios/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credenciais),
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro?.mensagem || "Credenciais inválidas");
  }

  const usuario = await resposta.json();
  localStorageService.salvar("usuario", usuario);
  return usuario;
};

export const logoutUsuario = () => {
  localStorageService.remover("usuario");
};
