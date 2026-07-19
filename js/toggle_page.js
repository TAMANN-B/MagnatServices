const btnVoir_IT= document.getElementById("detail_IT");
const contenu_IT= document.getElementById("IT_zone");

btnVoir_IT.addEventListener("click", function(){
    contenu_IT.classList.remove("d-none");
    contenu_Infra.classList.add("d-none");
    contenu_RT.classList.add("d-none");
    contenu_DEV.classList.add("d-none");
    contenu_SV.classList.add("d-none");
    contenu_CONS.classList.add("d-none");
    contenu_Ennergie.classList.add("d-none");
    contenu_Impress.classList.add('d-none');
})


const btnVoir_Infra= document.getElementById("detail_Infra");
const contenu_Infra= document.getElementById("Infra_zone");

btnVoir_Infra.addEventListener("click", function(){
    contenu_Infra.classList.remove("d-none");
    contenu_RT.classList.add("d-none");
    contenu_DEV.classList.add("d-none");
    contenu_SV.classList.add("d-none");
    contenu_CONS.classList.add("d-none");
    contenu_IT.classList.add("d-none");
    contenu_Ennergie.classList.add("d-none");
    contenu_Impress.classList.add('d-none');
})

const btnbtnVoir_RT= document.getElementById("detail_RT");
const contenu_RT= document.getElementById("Telecom_zone");

btnbtnVoir_RT.addEventListener("click", function(){
    contenu_RT.classList.remove("d-none");
    contenu_Infra.classList.add("d-none");
    contenu_DEV.classList.add("d-none");
    contenu_SV.classList.add("d-none");
    contenu_CONS.classList.add("d-none");
    contenu_IT.classList.add("d-none");
    contenu_Ennergie.classList.add("d-none");
    contenu_Impress.classList.add('d-none');
})

const btnbtnVoir_DEV= document.getElementById("detail_LOGICEL");
const contenu_DEV= document.getElementById("Logiciel_zone");

btnbtnVoir_DEV.addEventListener("click", function(){
    contenu_DEV.classList.remove("d-none");
    contenu_Infra.classList.add("d-none");
    contenu_RT.classList.add("d-none");
    contenu_SV.classList.add("d-none");
    contenu_CONS.classList.add("d-none");
    contenu_IT.classList.add("d-none");
    contenu_Ennergie.classList.add("d-none");
    contenu_Impress.classList.add('d-none');
})

const btnbtnVoir_SV= document.getElementById("detail_SV");
const contenu_SV= document.getElementById("Vente_zone");

btnbtnVoir_SV.addEventListener("click", function(){
    contenu_SV.classList.remove("d-none");
    contenu_Infra.classList.add("d-none");
    contenu_RT.classList.add("d-none");
    contenu_DEV.classList.add("d-none");
    contenu_CONS.classList.add("d-none");
    contenu_IT.classList.add("d-none");
    contenu_Ennergie.classList.add("d-none");
    contenu_Impress.classList.add('d-none');
})

const btnbtnVoir_CONS= document.getElementById("detail_Cons");
const contenu_CONS= document.getElementById("Concierge_zone");

btnbtnVoir_CONS.addEventListener("click", function(){
    contenu_CONS.classList.remove("d-none");
    contenu_Infra.classList.add("d-none");
    contenu_RT.classList.add("d-none");
    contenu_DEV.classList.add("d-none");
    contenu_SV.classList.add("d-none");
    contenu_IT.classList.add("d-none");
    contenu_Ennergie.classList.add("d-none");
    contenu_Impress.classList.add('d-none');
})

const btnVoir_Energie= document.getElementById("detail_Energie");
const contenu_Ennergie= document.getElementById("energie_renouvau_zone");

btnVoir_Energie.addEventListener('click', function(){
    contenu_CONS.classList.add("d-none");
    contenu_Infra.classList.add("d-none");
    contenu_RT.classList.add("d-none");
    contenu_DEV.classList.add("d-none");
    contenu_SV.classList.add("d-none");
    contenu_IT.classList.add("d-none");
    contenu_Ennergie.classList.remove("d-none");
    contenu_Impress.classList.add('d-none');
})

const btnVoir_Impress= document.getElementById("detail_Impr");
const contenu_Impress= document.getElementById("imprimerie_zone_detail");

btnVoir_Impress.addEventListener('click', function(){
    contenu_CONS.classList.add("d-none");
    contenu_Infra.classList.add("d-none");
    contenu_RT.classList.add("d-none");
    contenu_DEV.classList.add("d-none");
    contenu_SV.classList.add("d-none");
    contenu_IT.classList.add("d-none");
    contenu_Ennergie.classList.add("d-none");
    contenu_Impress.classList.remove('d-none');
})