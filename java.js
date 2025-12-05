document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('container')

    element.addEventListener('scroll', (event) => {
            event.preventDefault();
            element.scrollBy({
                left: event.deltaY < 0 ? -30 : 30,
            });
        });
});