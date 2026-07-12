const nodes = document.querySelectorAll('.mission-node');
nodes.forEach((node) => {
  const tooltip = node.querySelector('.tooltip-text');
  if (!tooltip) return;
  node.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
    tooltip.style.transform = 'translateX(-50%) translateY(-4px)';
  });
  node.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
    tooltip.style.transform = 'translateX(-50%) translateY(0)';
  });
  node.addEventListener('focus', () => {
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
    tooltip.style.transform = 'translateX(-50%) translateY(-4px)';
  });
  node.addEventListener('blur', () => {
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
    tooltip.style.transform = 'translateX(-50%) translateY(0)';
  });
});
