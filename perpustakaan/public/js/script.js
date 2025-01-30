// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById('searchBar');
    const books = document.getElementsByClassName('book');
    const noResultsMessage = document.getElementById('noResultsMessage');

    // Add an event listener to the search bar
    searchBar.addEventListener('keyup', function() {
        const query = searchBar.value.toLowerCase();
        let visibleCount = 0; // Track the number of visible books

        // Loop through all book items and hide those whose titles don't match the query
        for (let i = 0; i < books.length; i++) {
            let book = books[i];
            let title = book.querySelector('h4').innerText.toLowerCase();

            if (title.includes(query)) {
                book.style.display = ''; // Show the book
                visibleCount++; // Increment visible book count
            } else {
                book.style.display = 'none'; // Hide the book
            }
        }

        // If no books are visible, show the "No books found" message
        noResultsMessage.style.display = visibleCount === 0 ? 'block' : 'none';
    });
});
