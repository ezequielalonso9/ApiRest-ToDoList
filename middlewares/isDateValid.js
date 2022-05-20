


const isDateValid = ( { deliveryDate } ) => {

    console.log(typeof(deliveryDate))
    const date = Date.parse( deliveryDate ); // La fecha tiene que tener formato de mes/dia/año y debe retornar un Number
    const today = Date.now();
    console.log(date)



    if ( typeof( date ) !== 'number' ){

        console.log(`deliveryDate no es Number`);
        throw new Error('deliveryDate debe tener un formato mes/dia/año')

    }
    if ( date < today ) {
        console.log(`deliveryDate es menor`)
        throw new Error('La fecha no es posible')
    }


}

module.exports = {
    isDateValid
}