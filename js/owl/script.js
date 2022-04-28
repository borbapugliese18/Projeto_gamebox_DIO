$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        550:{
            items:3
        },
        900:{
            items:5
        },
        1300:{
            items:6
        },
        2000:{
            items:7
        }
    }
})

function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display==="none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";    
        btnLeiaMais.innerHTML="Read more";    
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";    
        btnLeiaMais.innerHTML="Read less";  
    } 
}