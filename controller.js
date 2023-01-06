const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remaind');

smallCups.forEach((cup, ind) => {
    cup.addEventListener('click', () => highlightCups(ind))
})

function highlightCups(ind){
    smallCups.forEach((cup, ind2) => {

        if(smallCups[ind].classList.contains('full') && !smallCups[ind].nextElementSibling.classList.contains('full')){
            ind--
        }


        if(ind2 <= ind ){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
}