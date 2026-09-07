// Lightweight JS to enhance accessibility for screen readers & touch devices
document.querySelectorAll('.w-tooltip-container').forEach(container => {
  const trigger = container.querySelector('.w-tooltip-trigger');
  const tooltip = container.querySelector('.w-tooltip');

  const showTooltip = () => tooltip.classList.add('is-visible');
  const hideTooltip = () => tooltip.classList.remove('is-visible');

  // Desktop Hover & Focus
  trigger.addEventListener('mouseenter', showTooltip);
  trigger.addEventListener('mouseleave', hideTooltip);
  trigger.addEventListener('focus', showTooltip);
  trigger.addEventListener('blur', hideTooltip);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideTooltip();
  });
});