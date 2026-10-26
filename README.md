# APS — DeliveryExpress

**Aluno:** João Tiago Mesquita Palhas  
**Matrícula:** 1-2023228650  
**Instituição:** UNIFAMETRO — Teste de Software  
**Professor:** Jonh Sousa

## Objetivo

Implementar as cinco funções do DeliveryExpress e transformar os casos CT-01 a CT-20 em testes automatizados com Jest, mantendo entradas, resultados e mensagens de erro da [atividade](https://profjonhsousa.vercel.app/2026-2/unifametro-ts/aulaAPS/pratica/index.html).

## Executar

Requer Node.js e npm. Validado com Node.js 24.19.0.

```sh
npm ci
npm test -- --runInBand
npm run test:coverage
```

## Funções e rastreabilidade

| Função | Casos | Regra |
| --- | --- | --- |
| `autenticar` | CT-01 a CT-04 | E-mail e senha corretos e conta ativa |
| `forcaSenha` | CT-05 a CT-08 | Comprimento e quantidade de tipos de caracteres |
| `podeLogar` | CT-09 a CT-12 | Status ativo e menos de três falhas |
| `calcularFrete` | CT-13 a CT-16 | R$ 5 até 3 km; R$ 1,50 por km excedente; erro para distância ≤ 0 |
| `aplicarCupom` | CT-17 a CT-20 | Sem cupom, PRIMEIRA10, VIP20 ou erro de cupom inválido |

Os testes de exceção verificam o tipo Error e a mensagem completa. O cupom aceita null, undefined e string vazia como ausência de cupom; descontos retornam números arredondados a duas casas decimais. A suíte contém exatamente os vinte casos solicitados.

## Resultado verificado

20 testes passaram. Cobertura de 100% em instruções, ramificações, funções e linhas. A configuração do Jest exige 100% nessas quatro métricas. Cobertura de 100% não significa que todas as entradas possíveis foram testadas.

[Visualizar resultado da execução](evidencias/resultado.html)

O HTML mostra a transcrição da saída real do comando. A captura de tela permanece pendente por restrição do navegador neste ambiente. A saída original está em [resultado-testes.txt](resultado-testes.txt). O relatório detalhado é gerado em `coverage/lcov-report/index.html` ao executar a cobertura.

## Histórico e entrega

O repositório local contém um commit de implementação por função. A autoria dos commits identifica a assistência de desenvolvimento; não representa participação de outros alunos.

Trabalho preparado individualmente conforme informação do aluno. O enunciado exige equipe de três e revisão cruzada: confirmar com o professor se a entrega individual será aceita. Não há revisão cruzada registrada.

Pendências externas:

- Definir o número do grupo e criar repositório público `aps-delivery-grupoX` no GitHub.
- Publicar a branch `main` do repositório local.
- Convidar `jonh.sousa@professor.unifametro.edu.br` como colaborador.
- Cumprir a revisão cruzada exigida ou combinar uma alternativa com o professor.
- Enviar o link ao professor até a aula seguinte à prova.

O projeto foi preparado localmente; publicação, convite e envio ainda não foram realizados.
