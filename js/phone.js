const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones)
}
function displayPhones(phones) {
    // Select parent
    const phoneContainer = document.getElementById('phone-container');
    // Remove Existing Dynamic Card
    phoneContainer.textContent = ' ';
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12) {
        showAllContainer.classList.remove(`hidden`);
    }
    else {
        showAllContainer.classList.add(`hidden`);

    }
    phones = phones.slice(0, 5)

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
}
// handle search button
const handleSearch = () => {
    // alert('Search Handle');
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}
loadPhone();