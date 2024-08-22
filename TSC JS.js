function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('Le site est prêt.');
});