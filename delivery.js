function autenticar(usuarios, email, senha) {
  return usuarios.some(usuario =>
    usuario.email === email && usuario.senha === senha && usuario.ativo === true
  );
}

function forcaSenha(senha) {
  if (senha.length < 8) return 'fraca';
  const tipos = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/]
    .filter(tipo => tipo.test(senha)).length;
  return tipos >= 3 ? 'forte' : 'media';
}

function podeLogar(usuario) {
  return usuario.status === 'ativo' && usuario.falhas < 3;
}

module.exports = { autenticar, forcaSenha, podeLogar };
