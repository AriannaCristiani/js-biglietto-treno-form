
//chiedere all'utente il suo nome ed il suo cognome
const userNameSurname = document.getElementById('name-surname');
//console.log(userNameSurname)


//chiedere all'utente la sua età
const age = document.getElementById('age');
//console.log(age);

//chiedere all'utente il numero di km da percorrere
const km = document.getElementById('km');
//console.log(km)




//impedire alla pagina di inviare i dati
const formElement = document.getElementById('form-element');
//console.log(formElement);

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log(userNameSurname.value)

    const ageValue = age.value
    //console.log(ageValue)
    const kmValue = km.value
    //console.log(kmValue)

    const dataIsValid = !isNaN(kmValue) && !isNaN(ageValue)
    const dataIsBiggerThanZero = kmValue >= 0 && ageValue >= 0


    if (dataIsValid && dataIsBiggerThanZero) {
        const basePrice = kmValue * 0.21
        console.log('prezzo base', basePrice.valueOf)

        let discountPercentage

        if (ageValue < 18) {
            discountPercentage = 20
        } else if (ageValue > 65) {
            discountPercentage = 40
        } else {
            discountPercentage = 0
        }

        console.log('Percentuale sconto: ', discountPercentage)
        const discount = (basePrice * discountPercentage) / 100
        console.log('sconto: ', discount.valueOf)

        const price = basePrice - discount

        //stampare il prezzo del biblietto
        const formattedPrice = new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR',
        }).format(price)

        const humanPrice = price.toFixed(2)

        console.log('prezzo: ', humanPrice.value + ' €')
    } else {
        // alert('I dati inseriti non solo validi')
    }
})


const buttonSubmit = document.getElementById('button-submit');
//console.log(buttonSubmit)






