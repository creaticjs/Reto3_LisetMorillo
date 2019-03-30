const reto3 = {


    descripcionEjercicios: "",
    ejercicio1 : function (){
        descripcionEjercicios ="Este es el primer ejercicio";
        var salario = document.getElementById("numero").value;

        if (salario=>0 && salario <= 9000){
            resultado1 = salario * 0.20;     
            resultado = resultado1 + parseFloat(salario);      
        }
        if (salario=>9001 && salario<=15000){
            resultado1 = salario * 0.1;                 
            resultado = resultado1 + parseFloat(salario); 
           
        }
        if (salario=>15001 && salario<=20000){
            resultado1 = salario * 0.05;                 
            resultado = resultado1 + parseFloat(salario); 
          
        }        
        if (salario>20000 ){
            resultado1 = salario;   
            resultado= resultado1;           
        }

        document.getElementById("resultado").innerHTML = resultado;
        },

    /**
     * Ejercicio 2
     */

    ejercicio2 : function (){
        descripcionEjercicios ="Este es el segundo ejercicio 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - (4/(12*13*14)";
        var numero = document.getElementById("numero").value;

        /*var datos1 = 3; 
        var datos2 = 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14);
        var datos3 =  4/(14*15*16) - 4/(16*17*18) + 4/(18*19*20);
        var resultado3 =  datos2 + datos3;   
        var resultado = datos1 + resultado3; 
        console.log("el resultado 3: " + resultado);
        

        var numero2 = parseFloat(numero);
        console.log("este es el numero 2 " + numero2);

        
        var numero3 = substr(resultado, numero2);
        var numero3 = resultado.substr(numero2);

        console.log("este es el numero 3 " + numero3);
        
        document.getElementById("resultado").innerHTML = "el resultado es " + resultado + " y el numero es " +numero + "el otro : " + numero3 ;*/
        
        var resultado=0;
        var operacion1=0; 
        var operacion2=0;
        
            for(var i=1; i<=numero; i+=4){
                operacion1=operacion1 + ((4)/(i));        
            }
            for(var i=3; i<=numero; i+=4){
                operacion2=operacion2 - ((4)/(i));
            }
            resultado=operacion1+operacion2;
        
        document.getElementById("resultado").innerHTML="el valor de pi es: " + resultado;
    
    },

    /**
     * Ejercicio 3 
     */

    ejercicio3 : function (){
        ejercicio ="Este es el tercer ejercicio 3";
        var numero = document.getElementById("numero").value;
        numero= parseFloat(numero);
        
        var arreglo =[];
        var mayor = 0
        var menor = 0;
        var suma=0;
        var media=0;
        
        for (var i = 0; i<numero; i++ ){
            var a = prompt("Dime el  numero");
            arreglo.push(a);   

            suma = suma + arreglo[i];
            console.log("suma" + suma);

            media = suma / arreglo.length;
            console.log("la media" + media);
        
            for(j = 0; j < arreglo.length; j++){            
                if (arreglo[j] > mayor) {
                    mayor = arreglo[j];   
                }else 
                    menor = arreglo[j];     
            }
        }                 
        document.getElementById("resultado").innerHTML = "Los numeros agregados son: " +  arreglo + "  el numero mayor es: "  + mayor + "  el numero menor es: " + menor;
        
    },

    /**
     * Ejercicio 4
     */

    /*ejercicio4 : function (){
        
        var numero = document.getElementById("numero").value;       
       
        var valormes = 0;
        var valordia = 0;

            var A = numero % 19;
            var B = numero % 4;
            var C = numero % 7;
            var D = (19 * A + 24) % 30;
            var E = (2 * B + 4 * C + 6 * D + 5) % 7;
            var N = (22 + D + E);        

            if (N > 31) {
                valormes = 4;
                console.log(valormes);
                
                valordia = D + E;
            } else {
                valormes = 3;
                valordia = D + E;
            }

        var fecha = new Date(numero, valormes, valordia);
        document.getElementById('resultado').innerHTML = fecha;

    },*/


    /**
     * Ejercicio 5 años bisiestos
     */
    ejercicio5 : function (){

        descripcionEjercicios ="Este es el ejercicio del años bisiestos";
        var anio = document.getElementById("numero").value;
        var resultado ="";

        var bisiesto= parseFloat(anio);

        if((bisiesto % 4 == 0) && (bisiesto % 100 == 0) && (bisiesto % 400 == 0))
            resultado = "el año es bisiesto";
        else    
            resultado = "el año no es bisiesto";    

        document.getElementById('resultado').innerHTML = resultado;
        }
    
        /**
         * Ejercicio 7 Nuumeros perfectos
         */

    /*ejercicio7 : function (){    

            var numero =  Math.pow (2,1);            
            var ecuacionNumero = Math.pow(2,2) -1;           
            var resultado1= numero * ecuacionNumero;
            //console.log("El primer numero perfecto es: " + resultado1);  

            var numero2 = Math.pow (2,2);             
            var ecuacionNumero2 = Math.pow(2,3) -1;              
            var resultado2= numero2 * ecuacionNumero2;
            //console.log("Ek segundo numero perfecto es: " + resultado2);

            var numero3 = Math.pow (2,4);             
            var ecuacionNumero3 = Math.pow(2,5) -1;              
            var resultado3= numero3 * ecuacionNumero3;
            //console.log("Ek tercer numero perfecto es: " + resultado3);     
            
            document.getElementById('resultado').innerHTML= "Los numeros perfectos son: " + resultado1 + " , " + resultado2 + " , " + resultado3;
    
    },*/

   /* ejercicio9 : function (){
        var numero = (document.getElementById("numero").value);
        var a = 0; 
        var b = 1;
        var suma=0;
        var meses=1;
        
            while(suma<numero){
              suma = a+b;
              console.log("valor de suma" + suma);
              a=b;
              console.log("valor de a: " + a);
              b=suma;
              console.log("valor de b: " + b);
              meses = meses+1;
            }
        
        document.getElementById("resultado").innerHTML = "La cantidad de meses que falta para tener esa cantidad de conecjos es de: "+meses;
        },    

       /* ejercicio11: function (){
            
            var valor =parseInt(document.getElementById("numero").value);
            var NumeroPrimo=true;
    
            for(i=1;i<valor;i++)
            {
                // If factor
                if(valor/i == Math.round(valor/i) && i!=1 && i!=valor)
                {
                    NumeroPrimo=false;
                    break;
                };
            };
    
            if(NumeroPrimo)
                document.getElementById("resultado").innerHTML="El numero "+valor+" es Primo";
            else
                document.getElementById("resultado").innerHTML="El numero "+valor+" NO es Primo";
            }*/
            
        }


var btn1 = document.getElementById("calcular");
btn1.addEventListener("click" , reto3.ejercicio1);
btn1.addEventListener("click" , reto3.ejercicio2);
btn1.addEventListener("click" , reto3.ejercicio3);
btn1.addEventListener("click" , reto3.ejercicio4);
btn1.addEventListener("click" , reto3.ejercicio5);
btn1.addEventListener("click" , reto3.ejercicio7);
btn1.addEventListener("click" , reto3.ejercicio9);
btn1.addEventListener("click" , reto3.ejercicio11);