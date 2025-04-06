function toggleDetails(index) {
  const el = document.getElementById(`details-${index}`);
  const btn = document.getElementById(`toggle-btn-${index}`);

  const isVisible = el.classList.toggle('visible');

  btn.textContent = isVisible ? 'Show Less' : 'Show More';
}