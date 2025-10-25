import navItems from '../config/navItems.js'
const hdr = document.querySelector('header#hdr');

export default () => {
    hdr.innerHTML = `<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-md">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>`;
}
console.log('Navigation items:', navItems);