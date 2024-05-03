(function() {
    document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
        el.setAttribute('href', el.getAttribute('href').replace('*', '@'));
        el.innerHTML = el.innerHTML.replace('*', '@');
    });
})();