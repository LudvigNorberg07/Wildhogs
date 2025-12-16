
document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('container');
    if (!element){
        console.error("#Container hittades inte i DOM");
        return;
    }

    element.addEventListener('wheel', function (event) {
        event.preventDefault();

        element.scrollBy({
            left: event.deltaY < 0 ? -90 : 90,
            behavior: 'smooth'
        });
    }, { passive: false });
});