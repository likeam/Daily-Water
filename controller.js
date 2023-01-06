const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const remaningWater = document.getElementById('remaningWater');

updateBigCup();

smallCups.forEach((cup, ind) => {
    cup.addEventListener('click', () => highlightCups(ind))
})

function highlightCups(ind) {
    if (ind===7 && smallCups[ind].classList.contains("full")) ind--;
    else if(smallCups[ind].classList.contains('full') && !smallCups[ind].nextElementSibling.classList.contains('full')) {
        ind--
    }

    smallCups.forEach((cup, ind2) => {
        if(ind2 <= ind) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })


    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    if(fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups /totalCups * 100}%`
    }


    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else {
        remained.style.visibility = 'visible';
        liters.innerText = `${250 * fullCups / 1000} Litr`
        remaningWater.innerText = `${250 * fullCups / 1000} Litr`
        remaningWater.innerText = `Remaning Water ${2 - (250 * fullCups / 1000)} Litr`
        
    }
    console.log(totalCups);
    console.log(fullCups);

}
