const { autenticar, forcaSenha, podeLogar, calcularFrete } = require('./delivery');

const usuarios = [
  { email: 'ana@delivery.com', senha: 'Ana12345', ativo: true },
  { email: 'bruno@delivery.com', senha: 'Bruno#2024', ativo: false }
];

test('CT-01: E-mail e senha corretos de conta ativa', () => {
  expect(autenticar(usuarios, 'ana@delivery.com', 'Ana12345')).toBe(true);
});

test('CT-02: Senha incorreta com e-mail válido', () => {
  expect(autenticar(usuarios, 'ana@delivery.com', 'senhaerrada')).toBe(false);
});

test('CT-03: E-mail que não existe na base', () => {
  expect(autenticar(usuarios, 'ninguem@delivery.com', 'Ana12345')).toBe(false);
});

test('CT-04: Conta inativa com senha correta', () => {
  expect(autenticar(usuarios, 'bruno@delivery.com', 'Bruno#2024')).toBe(false);
});

test('CT-05: Senha curta', () => {
  expect(forcaSenha('Ab1')).toBe('fraca');
});

test('CT-06: 8 caracteres, 1 tipo de caractere', () => {
  expect(forcaSenha('12345678')).toBe('media');
});

test('CT-07: 8 caracteres, 2 tipos', () => {
  expect(forcaSenha('Abcdefgh')).toBe('media');
});

test('CT-08: 8 caracteres, 4 tipos', () => {
  expect(forcaSenha('Abcdef1!')).toBe('forte');
});

test('CT-09: Ativo sem falhas', () => {
  expect(podeLogar({ status: 'ativo', falhas: 0 })).toBe(true);
});

test('CT-10: Ativo com 2 falhas (limite)', () => {
  expect(podeLogar({ status: 'ativo', falhas: 2 })).toBe(true);
});

test('CT-11: Ativo com 3 falhas', () => {
  expect(podeLogar({ status: 'ativo', falhas: 3 })).toBe(false);
});

test('CT-12: Status bloqueado', () => {
  expect(podeLogar({ status: 'bloqueado', falhas: 0 })).toBe(false);
});

test('CT-13: Distância curta', () => {
  expect(calcularFrete(2)).toBe(5);
});

test('CT-14: Fronteira de 3 km', () => {
  expect(calcularFrete(3)).toBe(5);
});

test('CT-15: Acima da fronteira', () => {
  expect(calcularFrete(5)).toBe(8);
});

test('CT-16: Distância negativa', () => {
  expect(() => calcularFrete(-2)).toThrow(new Error('Distância inválida'));
});
