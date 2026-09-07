// ============ БАЗА ДАННЫХ НОМЕРОВ ============
const rooms = [
    { 
        id: 1, 
        category: 'Стандарт', 
        title: 'Стандарт 2-местный', 
        price: 4500, 
        img: 'https://images.unsplash.com/photo-1551632811-561732d4e306?w=400&h=300&fit=crop', 
        features: ['2 спальных места', 'Телевизор', 'Wi-Fi', 'Кондиционер'],
        desc: 'Уютный номер для комфортного проживания' 
    },
    { 
        id: 2, 
        category: 'Комфорт', 
        title: 'Комфорт с видом на город', 
        price: 6500, 
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop', 
        features: ['2 спальных места', 'Балкон', 'Мини-бар', 'Wi-Fi'],
        desc: 'Просторный номер с панорамным видом' 
    },
    { 
        id: 3, 
        category: 'Люкс', 
        title: 'Люкс Премиум', 
        price: 12000, 
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop', 
        features: ['Спальня', 'Гостиная', 'Джакузи', 'Консьерж'],
        desc: 'Роскошный номер с полным сервисом' 
    },
    { 
        id: 4, 
        category: 'Стандарт', 
        title: 'Стандарт эконом', 
        price: 3500, 
        img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop', 
        features: ['1 спальное место', 'Телевизор', 'Wi-Fi'],
        desc: 'Бюджетный вариант для командировок' 
    },
    { 
        id: 5, 
        category: 'Комфорт', 
        title: 'Семейный комфорт', 
        price: 8500, 
        img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop', 
        features: ['4 спальных места', 'Детская кроватка', 'Игровая зона', 'Wi-Fi'],
        desc: 'Идеальный номер для семьи с детьми' 
    },
    { 
        id: 6, 
        category: 'Люкс', 
        title: 'Президентский люкс', 
        price: 25000, 
        img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop', 
        features: ['2 спальни', 'Гостиная', 'Сауна', 'Консьерж 24/7'],
        desc: 'Эксклюзивный номер для особых гостей' 
    },
    { 
        id: 7, 
        category: 'Стандарт', 
        title: 'Стандарт с балконом', 
        price: 5000, 
        img: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop', 
        features: ['2 спальных места', 'Балкон', 'Телевизор', 'Wi-Fi'],
        desc: 'Свежий воздух и уютный балкон' 
    },
    { 
        id: 8, 
        category: 'Комфорт', 
        title: 'Комфорт повышенный', 
        price: 7500, 
        img: 'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=400&h=300&fit=crop', 
        features: ['3 спальных места', 'Кондиционер', 'Мини-бар', 'Wi-Fi'],
        desc: 'Просторный номер с дополнительными удобствами' 
    },
    { 
        id: 9, 
        category: 'Люкс', 
        title: 'Люкс с террасой', 
        price: 15000, 
        img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop', 
        features: ['Спальня', 'Гостиная', 'Терраса', 'Джакузи'],
        desc: 'Номер с частной террасой и видом на сад' 
    },
    { 
        id: 10, 
        category: 'Президентский', 
        title: 'Президентский с видом', 
        price: 35000, 
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop', 
        features: ['3 спальни', 'Большая гостиная', 'Бильярд', 'Консьерж'],
        desc: 'Номер высшего класса с полным сервисом' 
    }
];

// ============ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ============
function shuffle(arr) { 
    return [...arr].sort(() => Math.random() - 0.5); 
}

function getRandom(arr, n) { 
    return shuffle(arr).slice(0, n); 
}

function getRoomById(id) {
    return rooms.find(r => r.id === id);
}

// ============ ОТОБРАЖЕНИЕ НОМЕРОВ ============
function renderRooms(data, containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    
    if (data.length === 0) {
        el.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:50px; background:#fff; border-radius:18px;">
                <p style="font-size:1.1rem; color:#999;">😕 Нет номеров, соответствующих выбранным категориям</p>
                <button onclick="resetFilter && resetFilter()" class="btn" style="margin-top:15px; width:auto; padding:10px 30px; background:#667eea; color:#fff; border:none; border-radius:30px; cursor:pointer;">Сбросить фильтр</button>
            </div>
        `;
        return;
    }
    
    el.innerHTML = data.map(r => `
        <div class="room" data-id="${r.id}">
            <img class="room-img" src="${r.img}" alt="${r.title}" 
                 onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22220%22><rect fill=%22%23e8ecf1%22 width=%22400%22 height=%22220%22/><text fill=%22%23999%22 x=%2250%22 y=%22120%22 font-size=%2220%22>Фото номера</text></svg>'">
            <div class="room-body">
                <span class="room-cat">${r.category}</span>
                <h3 class="room-title">${r.title}</h3>
                <p class="room-desc">${r.desc}</p>
                <div class="room-price">${r.price.toLocaleString()} ₽ <small>/ сутки</small></div>
                <div class="room-feat">${r.features.map(f => `<span>${f}</span>`).join('')}</div>
                <a href="booking.html?id=${r.id}" class="btn">Забронировать</a>
            </div>
        </div>
    `).join('');
}
