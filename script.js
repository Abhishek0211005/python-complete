// ==================== PRODUCT DATA ====================
const products = [
  // Fruits & Vegetables
  {id:1, name:"Fresh Apples",       emoji:"🍎", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:120, desc:"Crisp Shimla apples. Rich in fibre & vitamins.",          featured:true },
  {id:2, name:"Bananas (Dozen)",    emoji:"🍌", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:45,  desc:"Ripe, energy-packed bananas. Great for smoothies.",       featured:true },
  {id:3, name:"Broccoli",           emoji:"🥦", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:60,  desc:"Farm-fresh broccoli loaded with antioxidants.",           featured:false},
  {id:4, name:"Tomatoes (500g)",    emoji:"🍅", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:35,  desc:"Vine-ripened tomatoes perfect for curries.",              featured:false},
  {id:5, name:"Spinach Bunch",      emoji:"🥬", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:25,  desc:"Tender spinach leaves, freshly harvested.",               featured:false},
  {id:6, name:"Oranges (6 pcs)",    emoji:"🍊", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:80,  desc:"Juicy Nagpur oranges, high in Vitamin C.",                featured:true },
  {id:7, name:"Grapes (500g)",      emoji:"🍇", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:90,  desc:"Sweet seedless grapes, freshly packed.",                  featured:false},
  {id:8, name:"Watermelon",         emoji:"🍉", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:60,  desc:"Juicy whole watermelon. Perfect for summer.",             featured:false},
  {id:9, name:"Mango (6 pcs)",      emoji:"🥭", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:150, desc:"Alphonso mangoes — the king of fruits.",                  featured:true },
  {id:10,name:"Potatoes (1kg)",     emoji:"🥔", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:30,  desc:"Fresh farm potatoes. A kitchen essential.",               featured:false},
  {id:11,name:"Onions (1kg)",       emoji:"🧅", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:40,  desc:"Red onions, freshly sorted and cleaned.",                 featured:false},
  {id:12,name:"Garlic (250g)",      emoji:"🧄", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:55,  desc:"Fresh garlic bulbs, strong aroma and flavour.",           featured:false},
  {id:13,name:"Cauliflower",        emoji:"🥦", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:45,  desc:"Large fresh cauliflower head.",                           featured:false},
  {id:14,name:"Carrots (500g)",     emoji:"🥕", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:35,  desc:"Crunchy orange carrots. Rich in beta-carotene.",          featured:false},
  {id:15,name:"Cucumber (4 pcs)",   emoji:"🥒", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:30,  desc:"Cool, crisp cucumbers. Perfect for salads.",              featured:false},
  {id:16,name:"Lemon (6 pcs)",      emoji:"🍋", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:25,  desc:"Fresh lemons for cooking, drinks & dressings.",           featured:false},
  {id:17,name:"Pineapple",          emoji:"🍍", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:70,  desc:"Sweet tropical pineapple, freshly sourced.",              featured:false},
  {id:18,name:"Peas (500g)",        emoji:"🫛", category:"Fruits & Vegetables", brand:"Local",    type:"veg",    price:40,  desc:"Green peas, shelled and fresh.",                          featured:false},
  // Dairy
  {id:19,name:"Amul Full Cream Milk",emoji:"🥛",category:"Dairy Products",      brand:"Amul",    type:"veg",    price:68,  desc:"Fresh full cream milk, 1 litre. Pasteurised.",            featured:true },
  {id:20,name:"Amul Butter (500g)", emoji:"🧈", category:"Dairy Products",      brand:"Amul",    type:"veg",    price:245, desc:"Creamy salted butter. Perfect for toast & cooking.",      featured:false},
  {id:21,name:"Paneer (200g)",      emoji:"🧀", category:"Dairy Products",      brand:"Amul",    type:"veg",    price:90,  desc:"Soft fresh cottage cheese. Great for curries.",           featured:false},
  {id:22,name:"Dahi / Curd (400g)", emoji:"🫙", category:"Dairy Products",      brand:"Amul",    type:"veg",    price:45,  desc:"Thick creamy curd made from full cream milk.",            featured:false},
  {id:23,name:"Nestle Yogurt",      emoji:"🍦", category:"Dairy Products",      brand:"Nestle",  type:"veg",    price:55,  desc:"Smooth yogurt with probiotic cultures. Mango flavour.",  featured:false},
  {id:24,name:"Amul Cheese Slices", emoji:"🧀", category:"Dairy Products",      brand:"Amul",    type:"veg",    price:115, desc:"Processed cheese slices. Great for sandwiches.",         featured:true },
  {id:25,name:"Amul Ghee (500ml)",  emoji:"🫙", category:"Dairy Products",      brand:"Amul",    type:"veg",    price:290, desc:"Pure cow ghee. Rich, aromatic & traditionally made.",     featured:false},
  {id:26,name:"Lassi (Sweet, 200ml)",emoji:"🥤",category:"Dairy Products",      brand:"Amul",    type:"veg",    price:30,  desc:"Chilled sweet lassi. A refreshing Indian drink.",         featured:false},
  {id:27,name:"Skimmed Milk (1L)",  emoji:"🥛", category:"Dairy Products",      brand:"Nestle",  type:"veg",    price:58,  desc:"Low-fat skimmed milk. Ideal for health-conscious diet.", featured:false},
  {id:28,name:"Amul Kool 200ml",    emoji:"🍫", category:"Dairy Products",      brand:"Amul",    type:"veg",    price:25,  desc:"Chocolate flavoured milk. Kids' favourite.",              featured:false},
  // Snacks
  {id:29,name:"Haldiram Aloo Bhujia",emoji:"🥜",category:"Snacks",             brand:"Haldiram", type:"veg",    price:60,  desc:"Crispy aloo bhujia, a classic Indian snack.",             featured:true },
  {id:30,name:"Haldiram Namkeen Mix",emoji:"🫘",category:"Snacks",             brand:"Haldiram", type:"veg",    price:75,  desc:"Mixed namkeen — perfect for evening snacking.",           featured:false},
  {id:31,name:"Chicken Chips",      emoji:"🍗", category:"Snacks",             brand:"Nestle",   type:"nonveg", price:40,  desc:"Crunchy chicken flavoured chips. Great party snack.",     featured:false},
  {id:32,name:"Digestive Biscuits", emoji:"🍪", category:"Snacks",             brand:"Nestle",   type:"veg",    price:55,  desc:"Whole wheat digestive biscuits. Healthy & tasty.",        featured:false},
  {id:33,name:"Haldiram Moong Dal", emoji:"🟡", category:"Snacks",             brand:"Haldiram", type:"veg",    price:50,  desc:"Crunchy fried moong dal. Classic tea-time snack.",        featured:false},
  {id:34,name:"Kurkure Masala",     emoji:"🌶️", category:"Snacks",             brand:"Nestle",   type:"veg",    price:20,  desc:"Spicy masala kurkure. Everyone's favourite munch.",       featured:false},
  {id:35,name:"Lays Classic (large)",emoji:"🥔",category:"Snacks",             brand:"Nestle",   type:"veg",    price:30,  desc:"Classic salted potato chips. Light & crispy.",            featured:false},
  {id:36,name:"Haldiram Soan Papdi",emoji:"🍬", category:"Snacks",             brand:"Haldiram", type:"veg",    price:130, desc:"Flaky melt-in-mouth soan papdi. Festival favourite.",     featured:false},
  {id:37,name:"Beef Jerky 50g",     emoji:"🥩", category:"Snacks",             brand:"Local",    type:"nonveg", price:120, desc:"Smoked beef jerky. High protein, low carb snack.",        featured:false},
  {id:38,name:"Roasted Peanuts 200g",emoji:"🥜",category:"Snacks",             brand:"Local",    type:"veg",    price:45,  desc:"Salted roasted peanuts. A guilt-free munch.",             featured:false},
  // Beverages
  {id:39,name:"Tropicana Orange",   emoji:"🧃", category:"Beverages",          brand:"Tropicana",type:"veg",    price:99,  desc:"100% real orange juice, no added sugar. 1L pack.",        featured:true },
  {id:40,name:"Tropicana Mixed Fruit",emoji:"🍹",category:"Beverages",         brand:"Tropicana",type:"veg",    price:99,  desc:"Refreshing mixed fruit juice. No preservatives.",         featured:false},
  {id:41,name:"Nestle Milo (400g)", emoji:"☕", category:"Beverages",          brand:"Nestle",   type:"veg",    price:180, desc:"Chocolate malt energy drink. Loved by all.",              featured:false},
  {id:42,name:"Green Tea (25 bags)",emoji:"🍵", category:"Beverages",          brand:"Local",    type:"veg",    price:120, desc:"Premium green tea bags. Rich in antioxidants.",           featured:false},
  {id:43,name:"Cold Coffee 200ml",  emoji:"☕", category:"Beverages",          brand:"Nestle",   type:"veg",    price:35,  desc:"Ready-to-drink chilled cold coffee. Smooth & creamy.",    featured:false},
  {id:44,name:"Coconut Water 200ml",emoji:"🥥", category:"Beverages",          brand:"Local",    type:"veg",    price:40,  desc:"Natural tender coconut water. Hydrating & refreshing.",  featured:true },
  {id:45,name:"Masala Chai Mix",    emoji:"🍵", category:"Beverages",          brand:"Local",    type:"veg",    price:85,  desc:"Aromatic Indian masala chai premix. 20 servings.",        featured:false},
  {id:46,name:"Lemonade Syrup 750ml",emoji:"🍋",category:"Beverages",          brand:"Tropicana",type:"veg",    price:110, desc:"Concentrated lemonade syrup. Just mix with water.",       featured:false},
  {id:47,name:"Energy Drink 250ml", emoji:"⚡", category:"Beverages",          brand:"Local",    type:"veg",    price:99,  desc:"Caffeinated energy drink. Keeps you active all day.",     featured:false},
  // Household
  {id:48,name:"Surf Excel (1kg)",   emoji:"🧺", category:"Household Items",    brand:"Local",    type:"veg",    price:185, desc:"Powerful detergent powder. Removes tough stains.",        featured:false},
  {id:49,name:"Vim Dishwash Bar",   emoji:"🧽", category:"Household Items",    brand:"Local",    type:"veg",    price:40,  desc:"Effective dishwash bar with lime. Cuts grease easily.",   featured:false},
  {id:50,name:"Floor Cleaner 1L",   emoji:"🧹", category:"Household Items",    brand:"Local",    type:"veg",    price:99,  desc:"Neem-based floor cleaner. Kills 99.9% germs.",            featured:false},
  {id:51,name:"Tissue Box (100 sheets)",emoji:"🗃️",category:"Household Items", brand:"Local",    type:"veg",    price:65,  desc:"Soft 2-ply facial tissues. 100 sheets per box.",          featured:false},
  {id:52,name:"Hand Wash 250ml",    emoji:"🧴", category:"Household Items",    brand:"Local",    type:"veg",    price:75,  desc:"Moisturising antibacterial hand wash.",                   featured:false},
  {id:53,name:"Toilet Cleaner 500ml",emoji:"🚿",category:"Household Items",    brand:"Local",    type:"veg",    price:65,  desc:"Thick bleach toilet cleaner. Removes stains & odour.",   featured:false},
  {id:54,name:"Garbage Bags (30pc)",emoji:"🛍️", category:"Household Items",    brand:"Local",    type:"veg",    price:55,  desc:"Large black garbage bags, 30-pack. Leak-proof.",          featured:false},
  {id:55,name:"Room Freshener 300ml",emoji:"💐",category:"Household Items",    brand:"Local",    type:"veg",    price:120, desc:"Long-lasting floral room freshener spray.",               featured:false},
];

