//alert("Ovo je moja prva JS stranica");
//prompt("Unesi svoje ime:");
//let ime = prompt("Unesi svoje ime: ");
//alert("Tvoje ime je: " +ime);

//let broj = prompt("Unesi jedan broj: ");
//alert("Kvadrat toga broja je: " + (broj*broj));

//let broj1= prompt("Unesi jedan broj:");
//let broj2= prompt("Unesi drugi broj:");
//alert("Razlika dva broja je:" + (broj1-broj2));

//usporedba
/* let broj1= prompt("Unesi prvi broj: ");
let broj2= prompt("Unesi drugi broj: ");
if(broj1 > broj2)
{
    alert(broj1 + "je veći od " + broj2);
}
else if(broj1 < broj2)
{
    alert(broj2 + "je veći od" + broj1);
}
else
{
    alert("Brojevi su jednaki");
} */

/* BMI App

BMI= masa(kg)/ (visina*visina)(m)
-unijeti masu i visinu
-ispisati bmi, Vaš bmi iznosi */

let masa = prompt("Unesi masu u kg: ");
let visina = prompt("Unesi visinu u m: ");
let bmi = Math.round(masa/(visina*visina)); /* MATH.ROUND zaokružava decimalan broj na cijeli broj */
alert("Vaš BMI indeks iznosi: " + bmi);