const tours = [
  { id: 1, name: "Hà Nội - Sapa", region: "Miền Bắc", price: 2500000, img: "https://picsum.photos/300?1" },
  { id: 2, name: "Đà Nẵng - Hội An", region: "Miền Trung", price: 3000000, img: "https://picsum.photos/300?2" },
  { id: 3, name: "Phú Quốc", region: "Miền Nam", price: 5000000, img: "https://picsum.photos/300?3" },
  { id: 4, name: "Nha Trang", region: "Miền Trung", price: 4000000, img: "https://picsum.photos/300?4" }
];

const container = document.getElementById("tours");

function render(list) {
  container.innerHTML = "";

  list.forEach(t => {
    container.innerHTML += `
      <div class="card">
        <img src="${t.img}">
        <div class="card-content">
          <h3>${t.name}</h3>
          <p>${t.region}</p>
          <p class="price">${t.price.toLocaleString()} VND</p>
          <button onclick="book(${t.id})">Đặt ngay</button>
        </div>
      </div>
    `;
  });
}

render(tours);

/* FILTER */
function filterRegion(region) {
  if (!region) return render(tours);
  render(tours.filter(t => t.region === region));
}

/* SEARCH */
function search(keyword) {
  render(
    tours.filter(t =>
      t.name.toLowerCase().includes(keyword.toLowerCase())
    )
  );
}

/* BOOK */
function book(id) {
  alert("Đặt tour thành công!");
}
