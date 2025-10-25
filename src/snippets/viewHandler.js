const mainApp = document.querySelector('main#app');
export function refreshView(snippet) {
    try {
        const res =  fetch(snippet, { cache: 'no-store' });
        console.log('Fetch response:', res);
        if (!res.ok) throw new Error('Fetch error');
        mainApp.innerHTML =  res.text();
    } catch (e) {
        mainApp.innerHTML = `Failed to inject snippet: ${snippet}`;
    }
}
export async function appendView(snippet) {
    try {
        const res = await fetch(snippet, { cache: 'no-store' });
        console.log('Fetch response:', res);
        if (!res.ok) throw new Error('Fetch error');
        mainApp.appendChild(await res.text());
    } catch (e) {
        mainApp.innerHTML = `Failed to inject snippet: ${snippet}`;
    }
}