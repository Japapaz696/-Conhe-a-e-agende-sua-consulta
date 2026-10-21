# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pessoas em Belo Horizonte e região que procuram psicóloga — jovens, adultos e
casais. Chegam principalmente pelo Instagram (`@veronicapazpsicologa`) e caem
na bio-link. O trabalho delas nesse momento: decidir se confiam nesta
profissional e iniciar contato pelo WhatsApp. É um momento de hesitação, não de
pesquisa longa — a página tem poucos segundos para transmitir competência e
acolhimento.

Segundo público: quem já decidiu e só precisa do caminho mais curto até a
conversa no WhatsApp (a bio é usada como atalho permanente).

## Product Purpose

Dar à Veronica um ponto de contato digital que transforma interesse (vindo do
Instagram) em conversa no WhatsApp. Existe porque as redes sociais não
oferecem um lugar estável, profissional e organizado para apresentar o
trabalho e receber pedidos de agendamento.

Sucesso = a visitante sai da bio entendendo quem é a Veronica, o que ela faz e
como agendar, sem dúvida sobre como dar o próximo passo.

Há também o site principal (9 páginas), hoje suspenso, que cumpre o papel
maior de apresentação, especialidades, formação e agendamento. Ele será
retomado depois da bio.

## Positioning

Não é uma página de marketing genérica. É o rosto profissional de uma
psicóloga específica, com abordagem declarada — TCC integrada a neurociências
— e canais reais e verificáveis (WhatsApp oficial, Instagram oficial,
formação real). A credibilidade vem de conteúdo verdadeiro, não de promessas.

## Operating Context

- Publicação real: **GitHub Pages** (repo `-Conhe-a-e-agende-sua-consulta`,
  branch `main`). Site principal: **Render** (repo `Site-veronica`, suspenso).
- O contato acontece no WhatsApp — é para lá que todo CTA aponta.
- A bio-link é acessada via link na bio do Instagram, quase sempre em celular.
- A área administrativa do site principal (`admin.html`) gerencia agendamentos
  e está bloqueada até uma senha exposta ser rotacionada.

## Capabilities and Constraints

**Funciona hoje na bio:** 4 botões (2 WhatsApp, 1 Instagram, 1 página interna
`trabalho.html`) e uma página profissional com abordagem, formação e formato
de sessão.

**Formato de sessão (fato):** online ou presencial; 50 minutos; semanal.

**Serviços oferecidos (fato):** Psicologia Clínica (TCC); Avaliação
Psicológica; Perícia do Trânsito; Terapia de Casal. Especialidades declaradas:
relacionamentos interpessoais, gestão emocional, procrastinação, problemas de
sono, desenvolvimento pessoal, orientação profissional.

**Formatos:** online e presencial, Belo Horizonte.

**Restrições absolutas:**
- Não inventar CRP, especialidades, depoimentos ou informação profissional.
- Não apresentar foto aleatória como sendo a cliente.
- Não reativar o site principal nem o serviço suspenso sem aprovação explícita.
- Não alterar a URL do Instagram na bio.
- Não fazer force-push nem reescrever história.
- Área administrativa bloqueada até a senha ser rotacionada.

**Undecided:** número de CRP (não existe no repo); existência de uma política
de privacidade/LGPD formalizada; se haverá blog ativo.

## Brand Commitments

- **Paleta bege/dourado é compromisso de marca confirmado** pelo responsável
  e derivada do cartão profissional da Veronica. O redesign **evolui dentro
  dela**, não a substitui.
- Nome profissional completo: **Veronica Reis Santana da Paz**.
- Voz: acolhedora e profissional, em português do Brasil.
- WhatsApp oficial e Instagram oficial são canais fixos e não mudam.

## Evidence on Hand

**Conteúdo real verificado:** nome, profissão, abordagem (TCC + neurociências),
serviços, especialidades, formação (Graduação em Psicologia — Universidade
Newton Paiva; especialização em TCC; Avaliação Psicológica; Integração com
Neurociências), formato de sessão, WhatsApp `+55 31 98883-6237`, Instagram.

**Assets — ausências que o trabalho futuro NÃO pode fabricar:**
- ❌ Não há foto oficial da cliente. Existem duas imagens **não verificadas**
  que devem ser **removidas**: um retrato 640×640 com nome de arquivo UUID
  (origem desconhecida) e uma foto do Unsplash (banco de imagens aleatório).
- ❌ Não há logo oficial.
- ❌ Não há número de CRP em nenhum lugar do repositório.
- ❌ Depoimentos existem no site principal, mas **sem consentimento
  confirmado** — não reutilizar.

## Product Principles

1. **Verdade acima de estética.** Nenhum dado inventado. Onde falta material,
   a vaga fica honesta e visível, não disfarçada com algo falso.
2. **Um passo só até o contato.** O caminho do interesse ao WhatsApp deve ser
   óbvio, curto e à prova de toque no celular.
3. **Acalmar antes de convencer.** A visitante está hesitante; clareza,
   competência demonstrada e tom acolhedor valem mais que persuasão.
4. **Rápido e acessível para todos os aparelhos.** Celular primeiro.
5. **Evoluir a identidade, não trocá-la.** Bege/dourado permanecem.

## Accessibility & Inclusion

A bio atual já tem endurecimento de contraste (textos secundários acima de
4.5:1) e alvos de toque de 44px. O redesign deve preservar ou superar:
contraste WCAG AA, foco visível, alvos de toque ≥44px, hierarquia de headings
correta, `lang` e estrutura semântica. Experiência mobile é o caso principal.
