const responsiveGrid = document.querySelector('#responsive-grid');
const responsiveNote = document.querySelector('#responsive-note');
const apiResult = document.querySelector('#api-result');
const apiRun = document.querySelector('#api-run');
let responsiveMode = 'fixed';
let apiMode = 'fixed';

function setPressed(brokenId, fixedId, mode) {
  document.querySelector(brokenId).setAttribute('aria-pressed', String(mode === 'broken'));
  document.querySelector(fixedId).setAttribute('aria-pressed', String(mode === 'fixed'));
}

function setResponsiveMode(mode) {
  responsiveMode = mode;
  responsiveGrid.classList.toggle('broken', mode === 'broken');
  responsiveNote.textContent = mode === 'broken'
    ? 'Antes: as colunas rígidas ultrapassam o quadro; parte da agenda fica escondida.'
    : 'Depois: três colunas fluidas cabem no quadro e os textos permanecem legíveis.';
  setPressed('#responsive-broken', '#responsive-fixed', mode);
}

function setApiMode(mode) {
  apiMode = mode;
  apiResult.dataset.state = 'idle';
  apiResult.innerHTML = '<span class="result-icon" aria-hidden="true">⌁</span><p>Escolha um cenário e consulte.</p>';
  setPressed('#api-broken', '#api-fixed', mode);
}

function simulateRequest(outcome) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (outcome === 'error') reject(new Error('Falha simulada do servidor'));
      else resolve({ protocol: 'DEMO-204', status: 'Em análise' });
    }, 700);
  });
}

async function runApiCase() {
  const outcome = document.querySelector('#api-outcome').value;
  apiRun.disabled = true;
  if (apiMode === 'fixed') {
    apiResult.dataset.state = 'loading';
    apiResult.innerHTML = '<span class="result-icon" aria-hidden="true">◌</span><p>Consultando protocolo simulado…</p>';
  }
  try {
    const data = await simulateRequest(outcome);
    apiResult.dataset.state = 'success';
    apiResult.innerHTML = `<span class="result-icon" aria-hidden="true">✓</span><p><strong>${data.protocol}</strong><br>${data.status}</p>`;
  } catch {
    apiResult.dataset.state = apiMode === 'fixed' ? 'error' : 'idle';
    apiResult.innerHTML = apiMode === 'fixed'
      ? '<span class="result-icon" aria-hidden="true">!</span><p>Não foi possível consultar agora. Tente novamente.</p>'
      : '<span class="result-icon" aria-hidden="true">⌁</span><p>Nenhum resultado.</p>';
  } finally {
    apiRun.disabled = false;
  }
}

document.querySelector('#responsive-broken').addEventListener('click', () => setResponsiveMode('broken'));
document.querySelector('#responsive-fixed').addEventListener('click', () => setResponsiveMode('fixed'));
document.querySelector('#api-broken').addEventListener('click', () => setApiMode('broken'));
document.querySelector('#api-fixed').addEventListener('click', () => setApiMode('fixed'));
apiRun.addEventListener('click', runApiCase);
setResponsiveMode(responsiveMode);
setApiMode(apiMode);
