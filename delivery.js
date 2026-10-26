function autenticar(usuarios, email, senha) {
  return usuarios.some(usuario =>
    usuario.email === email && usuario.senha === senha && usuario.ativo === true
  );
}

module.exports = { autenticar };
