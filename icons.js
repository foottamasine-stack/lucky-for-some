// ══════════════════════════════════════════════
// ICON LIBRARY — clean line-art icons replacing emoji
// All icons use currentColor so they inherit CSS colour
// ══════════════════════════════════════════════

const ICON_WRAP_OPEN = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">';
const ICON_WRAP_CLOSE = '</svg>';

// ---- MAJOR ARCANA ICONS (traditional symbolism, one per card) ----
const MAJOR_ICONS = {
  'fool': `${ICON_WRAP_OPEN}<path d="M12 3c4 3 6 9 3 15-1 2-3 3-3 3s-2-1-3-3c-3-6-1-12 3-15z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 6v14M12 10l-2.2 2M12 10l2.2 2M12 14.5l-2.2 2M12 14.5l2.2 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>${ICON_WRAP_CLOSE}`,

  'magician': `${ICON_WRAP_OPEN}<path d="M6.5 12c0-2.2 1.8-3.3 3.2-2 .9.8 1 2 2.3 2s1.4-1.2 2.3-2c1.4-1.3 3.2-.2 3.2 2s-1.8 3.3-3.2 2c-.9-.8-1-2-2.3-2s-1.4 1.2-2.3 2c-1.4 1.3-3.2.2-3.2-2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>${ICON_WRAP_CLOSE}`,

  'high-priestess': `${ICON_WRAP_OPEN}<path d="M14.5 3.5a8.5 8.5 0 100 17c-3.2-1.7-5.3-5-5.3-8.5s2.1-6.8 5.3-8.5z" fill="currentColor"/>${ICON_WRAP_CLOSE}`,

  'empress': `${ICON_WRAP_OPEN}<circle cx="12" cy="12" r="2" fill="currentColor"/><g stroke="currentColor" stroke-width="1.4"><ellipse cx="12" cy="6.5" rx="2" ry="3.2"/><ellipse cx="12" cy="6.5" rx="2" ry="3.2" transform="rotate(72 12 12)"/><ellipse cx="12" cy="6.5" rx="2" ry="3.2" transform="rotate(144 12 12)"/><ellipse cx="12" cy="6.5" rx="2" ry="3.2" transform="rotate(216 12 12)"/><ellipse cx="12" cy="6.5" rx="2" ry="3.2" transform="rotate(288 12 12)"/></g>${ICON_WRAP_CLOSE}`,

  'emperor': `${ICON_WRAP_OPEN}<path d="M4 18h16l-1.4-7.5-3.4 3.5-2.2-6-2.2 6-3.4-3.5L4 18z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M4 18h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>${ICON_WRAP_CLOSE}`,

  'hierophant': `${ICON_WRAP_OPEN}<path d="M6 20V6M18 20V6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M3.7 6.5h4.6M15.7 6.5h4.6M3.7 19.5h4.6M15.7 19.5h4.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>${ICON_WRAP_CLOSE}`,

  'lovers': `${ICON_WRAP_OPEN}<path d="M12 20.5s-7.5-5-7.5-10.2A4 4 0 0112 8a4 4 0 017.5 2.3c0 5.2-7.5 10.2-7.5 10.2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>${ICON_WRAP_CLOSE}`,

  'chariot': `${ICON_WRAP_OPEN}<path d="M12 3.5l6.5 2.8v5.4c0 4.6-2.8 7.4-6.5 8.3-3.7-.9-6.5-3.7-6.5-8.3V6.3L12 3.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 10.5l3 3 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>${ICON_WRAP_CLOSE}`,

  'strength': `${ICON_WRAP_OPEN}<ellipse cx="12" cy="16" rx="5.5" ry="4" stroke="currentColor" stroke-width="1.5"/><circle cx="6.8" cy="8.5" r="1.7" fill="currentColor"/><circle cx="11" cy="6.2" r="1.7" fill="currentColor"/><circle cx="15.2" cy="6.5" r="1.7" fill="currentColor"/><circle cx="18.3" cy="9.5" r="1.7" fill="currentColor"/>${ICON_WRAP_CLOSE}`,

  'hermit': `${ICON_WRAP_OPEN}<path d="M9.3 8.5h5.4l1.3 3.2v6.8a1 1 0 01-1 1H9a1 1 0 01-1-1v-6.8l1.3-3.2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 4v4.5M10.2 4h3.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="14.5" r="1.6" fill="currentColor"/>${ICON_WRAP_CLOSE}`,

  'wheel': `${ICON_WRAP_OPEN}<circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 4v5M12 15v5M4 12h5M15 12h5M6.5 6.5l3.2 3.2M14.3 14.3l3.2 3.2M17.5 6.5l-3.2 3.2M9.7 14.3l-3.2 3.2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>${ICON_WRAP_CLOSE}`,

  'justice': `${ICON_WRAP_OPEN}<path d="M12 3v17M7.5 21h9M4.5 7h15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M4.5 7L2 12.5a2.7 2.7 0 005 0L4.5 7zM19.5 7L17 12.5a2.7 2.7 0 005 0L19.5 7z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>${ICON_WRAP_CLOSE}`,

  'hanged-man': `${ICON_WRAP_OPEN}<path d="M12 3a9 9 0 019 9 8 8 0 01-8 8 6.2 6.2 0 01-6.2-6.2 4.4 4.4 0 014.4-4.4 2.7 2.7 0 012.7 2.7c0 .8-.5 1.3-1 1.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>${ICON_WRAP_CLOSE}`,

  'death': `${ICON_WRAP_OPEN}<path d="M12 5.5c1.8-2 6-2.3 6 1.5 0 3.5-3.8 5-6 7.5-2.2-2.5-6-4-6-7.5 0-3.8 4.2-3.5 6-1.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 14.5V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>${ICON_WRAP_CLOSE}`,

  'temperance': `${ICON_WRAP_OPEN}<path d="M3.5 12c2-3.5 3.5 3.5 5.5 0s3.5 3.5 5.5 0 3.5 3.5 5.5 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>${ICON_WRAP_CLOSE}`,

  'devil': `${ICON_WRAP_OPEN}<path d="M8.5 13.5c-2.3-3.3-1-8.5 2-9M15.5 13.5c2.3-3.3 1-8.5-2-9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 14a4 4 0 008 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>${ICON_WRAP_CLOSE}`,

  'tower': `${ICON_WRAP_OPEN}<path d="M13 2.5L5 14h6l-1.2 7.5L18 10h-6l1-7.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="currentColor" fill-opacity="0.12"/>${ICON_WRAP_CLOSE}`,

  'star': `${ICON_WRAP_OPEN}<path d="M12 2.5l2.6 6.3 6.7.5-5.1 4.4 1.6 6.6L12 16.7 6.2 20.3l1.6-6.6-5.1-4.4 6.7-.5L12 2.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>${ICON_WRAP_CLOSE}`,

  'moon': `${ICON_WRAP_OPEN}<circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/><circle cx="9.3" cy="9.3" r="1.1" fill="currentColor"/><circle cx="14.2" cy="12.8" r="1.5" fill="currentColor"/><circle cx="10.3" cy="15.2" r="0.9" fill="currentColor"/>${ICON_WRAP_CLOSE}`,

  'sun': `${ICON_WRAP_OPEN}<circle cx="12" cy="12" r="4.8" stroke="currentColor" stroke-width="1.5"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>${ICON_WRAP_CLOSE}`,

  'judgement': `${ICON_WRAP_OPEN}<path d="M4 9.5l10-4v13l-10-4v-5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 10.5h5.5a2 2 0 012 2 2 2 0 01-2 2H14" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>${ICON_WRAP_CLOSE}`,

  'world': `${ICON_WRAP_OPEN}<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M3 12h18M12 3c2.8 2.7 2.8 15.3 0 18M12 3c-2.8 2.7-2.8 15.3 0 18" stroke="currentColor" stroke-width="1.3"/>${ICON_WRAP_CLOSE}`,
};

