import 'bootstrap/dist/css/bootstrap.min.css';
import header from './header.js';
import footer from './footer.js';
import { refreshView } from '../snippets/viewHandler.js';

// ---------------------------------------------------------------------------- 
// App Initialization/Entry Point
// ----------------------------------------------------------------------------   
function startApp() {
    header();
    refreshView('./src/snippets/homeHero.html');
    footer();
    console.info("App started.");
}
// ---------------------------------------------------------------------------- 
// Wait for window load for everything including images and subresources
// ---------------------------------------------------------------------------- 
if (document.readyState === 'complete') {
    startApp();
} else {
    window.addEventListener('load', startApp, { once: true });
}