Hooks.on('renderTokenActionHud', (app, html, data) => {
  // Дожидаемся появления HUD на странице
  const el = app.element[0] || document.getElementById('token-action-hud-app');
  if (!el) return;

  // Удаляем все старые стилевые классы
  el.classList.forEach(cls => {
    if (cls.startsWith('tah-style-')) el.classList.remove(cls);
  });

  // Добавляем наш киберпанк-класс
  el.classList.add('tah-style-cyberpunk');
});