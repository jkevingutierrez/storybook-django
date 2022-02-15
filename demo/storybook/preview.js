import iconSprite from '../core/templates/patterns/sprites/sprites.html';

const hasIcons = document.querySelector('[data-storybook-svg-icons]');

if (!hasIcons) {
    const icons = document.createElement('div');
    icons.setAttribute('data-storybook-svg-icons', true);
    icons.innerHTML = iconSprite;
    document.body.appendChild(icons);
}

require('../static_src/main');

window.PATTERN_LIBRARY_API = '/pattern-library/api/v1/render-pattern';
window.PATTERN_LIBRARY_TEMPLATE_DIR = 'demo/core/templates/';