// ==================== MOCK ORDERS (for tracking) ====================
const mockOrders = [
  {
    id:"FM-1001", date:"23 July 2026, 10:30 AM", status:"delivered", statusStep:4,
    items:[{name:"Fresh Apples",emoji:"🍎",qty:2,price:120},{name:"Amul Milk",emoji:"🥛",qty:1,price:68}],
    total:308, address:"42, Green Park, New Delhi - 110016",
    agent:"Ramesh Kumar · 📞 +91 98001 23456",
    times:["10:30 AM","10:38 AM","11:05 AM","12:10 PM"]
  },
  {
    id:"FM-1002", date:"23 July 2026, 1:15 PM", status:"out-for-delivery", statusStep:3,
    items:[{name:"Haldiram Bhujia",emoji:"🥜",qty:1,price:60},{name:"Tropicana Orange",emoji:"🧃",qty:2,price:99},{name:"Paneer 200g",emoji:"🧀",qty:1,price:90}],
    total:348, address:"15, Lajpat Nagar, New Delhi - 110024",
    agent:"Suresh Yadav · 📞 +91 98765 11223",
    times:["1:15 PM","1:25 PM","2:00 PM","—"]
  },
  {
    id:"FM-1003", date:"23 July 2026, 3:00 PM", status:"packing", statusStep:2,
    items:[{name:"Bananas",emoji:"🍌",qty:2,price:45},{name:"Amul Ghee",emoji:"🫙",qty:1,price:290}],
    total:380, address:"7, Rohini Sector 9, New Delhi - 110085",
    agent:"Being Assigned...",
    times:["3:00 PM","3:10 PM","—","—"]
  },
  {
    id:"FM-1004", date:"22 July 2026, 9:00 AM", status:"delivered", statusStep:4,
    items:[{name:"Mango 6pcs",emoji:"🥭",qty:1,price:150},{name:"Green Tea",emoji:"🍵",qty:1,price:120},{name:"Surf Excel",emoji:"🧺",qty:1,price:185}],
    total:455, address:"88, Dwarka Sector 10, New Delhi - 110075",
    agent:"Vijay Singh · 📞 +91 99887 66554",
    times:["9:00 AM","9:12 AM","9:45 AM","10:50 AM"]
  },
];

