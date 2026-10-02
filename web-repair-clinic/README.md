# Web Repair Clinic

Projeto demonstrativo autoral, com dados fictícios e sem chamadas a serviços externos. Este recorte inclui somente dois casos e pode ser aberto com um servidor estático local. A versão pública está em https://lucas-verissimo.github.io/Portifolio/web-repair-clinic/.

## Caso 1 — grid em celular

- **Reprodução:** abra `index.html`, vá ao primeiro caso e selecione **Antes**. O quadro simula uma tela de 360 px; a terceira coluna é cortada.
- **Causa:** três colunas rígidas de 180 px exigem pelo menos 540 px, mesmo antes de contar os espaços. O texto também não pode quebrar.
- **Correção:** `repeat(3, minmax(0, 1fr))`, cartões com `min-width: 0` e texto com `overflow-wrap: anywhere`.
- **Aceite:** em largura simulada de 360 px, os três cartões aparecem sem rolagem horizontal dentro do quadro e o texto continua legível. Conferir também em viewport real de 320 px.

## Caso 2 — resposta de API simulada

- **Reprodução:** selecione **Antes**, escolha **Falha de servidor** e clique em **Consultar**. A interface termina com “Nenhum resultado”, que não explica a falha nem a próxima ação.
- **Causa:** o fluxo antigo não diferencia estado ocioso, carregamento e erro. A demo mantém o botão bloqueado durante a consulta para evitar cliques simultâneos, isolando a falha de comunicação do caso.
- **Correção:** estado de carregamento visível, resposta de sucesso, erro legível com convite para tentar novamente e `aria-live` para anunciar mudanças.
- **Aceite:** sucesso mostra o protocolo fictício `DEMO-204`; falha mostra a mensagem de erro; o botão volta a ficar disponível nos dois resultados.

As opções **Antes** são erros intencionais, limitados aos quadros de demonstração. O restante do site permanece funcional. Não há cliente, API de produção, avaliação de segurança ou resultado comercial associado a este projeto.
