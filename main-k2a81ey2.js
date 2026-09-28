function c(o,{ok:d="Yes, continue",danger:r=!0}={}){return new Promise((s)=>{let e=document.createElement("div");e.className="modal-back",e.innerHTML=`<div class="modal" role="alertdialog" aria-modal="true" style="max-width:420px">
      <div class="card-b" style="font-size:15px"></div>
      <div class="card-f row" style="justify-content:flex-end;gap:8px">
        <button class="btn" data-a="no">Cancel</button>
        <button class="btn ${r?"btn-danger":"btn-primary"}" data-a="yes"></button>
      </div></div>`,e.querySelector(".card-b").textContent=o,e.querySelector("[data-a=yes]").textContent=d;let a=(t)=>{e.remove(),document.removeEventListener("keydown",n),s(t)},n=(t)=>{if(t.key==="Escape")a(!1)};e.addEventListener("mousedown",(t)=>{if(t.target===e)a(!1)}),e.querySelector("[data-a=no]").onclick=()=>a(!1),e.querySelector("[data-a=yes]").onclick=()=>a(!0),document.addEventListener("keydown",n),document.body.appendChild(e),e.querySelector("[data-a=yes]").focus()})}
export{c as Za};
