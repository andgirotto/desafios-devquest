const telaAtual = document.querySelectorAll('.tela');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');

let imagemAtual = 0;


setaAvancar.addEventListener('click', function() { 
    if (imagemAtual === telaAtual.length - 1){
        return;
    }

    imagemAtual++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0){
        return;
    }

    imagemAtual--;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

function esconderImagemAberta(){
    const imagemAberta = document.querySelector('.mostrar');  
    imagemAberta.classList.remove('mostrar'); 
}

function mostrarImagem(){
    telaAtual[imagemAtual].classList.add('mostrar');
}


function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if (naoEhAPrimeiraImagem) {
        setaVoltar.classList.remove('opacidade');
    }else{
        setaVoltar.classList.add('opacidade');
    }

    const chegaouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === telaAtual.length - 1;
    if (chegaouNaUltimaImagem){
        setaAvancar.classList.add('opacidade');
    }else {
        setaAvancar.classList.remove('opacidade');
    }
}