
/* 
----BOLI UZ VIANOCE?----

const stedryDen = dayjs("2023-12-24")
const dnes = dayjs()


if (dnes.isAfter(stedryDen)){
    alert("Bohužiaľ si už Vianoce zmeškal.")
}else{
    alert("Jupí, Vianoce nás ešte len čakajú.")
}
*/




/* 
----KONTORLA EMAILU----

const email = prompt("Zadaj svoj email")

const isEmail = validator.isEmail(email)
const messageElement = document.querySelector('.msg')

if (isEmail) {
    messageElement.textContent = 'E-mail v pořádku'
    messageElement.classList.add('msg--valid')
} else {
    messageElement.textContent = 'Neplatný e-mail'
    messageElement.classList.add('msg--invalid')
} */




let date1 = dayjs();
let date2 = new Date("05/17/2023");

let oznam = document.querySelector(".anonie")

if (date1.isAfter(date2)){
    oznam.textContent = "ANO"
}else{
    oznam.textContent = "NIE"
}



// To calculate the time difference of two dates
let Difference_In_Time = date2.getTime() - date1;

// To calculate the no. of days between two dates
let Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));

//To display the final no. of days (result)
const howManyDaysToBirthday = document.querySelector(".odpocet")

howManyDaysToBirthday.textContent = "Kubko do tvojich narodenín ostáva" + " " + Difference_In_Days + " " + "dní"