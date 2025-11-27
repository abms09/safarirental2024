const API = "http://localhost:3000/products";
        const cardList = document.getElementById("cardList");
        const searchInput = document.getElementById("search");
        const filterCategory = document.getElementById("filterCategory");

        let allProducts = [];

        async function loadData() {
            const res = await fetch(API);
            allProducts = await res.json();
            display(allProducts);
        }

       function display(products) {
            cardList.innerHTML = "";

            products.forEach(p => {
                const card = `
                    <div class="pro" onclick="openDetails(${p.id})">
                        <img src="${p.image}">
                        <div class="pro-body">
                            <h3>${p.name}</h3>
                            <p>₹${p.price}</p>
                        </div>
                    </div>
                `;
                cardList.innerHTML += card;
            });
        }

        function applyFilters() {
            const searchText = searchInput.value.toLowerCase();
            const category = filterCategory.value;

            let filtered = allProducts.filter(p =>
                p.name.toLowerCase().includes(searchText)
            );

            if (category !== "") {
                filtered = filtered.filter(p => p.category === category);
            }

            display(filtered);
        }

        searchInput.addEventListener("input", applyFilters);
        filterCategory.addEventListener("change", applyFilters);

        loadData();