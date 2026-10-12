/* Sumbu Roastery — filter kategori, pencarian, toast daftar pesanan */
var P=[
{n:"Mandailing Lintong",o:"Sumatera Utara",t:"Single Origin",p:"Giling Basah",r:3,c:"#6b3a1b",bg:"#e9d6bf",s:"Dark chocolate, cedar, brown sugar",h:135000},
{n:"Gayo Wine Natural",o:"Aceh Tengah",t:"Single Origin",p:"Natural",r:2,c:"#7a4524",bg:"#ecd0c4",s:"Red wine, blackberry, cacao nibs",h:158000},
{n:"Toraja Sapan",o:"Sulawesi Selatan",t:"Single Origin",p:"Washed",r:3,c:"#5e3217",bg:"#dfd5bf",s:"Spice, herbal, dark caramel",h:148000},
{n:"Kintamani Honey",o:"Bali",t:"Single Origin",p:"Honey",r:2,c:"#85502a",bg:"#f1dfb8",s:"Orange, honey, jasmine",h:142000},
{n:"Flores Bajawa",o:"Nusa Tenggara Timur",t:"Single Origin",p:"Washed",r:3,c:"#6b3a1b",bg:"#d9dfc8",s:"Nutty, milk chocolate, tobacco",h:132000},
{n:"Java Preanger",o:"Jawa Barat",t:"Single Origin",p:"Washed",r:2,c:"#7a4524",bg:"#e4d3e0",s:"Floral, peach, black tea",h:138000},
{n:"Medan Morning Blend",o:"Sumatera · Jawa",t:"Blend",p:"Campuran",r:4,c:"#40220f",bg:"#d6c6b4",s:"Bold, roasted nuts, bittersweet",h:118000},
{n:"Espresso Rumah",o:"Gayo · Flores · Toraja",t:"Blend",p:"Campuran",r:4,c:"#33190a",bg:"#cfc0ae",s:"Dense crema, toffee, dark fruit",h:125000}];
var grid=document.getElementById("grid"),cnt=0,flt="semua",term="",timer;
function slug(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
function rp(n){return "Rp "+n.toLocaleString("id-ID")}
function dots(r){var s="";for(var i=1;i<=5;i++)s+='<i class="'+(i<=r?"f":"")+'"></i>';return '<span class="dots" title="Tingkat sangrai '+r+'/5">'+s+'</span>'}
function render(){
 var list=P.filter(function(x){return(flt=="semua"||x.t==flt)&&(x.n+x.o).toLowerCase().indexOf(term)>-1});
 grid.innerHTML=list.length?list.map(function(x){
 return '<article class="card"><div class="art" style="background:'+x.bg+'"><img class="photo" src="img/produk/'+slug(x.n)+'.jpg" alt="'+x.n+'" loading="lazy" onerror="this.remove()"><span class="tag">'+x.p+'</span><svg viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="50" cy="50" rx="30" ry="40" transform="rotate(25 50 50)" fill="'+x.c+'"/><path d="M50 12 C62 35 38 62 52 90" transform="rotate(25 50 50)" stroke="rgba(0,0,0,.45)" stroke-width="4" fill="none" stroke-linecap="round"/></svg></div>'+
 '<div class="body"><span class="origin">'+x.o+'</span><h3>'+x.n+'</h3><p class="notes">'+x.s+'</p><div class="meta"><span>Sangrai</span>'+dots(x.r)+'</div>'+
 '<div class="buy"><span class="price">'+rp(x.h)+' <small>/250g</small></span><button class="add" data-n="'+x.n+'">+ Tambah</button></div></div></article>'}).join(""):'<p class="empty">Tidak ada produk yang cocok.</p>'}
document.getElementById("tools").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;
 document.querySelectorAll(".chip").forEach(function(c){c.classList.remove("on")});b.classList.add("on");flt=b.dataset.f;render()});
document.getElementById("q").addEventListener("input",function(e){term=e.target.value.toLowerCase().trim();render()});
grid.addEventListener("click",function(e){var b=e.target.closest(".add");if(!b)return;
 cnt++;document.getElementById("count").textContent=cnt;var t=document.getElementById("toast");
 t.textContent=b.dataset.n+" ditambahkan ke daftar pesanan.";t.classList.add("show");clearTimeout(timer);timer=setTimeout(function(){t.classList.remove("show")},1800)});
document.getElementById("cartBtn").addEventListener("click",function(){document.getElementById("kontak").scrollIntoView({behavior:"smooth"})});
render();
