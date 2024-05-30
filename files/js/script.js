(function (){
    document.addEventListener('DOMContentLoaded', function () {
        loadFavorites();

        document.getElementById('itemList').addEventListener('click', function (event) {
            if (event.target && event.target.nodeName === 'BUTTON') {
                const itemId = event.target.id;
                toggleFavorite(itemId);
            }
        });
    });

    function loadFavorites() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.forEach(item => {
            updateButtonState(item);
        });
    }

    function toggleFavorite(item) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const index = favorites.indexOf(item);

        if (index === -1) {
            favorites.push(item);
        } else {
            favorites.splice(index, 1);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateButtonState(item);
    }

    function updateButtonState(item) {
        const button = document.getElementById(item);
        if (!button) return;

        if (JSON.parse(localStorage.getItem('favorites')).includes(item)) {
            button.textContent = 'Remove from Favorites';
            button.classList.remove('btn-primary');
            button.classList.add('btn-danger');
        } else {
            button.textContent = 'Add to Favorites';
            button.classList.remove('btn-danger');
            button.classList.add('btn-primary');
        }
    }
})()