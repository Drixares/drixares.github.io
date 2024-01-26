const switcher = document.getElementById('theme-switcher');

switcher.addEventListener('click', () => {
    
    const rootEl = document.documentElement;
    let dataTheme = rootEl.getAttribute('data-theme'), newTheme;
    newTheme = (dataTheme === "light") ? 'dark' : 'light';

    rootEl.setAttribute('data-theme', newTheme);

    // Set the local storage item
    localStorage.setItem('theme', newTheme);
    
})
