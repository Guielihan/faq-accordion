const faqs = document.querySelectorAll('.faq-title');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        const openFaq = document.querySelector('.faq.open');
        if (openFaq && openFaq !== faq.parentElement) {
            openFaq.classList.remove('open');
        }

        faq.parentElement.classList.toggle('open');
    });
});