document.addEventListener('DOMContentLoaded', function() {
  /* Helper function to extract a BibTeX entry by key */
  function findBibEntry(bibText, key) {
    const startRegex = new RegExp(`@\\w+\\{${key},`);
    const startMatch = bibText.match(startRegex);
    if (!startMatch) return null;
    
    const start = startMatch.index;
    let braceCount = 1;
    let i = start + startMatch[0].length;
    
    while (i < bibText.length && braceCount > 0) {
      if (bibText[i] === '{') braceCount++;
      else if (bibText[i] === '}') braceCount--;
      i++;
    }
    
    return braceCount === 0 ? bibText.substring(start, i) : null;
  }

  /* Load BibTeX from file */
  fetch('/files/publications.bib')
    .then(response => response.text())
    .then(bibText => {
      document.querySelectorAll('[data-bib-key]').forEach(el => {
        const key = el.dataset.bibKey;
        const entry = findBibEntry(bibText, key);
        if (entry) {
          el.querySelector('.bib-content').textContent = entry.trim();
        } else {
          el.querySelector('.bib-content').textContent = 'BibTeX entry not found';
          console.log('Could not find key:', key);
        }
      });
    })
    .catch(err => {
      console.error('Failed to load BibTeX:', err);
      document.querySelectorAll('.bib-content').forEach(el => {
        el.textContent = 'Failed to load BibTeX';
      });
    });

  /* Simple toggle */
  document.querySelectorAll('.toggleButton').forEach(button => {
    button.addEventListener('click', function() {
      const target = document.getElementById(this.getAttribute('data-target'));
      if (target) {
        target.classList.toggle('show');
      }
    });
  });

  /* Copy button */
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const bibContent = this.previousElementSibling.textContent;
      navigator.clipboard.writeText(bibContent).then(() => {
        const original = this.textContent;
        this.textContent = 'Copied!';
        setTimeout(() => this.textContent = original, 1500);
      });
    });
  });
});