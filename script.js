// ====== HAMBURGER MENU ======
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger?.addEventListener("click", ()=> navLinks.classList.toggle("show"));

// ====== DARK/LIGHT MODE ======
const modeToggle = document.getElementById("modeToggle");
modeToggle?.addEventListener("click", ()=>{
  document.body.classList.toggle("light");
  modeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// ====== SLIDER ======
const slider = document.getElementById("slider");
if(slider){
  const sliderPhotos = ["slide1.jpg","slide2.jpg","slide3.jpg"];
  sliderPhotos.forEach((img,i)=>{
    const el = document.createElement("img");
    el.src = `assets/images/${img}`;
    el.alt = img;
    if(i===0) el.classList.add("active");
    slider.appendChild(el);
  });
  let slideIndex = 0;
  const slideImgs = slider.querySelectorAll("img");
  function showSlide(i){
    slideImgs.forEach(img=>img.classList.remove("active"));
    slideIndex = (i + slideImgs.length) % slideImgs.length;
    slideImgs[slideIndex].classList.add("active");
  }
  setInterval(()=>showSlide(slideIndex+1),3000);
}

// ====== GALLERY ======
const gallery = document.getElementById("gallery");
if(gallery){
  const totalPhotos = 50;
  const galleryPhotos = Array.from({length:totalPhotos},(_,i)=>`photo${i+1}.jpg`);
  galleryPhotos.forEach(img=>{
    const el = document.createElement("img");
    el.src = `assets/images/${img}`;
    el.alt = img;
    gallery.appendChild(el);
    el.onload = ()=> el.classList.add("show");
  });

  // ====== LIGHTBOX ======
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".close");
  const prevBtn = lightbox.querySelector(".prev");
  const nextBtn = lightbox.querySelector(".next");
  let current = 0;

  function showImage(i){
    current = (i + galleryPhotos.length) % galleryPhotos.length;
    lightboxImg.src = `assets/images/${galleryPhotos[current]}`;
  }

  gallery.querySelectorAll("img").forEach((img,i)=>{
    img.addEventListener("click", ()=>{
      showImage(i);
      lightbox.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", ()=> lightbox.style.display="none");
  prevBtn.addEventListener("click", ()=> showImage(current-1));
  nextBtn.addEventListener("click", ()=> showImage(current+1));

  document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape") lightbox.style.display="none";
    if(e.key==="ArrowLeft") showImage(current-1);
    if(e.key==="ArrowRight") showImage(current+1);
  });
}

