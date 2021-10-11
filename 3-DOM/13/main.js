const homeBoardDOM = document.querySelector('.rezultatas[data-komanda="namu"]');
const awayBoardDOM = document.querySelector('.rezultatas[data-komanda="sveciu"]');

const homeScoreDOM = document.querySelector('.komanda[data-komanda="namu"]');
const awayScoreDOM = document.querySelector('.komanda[data-komanda="sveciu"]');

const homePlusOneDOM = homeScoreDOM.querySelector('[data-points="1"]');
const homePlusTwoDOM = homeScoreDOM.querySelector('[data-points="2"]');
const homePlusThreeDOM = homeScoreDOM.querySelector('[data-points="3"]');

const awayPlusOneDOM = awayScoreDOM.querySelector('[data-points="1"]');
const awayPlusTwoDOM = awayScoreDOM.querySelector('[data-points="2"]');
const awayPlusThreeDOM = awayScoreDOM.querySelector('[data-points="3"]');

let homeScore = 0;
let awayScore = 0;

console.log(homeScoreDOM)

homePlusOneDOM.addEventListener("click", () => {
    homeScore++;
    homeBoardDOM.innerText = homeScore;
})

homePlusTwoDOM.addEventListener("click", () => {
    homeScore += 2;
    homeBoardDOM.innerText = homeScore;
})

homePlusThreeDOM.addEventListener("click", () => {
    homeScore += 3;
    homeBoardDOM.innerText = homeScore;
})


awayPlusOneDOM.addEventListener("click", () => {
    awayScore++;
    awayBoardDOM.innerText = homeScore;
})

awayPlusTwoDOM.addEventListener("click", () => {
    awayScore += 2;
    awayBoardDOM.innerText = homeScore;
})

awayPlusThreeDOM.addEventListener("click", () => {
    awayScore += 3;
    awayBoardDOM.innerText = homeScore;
})



