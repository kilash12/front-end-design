const galleryData = [
    { title: '24 Oct 2020', views: '14,582 views', image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=400&h=400&fit=crop' },
    { title: '22 Oct 2020', views: '10,460 views', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop' },
    { title: '21 Sep 2020', views: '12,980 views', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop' },
    { title: '18 Oct 2020', views: '11,908 views', image: 'https://images.unsplash.com/photo-1552058544-f037b8b9ea59?w=400&h=400&fit=crop' },
    { title: '24 Sep 2020', views: '16,008 views', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop' },
    { title: '21 Sep 2020', views: '21,580 views', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop' },
    { title: '12 Sep 2020', views: '12,860 views', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop' },
    { title: '6 Sep 2020', views: '62,908 views', image: 'https://images.unsplash.com/photo-1488749807830-63789f68bb65?w=400&h=400&fit=crop' },
    { title: '12 Sep 2020', views: '42,700 views', image: 'https://images.unsplash.com/photo-1466239141872-94f2fcf00f28?w=400&h=400&fit=crop' },
    { title: '9 Sep 2020', views: '9,908 views', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=400&fit=crop' },
    { title: '19 Aug 2020', views: '107,510 views', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop' },
    { title: '20 Aug 2020', views: '119,006 views', image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop' },
    { title: 'Nature 1', views: '12,345 views', image: 'https://source.unsplash.com/400x400/?nature,water' },
    { title: 'Nature 2', views: '9,876 views', image: 'https://source.unsplash.com/400x400/?mountain' },
    { title: 'Nature 3', views: '15,230 views', image: 'https://source.unsplash.com/400x400/?forest' },
    { title: 'City 1', views: '22,110 views', image: 'https://source.unsplash.com/400x400/?city,night' },
    { title: 'City 2', views: '18,540 views', image: 'https://source.unsplash.com/400x400/?buildings' },
    { title: 'Beach 1', views: '30,120 views', image: 'https://source.unsplash.com/400x400/?beach' },
    { title: 'Beach 2', views: '25,980 views', image: 'https://source.unsplash.com/400x400/?sea' },
    { title: 'Travel 1', views: '14,760 views', image: 'https://source.unsplash.com/400x400/?travel' },
    { title: 'Travel 2', views: '19,430 views', image: 'https://source.unsplash.com/400x400/?road' },
    { title: 'Sky 1', views: '11,250 views', image: 'https://source.unsplash.com/400x400/?sky,clouds' },
    { title: 'Sky 2', views: '16,890 views', image: 'https://source.unsplash.com/400x400/?sunset' },
    { title: 'Random', views: '20,000 views', image: 'https://source.unsplash.com/400x400/?landscape' },
    { title: 'Image 1', views: '12,000 views', image: 'https://picsum.photos/id/1015/400/400' },
    { title: 'Image 2', views: '15,000 views', image: 'https://picsum.photos/id/1025/400/400' },
    { title: 'Image 3', views: '9,500 views', image: 'https://picsum.photos/id/1035/400/400' },
    { title: 'Image 4', views: '18,200 views', image: 'https://picsum.photos/id/1045/400/400' },
    { title: 'Image 5', views: '21,100 views', image: 'https://picsum.photos/id/1055/400/400' },
    { title: 'Image 6', views: '7,890 views', image: 'https://picsum.photos/id/1065/400/400' },
    { title: 'Image 7', views: '13,450 views', image: 'https://picsum.photos/id/1075/400/400' },
    { title: 'Image 8', views: '16,780 views', image: 'https://picsum.photos/id/1085/400/400' },
    { title: 'Image 9', views: '19,320 views', image: 'https://picsum.photos/id/1095/400/400' },
    { title: 'Image 10', views: '11,640 views', image: 'https://picsum.photos/id/1105/400/400' },
    { title: 'Image 11', views: '14,980 views', image: 'https://picsum.photos/id/1115/400/400' },
    { title: 'Image 12', views: '20,500 views', image: 'https://picsum.photos/id/1125/400/400' },

    { title: 'Image 1', views: '12,000 views', image: 'https://picsum.photos/id/1015/400/400' },
    { title: 'Image 2', views: '15,000 views', image: 'https://picsum.photos/id/1025/400/400' },
    { title: 'Image 3', views: '9,500 views', image: 'https://picsum.photos/id/1035/400/400' },
    { title: 'Image 4', views: '18,200 views', image: 'https://picsum.photos/id/1045/400/400' },
    { title: 'Image 5', views: '21,100 views', image: 'https://picsum.photos/id/1055/400/400' },
    { title: 'Image 6', views: '7,890 views', image: 'https://picsum.photos/id/1065/400/400' },
    { title: 'Image 7', views: '13,450 views', image: 'https://picsum.photos/id/1075/400/400' },
    { title: 'Image 8', views: '16,780 views', image: 'https://picsum.photos/id/1085/400/400' },
    { title: 'Image 9', views: '19,320 views', image: 'https://picsum.photos/id/1095/400/400' },
    { title: 'Image 10', views: '11,640 views', image: 'https://picsum.photos/id/1105/400/400' },
    { title: 'Image 11', views: '14,980 views', image: 'https://picsum.photos/id/1115/400/400' },
    { title: 'Image 12', views: '20,500 views', image: 'https://picsum.photos/id/1125/400/400' },
    { title: 'Image 13', views: '10,250 views', image: 'https://picsum.photos/id/1135/400/400' },
    { title: 'Image 14', views: '17,890 views', image: 'https://picsum.photos/id/1145/400/400' },
    { title: 'Image 15', views: '22,340 views', image: 'https://picsum.photos/id/1155/400/400' },
    { title: 'Image 16', views: '8,760 views', image: 'https://picsum.photos/id/1165/400/400' },
    { title: 'Image 17', views: '14,220 views', image: 'https://picsum.photos/id/1175/400/400' },
    { title: 'Image 18', views: '19,870 views', image: 'https://picsum.photos/id/1185/400/400' },
    { title: 'Image 19', views: '12,980 views', image: 'https://picsum.photos/id/1195/400/400' },
    { title: 'Image 20', views: '16,450 views', image: 'https://picsum.photos/id/1205/400/400' },
    { title: 'Image 21', views: '23,100 views', image: 'https://picsum.photos/id/1215/400/400' },
    { title: 'Image 22', views: '9,830 views', image: 'https://picsum.photos/id/1225/400/400' },
    { title: 'Image 23', views: '15,670 views', image: 'https://picsum.photos/id/1235/400/400' },
    { title: 'Image 24', views: '18,990 views', image: 'https://picsum.photos/id/1245/400/400' },
    { title: 'Image 25', views: '13,520 views', image: 'https://picsum.photos/id/1255/400/400' },
    { title: 'Image 26', views: '21,780 views', image: 'https://picsum.photos/id/1265/400/400' },
    { title: 'Image 27', views: '11,230 views', image: 'https://picsum.photos/id/1275/400/400' },
    { title: 'Image 28', views: '17,340 views', image: 'https://picsum.photos/id/1285/400/400' },
    { title: 'Image 29', views: '24,560 views', image: 'https://picsum.photos/id/1295/400/400' },
    { title: 'Image 30', views: '10,890 views', image: 'https://picsum.photos/id/1305/400/400' },
    { title: 'Image 31', views: '16,120 views', image: 'https://picsum.photos/id/1315/400/400' },
    { title: 'Image 32', views: '20,450 views', image: 'https://picsum.photos/id/1325/400/400' },
    { title: 'Image 33', views: '14,670 views', image: 'https://picsum.photos/id/1335/400/400' },
    { title: 'Image 34', views: '22,890 views', image: 'https://picsum.photos/id/1345/400/400' },
    { title: 'Image 35', views: '12,340 views', image: 'https://picsum.photos/id/1355/400/400' },
    { title: 'Image 36', views: '18,560 views', image: 'https://picsum.photos/id/1365/400/400' },
    { title: 'Image 37', views: '25,100 views', image: 'https://picsum.photos/id/1375/400/400' },
    { title: 'Image 38', views: '11,780 views', image: 'https://picsum.photos/id/1385/400/400' },
    { title: 'Image 39', views: '17,230 views', image: 'https://picsum.photos/id/1395/400/400' },
    { title: 'Image 40', views: '21,670 views', image: 'https://picsum.photos/id/1405/400/400' },
    { title: 'Image 41', views: '15,890 views', image: 'https://picsum.photos/id/1415/400/400' },
    { title: 'Image 42', views: '23,450 views', image: 'https://picsum.photos/id/1425/400/400' },
    { title: 'Image 43', views: '13,120 views', image: 'https://picsum.photos/id/1435/400/400' },
    { title: 'Image 44', views: '19,340 views', image: 'https://picsum.photos/id/1445/400/400' },
    { title: 'Image 45', views: '26,780 views', image: 'https://picsum.photos/id/1455/400/400' },
    { title: 'Image 46', views: '12,670 views', image: 'https://picsum.photos/id/1465/400/400' },
    { title: 'Image 47', views: '18,120 views', image: 'https://picsum.photos/id/1475/400/400' },
    { title: 'Image 48', views: '22,340 views', image: 'https://picsum.photos/id/1485/400/400' },
    { title: 'Image 49', views: '16,780 views', image: 'https://picsum.photos/id/1495/400/400' },
    { title: 'Image 50', views: '24,120 views', image: 'https://picsum.photos/id/1505/400/400' },
    { title: 'Image 51', views: '14,450 views', image: 'https://picsum.photos/id/1515/400/400' },
    { title: 'Image 52', views: '20,670 views', image: 'https://picsum.photos/id/1525/400/400' },
    { title: 'Image 53', views: '27,890 views', image: 'https://picsum.photos/id/1535/400/400' },
    { title: 'Image 54', views: '13,780 views', image: 'https://picsum.photos/id/1545/400/400' },
    { title: 'Image 55', views: '19,230 views', image: 'https://picsum.photos/id/1555/400/400' },
    { title: 'Image 56', views: '23,560 views', image: 'https://picsum.photos/id/1565/400/400' },
    { title: 'Image 57', views: '17,890 views', image: 'https://picsum.photos/id/1575/400/400' },
    { title: 'Image 58', views: '25,340 views', image: 'https://picsum.photos/id/1585/400/400' },
    { title: 'Image 59', views: '15,670 views', image: 'https://picsum.photos/id/1595/400/400' },
    { title: 'Image 60', views: '21,890 views', image: 'https://picsum.photos/id/1605/400/400' }

];

let currentPage = 1;
const itemsPerPage = 12;
let filteredData = [...galleryData];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('imageModal');
const closeModal = document.getElementById('closeModal');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderGallery() {
    gallery.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filteredData.slice(start, end);

    pageItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <div class="gallery-item-info">
                        <div class="gallery-item-title">${item.title}</div>
                        <div class="gallery-item-views">${item.views}</div>
                    </div>
                `;
        div.addEventListener('click', () => openModal(item));
        gallery.appendChild(div);
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    document.getElementById('currentPage').textContent = currentPage;
    document.getElementById('totalPages').textContent = totalPages;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

function openModal(item) {
    document.getElementById('modalImage').src = item.image;
    document.getElementById('modalTitle').textContent = `${item.title} - ${item.views}`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function searchGallery() {
    const query = searchInput.value.toLowerCase();
    filteredData = galleryData.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.views.toLowerCase().includes(query)
    );
    currentPage = 1;
    renderGallery();
}

// Event Listeners
closeModal.addEventListener('click', closeModalFunc);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
});

searchBtn.addEventListener('click', searchGallery);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchGallery();
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderGallery();
        window.scrollTo(0, 0);
    }
});

nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderGallery();
        window.scrollTo(0, 0);
    }
});

// Initial render
renderGallery();