// ---- SUIT ICONS (used for all Minor Arcana cards of that suit) ----
const SUIT_ICONS = {
  'Wands': `${ICON_WRAP_OPEN}<path d="M12 2.5c3 3.8 5.5 7.3 5.5 11a5.5 5.5 0 01-11 0c0-2.7 1.7-4.5 2.7-6.2 0 1.7.9 2.7 1.8 2.7s.8-1.7.8-3.3c0-1.7-.8-2.7 0-4.2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>${ICON_WRAP_CLOSE}`,

  'Cups': `${ICON_WRAP_OPEN}<path d="M6.5 4.5h11l-1 6.5a4.5 4.5 0 01-9 0l-1-6.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 15.5v3.3M8.7 19.5h6.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>${ICON_WRAP_CLOSE}`,

  'Swords': `${ICON_WRAP_OPEN}<path d="M12 2.5v14.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8.6 6h6.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8.8 16.8L12 20l3.2-3.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 20v1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>${ICON_WRAP_CLOSE}`,

  'Pentacles': `${ICON_WRAP_OPEN}<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 6.2l1.7 3.9 4.3.3-3.3 2.8 1.1 4.2L12 15.1l-3.8 2.3 1.1-4.2-3.3-2.8 4.3-.3L12 6.2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>${ICON_WRAP_CLOSE}`,
};

function getCardIcon(card) {
  if (card.suit === 'Major') {
    return MAJOR_ICONS[card.id] || SUIT_ICONS['Pentacles'];
  }
  return SUIT_ICONS[card.suit] || SUIT_ICONS['Pentacles'];
}
