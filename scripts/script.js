// checked agreement items
const agrimentItems = document.querySelectorAll('.agreement-item');
const btnAction = document.querySelector('.btn-action')
function checkAgreem(item) {
    item.classList.remove('checked')
};

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        for (let i = 0; i < agrimentItems.length; i++) {
            const element = agrimentItems[i];
            setTimeout(() => {
                checkAgreem(element);
                if (i === agrimentItems.length - 1) {
                    btnAction.classList.remove('disabled')
                }
            }, (i * 600) + 700);

        };
    }, 1000);

});
