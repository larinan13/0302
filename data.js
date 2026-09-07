// База данных номеров
const rooms = [
    { id:1, category:'Стандарт', title:'Стандарт 2-местный', price:4500, 
      img:'https://images.unsplash.com/photo-1551632811-561732d4e306?w=400&h=300&fit=crop', 
      features:['2 места','TV','Wi-Fi'] },
    { id:2, category:'Комфорт', title:'Комфорт с видом', price:6500, 
      img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop', 
      features:['2 места','Балкон','Wi-Fi'] },
    { id:3, category:'Люкс', title:'Люкс Премиум', price:12000, 
      img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop', 
      features:['Спальня','Гостиная','Джакузи'] },
    { id:4, category:'Стандарт', title:'Стандарт эконом', price:3500, 
      img:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop', 
      features:['1 место','TV','Wi-Fi'] },
    { id:5, category:'Комфорт', title:'Семейный комфорт', price:8500, 
      img:'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop', 
      features:['4 места','Детская','Wi-Fi'] },
    { id:6, category:'Люкс', title:'Президентский люкс', price:25000, 
      img:'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop', 
      features:['2 спальни','Сауна','Консьерж'] },
    { id:7, category:'Стандарт', title:'Стандарт с балконом', price:5000, 
      img:'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop', 
      features:['2 места','Балкон','TV'] },
    { id:8, category:'Комфорт', title:'Комфорт повышенный', price:7500, 
      img:'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=400&h=300&fit=crop', 
      features:['3 места','Кондиционер','Wi-Fi'] },
    { id:9, category:'Люкс', title:'Люкс с террасой', price:15000, 
      img:'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop', 
      features:['Терраса','Джакузи','Консьерж'] },
    { id:10, category:'Президентский', title:'Президентский вид', price:35000, 
      img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop', 
      features:['3 спальни','Бильярд','Консьерж'] }
];

// Вспомогательные функции
function shuffle(arr) { 
    return [...arr].sort(() => Math.random() - 0.5); 
}

function getRandom(arr, n) { 
    return shuffle(arr).slice(0, n); 
}

function renderRooms(data, containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    
    if (data.length === 0) {
        el.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:30px; background:#fff; border-radius:12px;">Нет номеров</p>`;
        return;
    }
    
    el.innerHTML = data.map(r => `
        <div class="room">
            <img src="${r.img}" alt="${r.title}" 
                 onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect fill=%22%23ddd%22 width=%22400%22 height=%22300%22/><text fill=%22%23999%22 x=%2250%22 y=%22150%22>Фото</text></svg>'">
            <div class="room-body">
                <span class="cat">${r.category}</span>
                <h3>${r.title}</h3>
                <div class="price">${r.price.toLocaleString()} ₽/сут</div>
                <div class="feat">${r.features.map(f => `<span>${f}</span>`).join('')}</div>
                <a href="booking.html?id=${r.id}" class="btn">Забронировать</a>
            </div>
        </div>
    `).join('');
}