// ==================== STATE ====================
let cart = [];
let activeTab = 'all';
let currentModalProduct = null;
let orderHistory = [...mockOrders]; // Combined mock + placed orders

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderProducts(products);
  renderCart();
  renderRecentOrders();

  // Enter key on main search
  document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') searchProducts();
  });

  // Enter key on order tracking
  document.getElementById('orderSearchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') trackOrder();
  });
});

// ==================== RENDER FEATURED ====================
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  grid.innerHTML = products.filter(p => p.featured)
    .map(p => createCardHTML(p, 'col-6 col-md-4 col-lg-2')).join('');
}

// ==================== RENDER PRODUCTS ====================
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  const noRes = document.getElementById('noResults');
  if (list.length === 0) {
    grid.innerHTML = '';
    noRes.classList.remove('d-none');
  } else {
    noRes.classList.add('d-none');
    grid.innerHTML = list.map(p => createCardHTML(p, 'col-6 col-md-4 col-lg-3')).join('');
  }
}

// ==================== CARD HTML ====================
function createCardHTML(p, colClass) {
  const badge = p.type === 'veg'
    ? `<span class="badge-veg">🟢 Veg</span>`
    : `<span class="badge-nonveg">🔴 Non-Veg</span>`;
  return `
    <div class="${colClass}">
      <div class="card product-card h-100">
        <div class="card-img-top">${p.emoji}</div>
        <div class="card-body d-flex flex-column p-3">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="card-title mb-0" title="${p.name}">${p.name}</span>
            ${badge}
          </div>
          <p class="card-text">${p.brand} · ${p.category}</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <span class="product-price">₹${p.price}</span>
            <div class="d-flex gap-1">
              <button class="btn btn-sm btn-outline-success" onclick="openModal(${p.id})" title="Details">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn btn-sm btn-success" onclick="addToCart(${p.id})" title="Add to Cart">
                <i class="bi bi-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

// ==================== SEARCH (FIXED — no form submit) ====================
function searchProducts() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();

  // Reset filters & tab
  activeTab = 'all';
  document.querySelectorAll('.btn-cat').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.btn-cat')[0].classList.add('active');
  document.getElementById('filterType').value     = 'all';
  document.getElementById('filterCategory').value = 'all';
  document.getElementById('filterBrand').value    = 'all';
  document.getElementById('filterPrice').value    = 500;
  document.getElementById('priceVal').textContent = 500;

  if (!query) {
    renderProducts(products);
    document.getElementById('categories').scrollIntoView({behavior:'smooth'});
    return;
  }

  const results = products.filter(p =>
    p.name.toLowerCase().includes(query)     ||
    p.category.toLowerCase().includes(query) ||
    p.brand.toLowerCase().includes(query)    ||
    p.desc.toLowerCase().includes(query)     ||
    p.type.toLowerCase().includes(query)
  );

  renderProducts(results);
  document.getElementById('categories').scrollIntoView({behavior:'smooth'});

  if (results.length === 0) {
    showToast(`❌ No results for "${query}"`, 'bg-danger');
  } else {
    showToast(`🔍 ${results.length} product(s) found for "${query}"`);
  }
}

function resetSearch() {
  document.getElementById('searchInput').value = '';
  activeTab = 'all';
  document.querySelectorAll('.btn-cat').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.btn-cat')[0].classList.add('active');
  document.getElementById('filterType').value     = 'all';
  document.getElementById('filterCategory').value = 'all';
  document.getElementById('filterBrand').value    = 'all';
  document.getElementById('filterPrice').value    = 500;
  document.getElementById('priceVal').textContent = 500;
  renderProducts(products);
}

// ==================== FILTERS ====================
function applyFilters() {
  const type     = document.getElementById('filterType').value;
  const category = document.getElementById('filterCategory').value;
  const brand    = document.getElementById('filterBrand').value;
  const maxPrice = parseInt(document.getElementById('filterPrice').value);
  document.getElementById('searchInput').value = '';

  const filtered = products.filter(p => {
    const matchTab  = activeTab === 'all' || p.category === activeTab;
    const matchType = type === 'all'      || p.type === type;
    const matchCat  = category === 'all'  || p.category === category;
    const matchBrand= brand === 'all'     || p.brand === brand;
    const matchPrice= p.price <= maxPrice;
    return matchTab && matchType && matchCat && matchBrand && matchPrice;
  });
  renderProducts(filtered);
}

function filterByTab(cat, btn) {
  activeTab = cat;
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.btn-cat').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('filterCategory').value = cat === 'all' ? 'all' : cat;
  applyFilters();
}

['filterType','filterCategory','filterBrand'].forEach(id => {
  document.getElementById(id).addEventListener('change', applyFilters);
});

// ==================== MODAL ====================
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentModalProduct = p;

  document.getElementById('modalProductName').textContent = p.name;
  document.getElementById('modalProductEmoji').textContent = p.emoji;
  document.getElementById('modalName').textContent         = p.name;
  document.getElementById('modalDesc').textContent         = p.desc;
  document.getElementById('modalBrand').textContent        = p.brand;
  document.getElementById('modalCategory').textContent     = p.category;
  document.getElementById('modalPrice').textContent        = p.price;
  document.getElementById('modalQty').value                = 1;

  const typeBadge = document.getElementById('modalType');
  if (p.type === 'veg') {
    typeBadge.textContent = '🟢 Vegetarian';
    typeBadge.className   = 'badge bg-success fs-6 px-3 py-2';
  } else {
    typeBadge.textContent = '🔴 Non-Vegetarian';
    typeBadge.className   = 'badge bg-danger fs-6 px-3 py-2';
  }

  new bootstrap.Modal(document.getElementById('productModal')).show();
}

function addToCartFromModal() {
  if (!currentModalProduct) return;
  const qty = parseInt(document.getElementById('modalQty').value) || 1;
  addToCart(currentModalProduct.id, qty);
  bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
}

// ==================== CART ====================
function addToCart(id, qty = 1) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({...product, qty});
  }
  renderCart();
  showToast(`✅ ${product.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else renderCart();
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm('Clear all items from cart?')) {
    cart = [];
    renderCart();
  }
}

