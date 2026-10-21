# Revisão de acabamento — bio Verônica, "O itinerário da consulta"

**Substituição declarada:** o revisor de acabamento do Impeccable foi invocado
duas vezes, como subagente `general` com o pacote completo (contrato, PRODUCT.md,
4 capturas em `.impeccable/review/`). Nas duas vezes o subagente **não tem
suporte a imagem no seu harness** e devolveu `disposition: recapture` apenas por
isso — a limitação de visão é do ambiente, não defeito do artefato. O revisor
principal (esta sessão) também não lê imagens. Para não deixar a revisão
incompleta, o protocolo degradado
(`reference/degraded/finish-reviewer.md`) foi executado **inline por esta
sessão**, substituindo a leitura das capturas por **medição direta do DOM/render**
(estilos computados, geometria, contraste por luminância, CSSOM, estados de
foco). Toda afirmação visual abaixo tem uma medição por trás. Onde só a visão
decidiria (caráter da letra, materialidade), o texto diz que ficou por medir.

Capturas exigidas, presentes e válidas por dimensão/tamanho:
`.impeccable/review/{desktop,mobile,trabalho-desktop,trabalho-mobile}.png`.

Inputs ausentes do pacote: nenhum card de QUALITY BAR / mundo existe no disco do
skill (procurado por nome; não há arquivo). `ceiling` é julgado contra o
REQUISITO do contrato, não contra um card.

---

## disposition: fix

**Decisão do usuário (2026-10-21):** manter o marcador pendente no rodapé —
"Registro profissional — CRP pendente de confirmação". Nada é publicado até a
revisão visual do usuário e a aprovação explícita.

**Revisão posterior (2026-10-21, commit `a624547`):** o usuário preferiu **não
exibir** o aviso de pendência. A linha de CRP foi removida do rodapé das duas
páginas — fica só a frase. Nenhum registro é afirmado nem negado. Um comentário
no código marca onde a linha volta, no formato final (`CRP 00/00000`), quando a
cliente informar o número. Verificado: zero ocorrências de "CRP"/"pendente" no
texto renderizado, 100/100/100 nas duas páginas, CTA intacto. Nada publicado.

## persistence — pass

- `PRODUCT.md` existe na branch (commit `c652fb1`).
- Build **code-led**: sem comp aprovado, sem `.impeccable/build/state.json`, sem
  `.impeccable/mocks/` — correto para esta rota. Nada a marcar como material.
- `DESIGN.md` ausente: esperado — num mundo novo ele é escrito **depois** desta
  revisão, pelo documenter. Não é achado.
- Contrato carrega a seed key do sorteio: `9910ba39` (linha 70 de
  `surfaces/index-html.md`). O sorteio não foi pulado.

## fidelity — matriz por elemento (contra o contrato, sem comp)

| Elemento | Estado | Evidência |
|---|---|---|
| ORIGEM ("Você está aqui" + Ψ + nome + TCC) | **match** | `.origem-marcador` = "Você está aqui"; brasão Ψ; h1 nome; `.origem-funcao` "Psicóloga · Terapia Cognitivo-Comportamental". |
| Rota vertical contínua (a substituição da grade) | **match** | `.rota-linha` altura 393px, `matrix(1,0,0,1,0,0)` = totalmente desenhada; 4 pontos com centro x desalinhado −1px da linha. |
| Destino = maior parada, única em dourado cheio | **match** | `.parada--destino` altura 112px vs 93px dos desvios; fundo `rgb(201,169,110)` (dourado). Os desvios são papel `rgb(242,237,227)`. |
| Estado por FORMA, não por cor | **adaptation** | Ponto destino 18px **cheio** (`rgb(61,50,41)`, borda papel); desvios 14px **vazados** (miolo papel, borda `--linha-forte`). Foco acende o ponto por **espessura** (borda 2px→3px, medido em `.parada--desvio:focus-visible`), não por cor. Cumpre a disciplina. Adaptação: o hover do desvio também troca a cor da borda para dourado — a cor entra como reforço, não como o único carregador do estado; aceitável. |
| Momento memorável: a rota se desenha uma vez | **match** | `animationName: desenhar-rota`, duração 1.1s, `fill: forwards`, terminando em `scaleY(1)`. Um único momento autorado, não uma entrada idêntica por seção. |
| Entrada escalonada | **adaptation** | 6 elementos com `data-entra`, atrasos 60/140/200/260ms — escalonamento real, não simultâneo. Aceitável; abaixo do momento da rota, que é o gesto principal. |
| TYPE — voz de display | **match** | Display/h1 = `"Playfair Display", Georgia, serif` (serif humanista, casa com "acolhedor"). Corpo = `Inter`. Duas vozes distintas e intencionais; a serif **não** é face de sistema. (Caráter/terminais letra a letra: por medir — sem visão.) |
| MATERIAL — mídia real vs CSS | **match** | Nenhum raster falso, nenhum SVG imitando foto, nenhuma máscara geométrica fingindo recorte. Ψ é glifo tipográfico de avatar **marcado como pendente**, não substituto de foto do cliente. Zero `<img>`. |
| GROUND — campo e temperatura | **match** | Papel `#F2EDE3` (`rgb(242,237,227)`), quente/bege — coerente com OWN-WORLD, herdado do cartão profissional. Lavagem radial sutil de dourado no fundo (world texture, não enfeite). Sem deriva para o prior de creme-frio. |
| CHEGADA (frase + crédito) | **match** | Frase "Cuidar da saúde emocional é um ato de coragem." Crédito: "Registro profissional — CRP pendente de confirmação" (veridade: ver Truth). |

