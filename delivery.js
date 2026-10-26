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

function calcularFrete(distanciaKm) {
  if (distanciaKm <= 0) throw new Error('Distância inválida');
  if (distanciaKm <= 3) return 5;
  return 5 + (distanciaKm - 3) * 1.5;
}

function aplicarCupom(valor, cupom) {
  if ([null, undefined, ''].includes(cupom)) return valor;
  let fator;
  if (cupom === 'PRIMEIRA10') fator = 0.9;
  else if (cupom === 'VIP20') fator = 0.8;
  else throw new Error('Cupom inválido');
  return Number((valor * fator).toFixed(2));
}

module.exports = { autenticar, forcaSenha, podeLogar, calcularFrete, aplicarCupom };