function checkout() {
  if (cart.length === 0) {
    showToast('⚠️ Your cart is empty!', 'bg-warning');
    return;
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const orderId = `FM-${1000 + orderHistory.length + 1}`;
  const now = new Date();
  const dateStr = now.toLocaleString('en-GB', {day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});

  const newOrder = {
    id: orderId,
    date: dateStr,
    status: 'packing',
    statusStep: 2,
    items: cart.map(i => ({name:i.name, emoji:i.emoji, qty:i.qty, price:i.price})),
    total: total,
    address: '42, Sample Address, New Delhi - 110001',
    agent: 'Being Assigned...',
    times: [dateStr.split(', ')[1], '—', '—', '—']
  };

  orderHistory.unshift(newOrder);
  alert(`🎉 Order Placed Successfully!\n\nOrder ID: ${orderId}\nTotal: ₹${total}\n\nTrack your order in the "Track Order" section!`);
  cart = [];
  renderCart();
  renderRecentOrders();

  const oc = bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas'));
  if (oc) oc.hide();
}

function renderCart() {
  const container  = document.getElementById('cartItems');
  const countBadge = document.getElementById('cartCount');
  const totalEl    = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  countBadge.textContent = totalItems;
  totalEl.textContent    = totalPrice;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-msg">
        <i class="bi bi-cart-x"></i>
        <p class="fw-semibold">Your cart is empty</p>
        <p class="text-secondary small">Add some fresh items!</p>
      </div>`;
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</div>
        <div class="cart-qty-control">
          <button class="btn btn-outline-secondary btn-sm" onclick="updateQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button class="btn btn-outline-secondary btn-sm" onclick="updateQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="cart-remove-btn" onclick="removeFromCart(${item.id})" title="Remove">
        <i class="bi bi-trash3-fill"></i>
      </button>
    </div>`).join('');
}

