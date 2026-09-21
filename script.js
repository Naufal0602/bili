const menuBtn=document.getElementById('menuBtn'), navLinks=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const sections=[...document.querySelectorAll('main section')];
const links=[...document.querySelectorAll('.nav-links a')];
const setActive=()=>{let current='beranda';sections.forEach(s=>{if(scrollY>=s.offsetTop-130)current=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))};
window.addEventListener('scroll',setActive);setActive();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const modal=document.getElementById('modal'), modalImg=document.getElementById('modalImg');
document.querySelectorAll('.gallery img').forEach(img=>img.addEventListener('click',()=>{modalImg.src=img.src;modalImg.alt=img.alt;modal.classList.add('show')}));
document.getElementById('closeModal').addEventListener('click',()=>modal.classList.remove('show'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});

const contactForm=document.getElementById('contactForm');
const formStatus=document.getElementById('formStatus');
const schoolWhatsApp='34912345678'; // contoh nomor sekolah
const schoolEmail='info@smkkaryadinata.example';

contactForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const nama=document.getElementById('nama').value.trim();
  const email=document.getElementById('email').value.trim();
  const pesan=document.getElementById('pesan').value.trim();
  const text=`Halo SMK Karya Dinata,%0A%0ANama: ${encodeURIComponent(nama)}%0AEmail: ${encodeURIComponent(email)}%0A%0APesan:%0A${encodeURIComponent(pesan)}`;
  formStatus.textContent='Membuka WhatsApp untuk mengirim pesan...';
  window.open(`https://wa.me/${schoolWhatsApp}?text=${text}`,'_blank');
});
document.getElementById('emailBtn').addEventListener('click',()=>{
  const nama=document.getElementById('nama').value.trim();
  const email=document.getElementById('email').value.trim();
  const pesan=document.getElementById('pesan').value.trim();
  if(!nama || !email || !pesan){formStatus.textContent='Lengkapi nama, email, dan pesan terlebih dahulu.';return}
  const subject=encodeURIComponent('Pesan dari Website SMK Karya Dinata');
  const body=encodeURIComponent(`Nama: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`);
  window.location.href=`mailto:${schoolEmail}?subject=${subject}&body=${body}`;
});

document.getElementById('year').textContent=new Date().getFullYear();