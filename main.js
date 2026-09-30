const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
menuToggle?.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));

const mallaModal=document.getElementById('mallaModal');
document.getElementById('mallaBtn')?.addEventListener('click',()=>{mallaModal?.classList.add('show');mallaModal?.setAttribute('aria-hidden','false');});
document.getElementById('mallaModalClose')?.addEventListener('click',()=>{mallaModal?.classList.remove('show');mallaModal?.setAttribute('aria-hidden','true');});
mallaModal?.addEventListener('click',e=>{if(e.target===mallaModal){mallaModal.classList.remove('show');mallaModal.setAttribute('aria-hidden','true');}});
document.querySelector('.malla-zoom-frame img')?.addEventListener('click',()=>{const img=document.querySelector('.malla-zoom-frame img'); if(img) img.style.width = img.style.width === '100%' ? 'auto' : '100%';});