function showToast(msg, colorClass = 'bg-success') {
  const toastEl  = document.getElementById('cartToast');
  const toastMsg = document.getElementById('toastMsg');
  toastEl.className  = `toast align-items-center text-white border-0 ${colorClass}`;
  toastMsg.textContent = msg;
  new bootstrap.Toast(toastEl, {delay:2500}).show();
}

// ==================== ORDER TRACKING ====================
const statusConfig = {
  'packing':          {label:'Packing',         color:'bg-warning text-dark', step:2},
  'out-for-delivery': {label:'Out for Delivery', color:'bg-primary text-white',step:3},
  'delivered':        {label:'Delivered ✅',     color:'bg-success text-white', step:4},
  'order-placed':     {label:'Order Placed',     color:'bg-info text-white',    step:1},
};

function trackOrder() {
  const query = document.getElementById('orderSearchInput').value.trim().toUpperCase();
  if (!query) { showToast('⚠️ Please enter an Order ID', 'bg-warning'); return; }

  const order = orderHistory.find(o => o.id === query);
  if (!order) {
    showToast(`❌ Order "${query}" not found. Try FM-1001`, 'bg-danger');
    document.getElementById('trackResult').classList.add('d-none');
    return;
  }
  displayTrackResult(order);
}

function displayTrackResult(order) {
  const cfg = statusConfig[order.status] || statusConfig['order-placed'];

  document.getElementById('tOrderId').textContent   = order.id;
  document.getElementById('tOrderDate').textContent = '📅 ' + order.date;
  document.getElementById('tTotal').textContent     = order.total;
  document.getElementById('tAddress').textContent   = order.address;
  document.getElementById('tAgent').textContent     = order.agent;

  const badge = document.getElementById('tStatusBadge');
  badge.textContent = cfg.label;
  badge.className   = `badge fs-6 px-3 py-2 ${cfg.color}`;

  // Items list
  document.getElementById('tItems').innerHTML = order.items.map(i => `
    <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
      <span>${i.emoji} ${i.name} × ${i.qty}</span>
      <span class="fw-semibold text-success">₹${i.price * i.qty}</span>
    </div>`).join('');

  // Progress steps
  const stepLabels = ['Order Placed','Packing','Out for Delivery','Delivered'];
  const stepTimes  = order.times || ['—','—','—','—'];

  for (let i = 1; i <= 4; i++) {
    const stepEl     = document.getElementById(`step${i}`);
    const stepTimeEl = document.getElementById(`stepTime${i}`);
    stepTimeEl.textContent = stepTimes[i-1] || '—';
    stepEl.className = 'track-step ';
    if (i < order.statusStep)  stepEl.className += 'done';
    else if (i === order.statusStep) stepEl.className += 'active';
  }

  document.getElementById('trackResult').classList.remove('d-none');
  document.getElementById('track').scrollIntoView({behavior:'smooth'});
}

