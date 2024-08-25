//capturar o evento do submit do formulario
const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e){
setResultado();
e.preventDefault();




const inputPeso = e.target.querySelector('#peso');
const inputAlt = e.target.querySelector('#altura');

const peso = Number(inputPeso.value)
const altura = Number(inputAlt.value)

if(!peso){
    setResultado('peso inválido', false);
    return;
}

if(!altura){
    setResultado('altura invalida', false);
    return;
}
    // chamando a função getImc e getNivelimc

     imc =getImc(peso,altura);
     nivelImc = getNivelImc(imc);

  

    const msg = `seu imc é ${imc}, (${nivelImc}) `;

    setResultado(msg, true);


});



    function getNivelImc(imc){
            const nivel =['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau1',
                'obesidade grau2', 'obesidade grau3'
            ];

            if(imc >= 39.9){
                return nivel[5];

            }else if(imc>=34.9){
                return nivel[4];

            }else if(imc>=29.9){
                return nivel[3];

            }else if(imc>=24.9){
                return nivel[2];


            }else if(imc>=18.5){
                return nivel[1];

            }else if(imc<18.5){
                return nivel[0];
            }

        }


    function getImc(peso,altura){
    imc = peso/altura**2;
    return imc.toFixed(2);
    }

    function criaP(){
    const p = document.createElement('p');
    return p;
}


    function setResultado(msg, isInvalid){
    const resultado= document.querySelector('#resultado');
    resultado.innerHTML = '';
    
const p = criaP()

if(isInvalid){
    p.classList.add('paragrafo-resultado');

}else{
    p.classList.add('bad');

}

p.innerHTML =msg;
resultado.appendChild(p);

}