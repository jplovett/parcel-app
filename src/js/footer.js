const ftr = document.querySelector('footer#ftr');
const year = new Date().getFullYear();

export default () => {
    ftr.innerHTML = `<span>&copy; ${year} Parcel App. All rights reserved.</span> `;
}
console.info("footer injected.");