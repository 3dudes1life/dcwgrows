
(function(){
  const toggle=document.querySelector('#menuToggle,#dcwMenuToggle,.menu-toggle,.dcw-menu-toggle');
  const menu=document.querySelector('#menu,#dcwMenu,.menu,.dcw-menu');
  if(toggle&&menu){
    if(toggle.tagName!=='BUTTON'){toggle.setAttribute('role','button');toggle.setAttribute('tabindex','0')}
    const act=()=>{const open=menu.classList.toggle('active');toggle.setAttribute('aria-expanded',String(open));};
    toggle.addEventListener('click',act);toggle.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act();}});
  }
  const drop=document.querySelector('#dropdown,#dcwDropdown,.dropdown,.dcw-dropdown');
  const dropLink=document.querySelector('#gardeningLink,#dcwGardeningLink');
  if(drop&&dropLink){dropLink.addEventListener('click',e=>{if(matchMedia('(max-width:768px)').matches){e.preventDefault();drop.classList.toggle('active')}})}
  document.querySelectorAll('.plant-card').forEach(card=>{card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label','Open '+(card.innerText||'plant guide').trim());card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();card.click()}})});
  const search=document.getElementById('guideSearch');
  if(search){const cards=[...document.querySelectorAll('.plant-card')],status=document.getElementById('searchStatus');const filter=()=>{const q=search.value.trim().toLowerCase();let shown=0;cards.forEach(c=>{const ok=!q||c.innerText.toLowerCase().includes(q);c.style.display=ok?'':'none';if(ok)shown++});if(status)status.textContent=q?shown+' guide'+(shown===1?'':'s')+' found':''};search.addEventListener('input',filter)}
})();