Nenhuma linha **contradicted**; nenhuma **missing**; nenhum elemento **added
without approval** (as 4 paradas são exatamente o conjunto de botões aprovado).

## ceiling — reached (contra o requisito do contrato; sem card no disco)

Aviso: não há card de QUALITY BAR no disco, então este bloco é julgado contra o
que o contrato promete e contra o potencial real do mundo, não contra um card.

- Pista de nível-de-emissão (line weight / point hollow-filled) — **usada**.
- Momento de movimento autorado (desenho único da rota) — **usado**.
- Movimento além de transform/opacity (blur, clip-path, mask) — **não usado**.
  O mundo do itinerário não pede isso nativamente; a rota desenhar-se é o gesto
  suficiente. Não é achado.

## material_fixes — ordenadas, mais material primeiro

1. **O crédito de rodapé afirmava CRP sem número.** Era "CRP válido no Conselho
   Regional de Psicologia" — afirmação de registro não verificável (não há número
   de CRP em nenhum arquivo). **Resolvido nesta rodada**: trocado por "Registro
   profissional — CRP pendente de confirmação" em `index.html` e `trabalho.html`
   (check 5, Truth).
2. **Textura de fundo com `background-attachment: fixed`.** A lavagem radial é do
   mundo (aceita), mas `fixed` causa repaint em scroll no mobile e pode soar
   "decorativa" em telas altas. Trocar por `scroll` (ou remover no mobile) — baixo
   custo, remove risco de performance. (check 6 Floor / performance.)
3. **Contraste do crédito no limite.** `.chegada-credito` mede **4.56:1** — passa
   AA, mas com 0.06 de folga sobre o mínimo de 4.5. Escurecer meio passo a tinta
   dá margem. (check 6 Floor, contrast.)

Limite de oito respeitado (3 itens). Não há achado de fidelidade pendente: o
elemento material (CRP) já foi corrigido.

## keep

A estrutura de itinerário — a linha que se desenha, o ponto cheio no destino, o
estado por forma — não pode ser achatada numa pilha de cards iguais enquanto se
aplicam os fixes acima.

---

## Verdade (check 5) — detalhe

- Nenhuma afirmação comercial inventada; CRP agora é **placeholder marcado**, não
  omissão nem afirmação.
- WhatsApp `5531988836237` e Instagram `@veronicapazpsicologa` vêm de
  `PRODUCT.md`; Instagram inalterado.
- Nenhum dado de demonstração fabricado; nenhum depoimento (consentimento
  pendente) no ar.

## Floor (check 6) — batida mecânica

Medido no render: 0 gradient-text, 0 emoji-como-ícone, 0 glass/blur decorativo,
0 `border-left` colorida >1px em card (as 4 ocorrências são **pontos circulares**
da rota, `border-radius: 50%`, não listras laterais), 0 sombra dura deslocada,
raio de card 16px, elevação declarada uma vez por elemento (borda **ou** sombra,
nunca ghost card). Um detalhe de superfície de navegador: `::selection` usa
`--dourado-lavado` e o caret usa `--tinta` — tema aplicado. **Scrollbar não
tematizada** (`scrollbarDefinida: false`) — menor, mas vale um `scrollbar-color`.
O detector `impeccable detect --json` retornou `[]` (sem achados).
