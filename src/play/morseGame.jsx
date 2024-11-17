async function saveScore(score) {
  const date = new Date().toLocaleDateString();
  const newScore = { name: userName, score: score, date: date };

  await fetch('/api/score', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newScore),
  });

  // Let other players know the game has concluded
  GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
}