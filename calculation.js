const toggle  = document.getElementById('pricing-toggle');

toggle.addEventListener('change', function() {
    const headings = document.querySelectorAll('.card h1');
    if (this.checked) {
        headings[0].textContent = '$199.99';
        headings[1].textContent = '$249.99';
        headings[2].textContent = '$349.99';
    }
    else {
        headings[0].textContent = '$19.99';
        headings[1].textContent = '$24.99';
        headings[2].textContent = '$34.99';
    }  
});