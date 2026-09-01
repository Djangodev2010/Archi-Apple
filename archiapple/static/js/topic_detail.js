document.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.getElementById('officialResourceModal');

    if (modalElement) {
        modalElement.addEventListener('hide.bs.modal', function () {
            if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
        });
    }
});