const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#discountCalculation');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon) {
        pResult.innerText = 'Cuidado! no has completado correctamente el formulario';
        return;
    }

    let discount;

    /*const coupons = {
        'BLACK15': 15,
        'BLACK20': 20,
        'BLACK25': 25,
        'BLACK30': 30,
        'BLACK40': 40,
    }*/

    const coupons =[];
    coupons.push({
        name: 'BLACK15',
        discount: 15,
    });
    coupons.push({
        name: 'BLACK20',
        discount: 20,
    });
    coupons.push({
        name: 'BLACK25',
        discount: 25,
    });
    coupons.push({
        name: 'BLACK30',
        discount: 30,
    });

    function couponsDiscounts(cuponElement) {
return cuponElement.name == coupon;
    }

    const couponInArray = coupons.find(couponsDiscounts);

    if(couponInArray) {
        discount = couponInArray.discount;
    } else {
        pResult.innerText = 'El cupón no es válido';
        return;
    }
    
    
    /*if (coupons[coupon]) {
        discount = coupons[coupon];
    } else {
        pResult.innerText = 'El cupón no es válido';
        return;
    }*/



    /*switch (coupon) {
        case 'BLACK30':
            discount = 30;
            break;
        case 'BLACK25':
                discount = 25;
                break;
    
        default:
            pResult.innerText = 'El cupón no es válido';
            return;
    }*/
    
    /*if(coupon == 'BLACK30') {
        discount = 30;
    } else if (coupon == 'BLACK25') {
        discount = 25;
    } else {
        pResult.innerText = 'El cupón no es válido';
        return;
    }*/


    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}



