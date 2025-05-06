//LINKS del MENU principale
function ModalsView(event){
    const targetId= this.dataset.target;
    const modal=document.getElementById(targetId);
    if(modal){
        console.log("Cliccato");
        modal.classList.remove('hidden');
    }
}
function ModalsHidden(event){
    this.classList.add('hidden');
}
const buttons=document.querySelectorAll('#links a[data-target]');
for(let i=0;i<buttons.length;i++){
    const button=buttons[i];
    button.addEventListener('click',ModalsView);
}

const modals=document.querySelectorAll('.modal');
for(let i=0;i<modals.length;i++){
    const modal=modals[i];
    modal.addEventListener('click',ModalsHidden);
}

//Bottone ACCEDI e Cambio lingua e valuta
function ModalsView1(event){
    const targetId= this.dataset.modal;
    const modal=document.getElementById(targetId);
    if(modal){
        console.log("Cliccato");
        modal.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    }
}
function ModalHidden_Back(event){  //chiusura cliccando sullo sfondo
    document.body.classList.remove('no-scroll');
    this.classList.add('hidden');
}
function noModalClick(event){  //non si chiude se clicco sulla modale
    event.stopPropagation();
}


function onClickClose_Accedi(event){ //chiudo con la X-Accedi
    document.body.classList.remove('no-scroll');
    const mymodal=document.querySelector('#modal-view-Accedi');
    mymodal.classList.add('hidden');
}

function onClickClose_Cambio(event){ //chiudo con la X-Cambio
    console.log("Cliccato");
    document.body.classList.remove('no-scroll');
    const mymodal=document.querySelector('#modal-view-Cambio');
    mymodal.classList.add('hidden');
}
const buttons1=document.querySelectorAll('.buttons div[data-modal]');
for(let i=0;i<buttons1.length;i++){
    const button1=buttons1[i];
    button1.addEventListener('click', ModalsView1);
}
const modals1=document.querySelectorAll('.modal1');
for(let i=0;i<modals1.length;i++){
    const modal1=modals1[i];
    modal1.addEventListener('click',ModalHidden_Back);
    const content=modal1.querySelector('[data-content]');
    if(content){
        content.addEventListener('click', noModalClick);
    }

    const closeButton_Accedi = modal1.querySelector('#X-Accedi');
    if(closeButton_Accedi){
        closeButton_Accedi.addEventListener('click', onClickClose_Accedi);
    }
    
    const closeButton_Cambio = modal1.querySelector('#X-Cambio');
    if(closeButton_Cambio){
        closeButton_Cambio.addEventListener('click', onClickClose_Cambio); 
    }
    

}
//Tasti dentro imposto-lingua
function cambioLingua(event){
    const lingue=document.querySelectorAll('[data-lingua]');
    lingue.forEach(l=> l.classList.remove('click'));

    const lingua=event.currentTarget;
    const IT_totale = document.querySelectorAll('[data-lingua="IT"]');
    for(let i=0;i<IT_totale.length;i++){
        const IT=IT_totale[i];
        if(lingua && lingua!==IT){
            console.log('cliccato');
            lingua.classList.add('click');
            IT.classList.add('noclick');
        }
        else{
            IT.classList.remove('noclick');
        }
    }
   
}

const scegli_lingua=document.querySelectorAll('[data-lingua]');
for(let i=0;i<scegli_lingua.length;i++){
    const lingua=scegli_lingua[i];
    lingua.addEventListener('click', cambioLingua);
}

//Passo dal cambio lingua al cambio VALUTA dentro il tasto Cambio
const area=document.querySelector('#Area_Geografica');
const valuta=document.querySelector('#Valuta-view');

function changeInside(event){
    const scelta=event.currentTarget;
    console.log("cliccato");
    const myscelta=scelta.dataset.cambio;
    if(myscelta === 'valuta'){
        valuta.classList.remove('hidden');
        area.classList.add('hidden');
    }
    else{
        area.classList.remove('hidden');
        valuta.classList.add('hidden');
    }
}
const cambio_inside=document.querySelectorAll('[data-cambio]');
for(let i=0;i<cambio_inside.length;i++){
    const scelta=cambio_inside[i];
    scelta.addEventListener('click', changeInside);
}


//sezione centrale
const barra_ricerca=document.querySelector("#Ricerca .Cerca p");
const ricerca=document.querySelector("#Ricerca");
const ricercaVoli=document.querySelector("#RicercaVoli");
const testo=document.querySelector("h1");

function changeSection(event){
    const section=event.currentTarget;
    const titolo= section.dataset.titolo;
    const Bricerca=section.dataset.bricerca;
   
    if(section){
        console.log("Cliccato");
        testo.textContent=titolo;
        barra_ricerca.textContent=Bricerca;
        ricerca.classList.remove('hidden');
        ricercaVoli.classList.add('hidden');
        variabili.forEach(btn => btn.classList.remove('active'));
        section.classList.add('active');
    }
}
function changeSectionVolo(event){
    testo.textContent="Trova il volo migliore";
    ricerca.classList.add('hidden');
    ricercaVoli.classList.remove('hidden');
    variabili.forEach(btn => btn.classList.remove('active'));
    volo.classList.add('active');
}
const variabili=document.querySelectorAll('.Varianti div[data-titolo]');
for(let i=0;i<variabili.length;i++){
    const variabile=variabili[i];
    variabile.addEventListener('click', changeSection);
}
const volo=document.querySelector('#v5 a');
volo.addEventListener('click',changeSectionVolo);

//SCORRERE ANNUNCI
const arrows_right=document.querySelectorAll('[data-arrow-right]');
const arrows_left=document.querySelectorAll('[data-arrow-left]');

function scrollRight(event){
    console.log("Cliccato");

    const this_arrowR = event.currentTarget;
    const visita = this_arrowR.closest('[data-visita]'); // prende solo il blocco corrente

    const box = visita.querySelector('[data-box="b1"]');
    const box_hidden = visita.querySelector('[data-box-new]');
    const arrow_left = visita.querySelector('[data-arrow-left]');

    box.classList.add('hidden');
    box_hidden.classList.remove('hidden');

    this_arrowR.classList.add('hidden');
    arrow_left.classList.remove('hidden');
        
}
function scrollLeft(event){
    console.log("Cliccato");

    const this_arrowL = event.currentTarget;
    const visita = this_arrowL.closest('[data-visita]'); //prende solo il blocco corrente

    const box = visita.querySelector('[data-box="b1"]');
    const box_hidden = visita.querySelector('[data-box-new]');
    const arrow_right = visita.querySelector('[data-arrow-right]');

    box.classList.remove('hidden');
    box_hidden.classList.add('hidden');

    this_arrowL.classList.add('hidden');
    arrow_right.classList.remove('hidden');
}

//MAIN

arrows_right.forEach(arrow => arrow.addEventListener('click', scrollRight));
arrows_left.forEach(arrow => arrow.addEventListener('click', scrollLeft));


//PREFERITI
function riempiCuore(event) {
    const cuore = event.currentTarget;
    const img = cuore.querySelector("img");

    const pieno = "https://img.icons8.com/metro/26/hearts.png";
    const vuoto = "https://img.icons8.com/windows/32/hearts.png";

    // Controlla lo stato attuale dell'immagine
    if (img.src === pieno) {
        img.src = vuoto;
    } else {
        img.src = pieno;
    }
}

const cuori=document.querySelectorAll('[data-cuore]');
for(let i=0;i<cuori.length;i++){
    const cuore=cuori[i];
    cuore.addEventListener('click', riempiCuore);
}
