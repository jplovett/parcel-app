
const mainApp = document.getElementById('mainApp');
const loadBtn = document.getElementById('loadSnippet');
const loadSnip2 = document.getElementById('loadSnip2');
const loadSnip3 = document.getElementById('loadSnip3');
const ftr = document.querySelector('footer#ftr');
const year = new Date().getFullYear();

// ---------------------------------------------------------------------------- 
// Function to fetch and inject HTML snippet into mainApp container
// ----------------------------------------------------------------------------
export async function injectView(view) {
    try {
        const res = await fetch(`./snips/${view}.html`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Fetch error');
        mainApp.innerHTML = await res.text();

        //home page btn action
        const snippetBtn = document.getElementById('snippetAction');
        if (snippetBtn) {
            snippetBtn.addEventListener('click', () => {
                alert('Snippet button clicked');
            });
        }
    } catch (e) {
        mainApp.innerHTML = `Failed to inject snippet: ${snippet}`;
    }
}

// ---------------------------------------------------------------------------- 
// App Initialization/Entry Point
// ----------------------------------------------------------------------------   
function startApp() {
    //header();
    injectView('home');
    ftr.innerHTML = `<span>&copy; ${year} Parcel App. All rights reserved.</span> `;

    // Usage: load snippet on button click (or nav links)
    loadBtn.addEventListener('click', () => {
        injectView('home');
    });

    loadSnip2.addEventListener('click', () => {
        injectView('snip2');
    });

    loadSnip3.addEventListener('click', () => {
        injectView('snip3');
    });
}
// ---------------------------------------------------------------------------- 
// Wait for window load for everything including images and subresources
// ---------------------------------------------------------------------------- 
if (document.readyState === 'complete') {
    startApp();
} else {
    window.addEventListener('load', startApp, { once: true });
}