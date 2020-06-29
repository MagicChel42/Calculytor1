let number_ft = {
    one: 1000000,
    two: 1500000,
    three: 2000000
};

let number_pg = {
    zero: 0,
    one: 150000,
    two: 300000
};

//Учёт количества комнат в квартире и парковочных мест
function calc(){
    let flats = number_ft[document.getElementsByName('number_flat')];
    let parkings = number_pg[document.getElementsByName('number_parking')];
        return flats, parkings;
};

//Учёт первоначального взноса 
function first_playment() {
    let fp = document.getElementById('f_p');
        if(fp >= 0 && fp <= (flats+parkings)) {
            return fp;
        } else {
            return null;
        }
};

//Учёт ипотечного процента
function mortgage_interest() {
    return let mi = document.getElementById('m_i');
};

//Срок ипотечных выплат
function payment_period() {
    return let pp = document.getElementById('p_p');
};

let v1 = flats;
let v2 = parkings;
let v3 = fp;
let v4 = mi;
let v5 = pp;

//Ежемесячный платеж
function result(){
    return ((v1+v2-v3)*(v4/12/100)*((1+v4/12/100))^v5)/((1+v4/12/100)^v5)-1);
};

document.getElementById("res").addEventListener("click", result());

/*Простой калькулятор новостройки:
1. Есть 3 типа квартир с разной ценой: 1 комнатные, 2 комнатные, 3 комнатные. - radiobutton
2. Покупка 0, 1 или 2 парковочных мест для квартиры. - input (min: 0, maximum: 2)
= промежуточная стоимость выбранных квартир / паркомест - сумма
3. Простой рассчет ипотеки: Первоначальный взнос (редактируемое поле) - input (не может привышать сумму недвижемости + паркомест), процент ипотеки (редактируемое поле, min: 5.5, max: 12.7), срок ипотеки месяцев (редактируемое поле, min: 6, max: 120).
= Ежемесячный платеж по ипотеке.

- Все поля и данные обрабатываются javascript
- Без перезагрузки сраницы
- При изменении любого поля - мнгновенный пересчет результата
- использовать только чистый javascript. Использование jquery, vue, react не допускается
petchenushka03.06.2020
<script src="script.js"></script>
petchenushka03.06.2020
h1, input [type=text, radio; value], span*/