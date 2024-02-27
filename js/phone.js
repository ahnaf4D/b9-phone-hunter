const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}
function displayPhones(phones, isShowAll) {
    // Select parent
    const phoneContainer = document.getElementById('phone-container');
    // Remove Existing Dynamic Card
    phoneContainer.textContent = ' ';
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove(`hidden`);
    }
    else {
        showAllContainer.classList.add(`hidden`);

    }
    console.log('is show all', isShowAll);
    // Display only first 12 phones if not show All
    if (!isShowAll) {

        phones = phones.slice(0, 12)
    }

    phones.forEach(element => {
        // console.log(element);
        // Create div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`
        phoneCard.innerHTML = `
        <figure><img src="${element.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${element.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `
        // append child
        phoneContainer.appendChild(phoneCard);
    });
    // hide loading spinner
    toggleLoadingSpinner(false);
}
// handle search button
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
}
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {

        loadingSpinner.classList.remove(`hidden`);
    }
    else {
        loadingSpinner.classList.add(`hidden`);
    }
}
// handle Show all
const handleShowAll = () => {
    handleSearch(true);
}
loadPhone();