// ==================== RECENT ORDERS ====================
function renderRecentOrders() {
  const container = document.getElementById('recentOrders');
  if (orderHistory.length === 0) {
    container.innerHTML = '<p class="text-muted text-center">No orders yet. Start shopping!</p>';
    return;
  }

  container.innerHTML = orderHistory.slice(0, 4).map(o => {
    const cfg = statusConfig[o.status] || statusConfig['order-placed'];
    return `
      <div class="col-md-6 col-lg-3">
        <div class="order-mini-card" onclick="quickTrack('${o.id}')">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="order-id">${o.id}</span>
            <span class="badge ${cfg.color} order-status">${cfg.label}</span>
          </div>
          <p class="text-muted small mb-2">📅 ${o.date}</p>
          <p class="mb-2 small">${o.items.slice(0,2).map(i => i.emoji + ' ' + i.name).join(', ')}${o.items.length > 2 ? ` +${o.items.length-2} more` : ''}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="fw-bold text-success">₹${o.total}</span>
            <span class="text-success small fw-semibold">Track <i class="bi bi-arrow-right"></i></span>
          </div>
        </div>
      </div>`;
  }).join('');
}

function quickTrack(orderId) {
  document.getElementById('orderSearchInput').value = orderId;
  const order = orderHistory.find(o => o.id === orderId);
  if (order) displayTrackResult(order);
  document.getElementById('track').scrollIntoView({behavior:'smooth'});
}
