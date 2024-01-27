let board = document.querySelector('#board');
let numbers = document.querySelector('.numbers');
let selecedNumber=null;
let errorCount=1;
let solve = [
    "316578492",
    "529134768 ",
    "487629531",
    "263415987",
    "974863125",
    "851792643",
    "138947256",
    "692351874",
    "745286319 ",
];
let problem = [
    "31-57-492",
    "52--347-8 ",
    "4-76-9--1",
    "2-34--98-",
    "--4-63--5",
    "8-1-9-6--",
    "1--94-25-",
    "6-235---4",
    "-45---3-9 ",
];



function startGame() {
    for (i = 1; i <= 9; i++) {
        // Numbers divine number divlerini yaradib elave edirik
        let div = document.createElement('div');
        div.classList.add('number');
        div.innerText = i;
        div.setAttribute('data-number', i)
        numbers.append(div)
        // Number divini secirik elave etmek ucun hazirlayiriq
        div.addEventListener('click', numberSelect)
    }
    // Start veziyyete getiririk
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let div = document.createElement('div');
            // Divlerin id leri kordinata gore duzuruk
            div.id = `${r}-${c}`
            div.classList.add('numbox')
            board.append(div);
            if(problem[r][c]!= "-"){
                div.innerText =problem[r][c]
                div.classList.add("start")
            }
            // 9/9 bolunmenin cercivesini duzeldirik
            if (r == 2 || r == 5) {
                div.classList.add('rownumbox')
            }
            if (c == 2 || c == 5) {
                div.classList.add('columnnumbox')
            }
            // Secdiyimiz numberi numbox a elave edirik
            div.addEventListener('click', pasteNumber)
        }
    }

}
startGame()
// Numberin secilmesi
function numberSelect(e) {
    document.querySelectorAll('.number').forEach(item => item.classList.remove('active'))
    selecedNumber=this.textContent
    this.classList.add('active')
}
// Numberin yapisdirilmasi
function pasteNumber(){
    r=this.id.split('-')[0]
    c=this.id.split('-')[1]
    console.log(this.textContent)
    if(solve[r][c]==selecedNumber){
        this.innerText=selecedNumber
    }else{
        document.querySelector('.error-count').innerHTML=errorCount
        if(errorCount==3){
            alert('Meglubiyyet((')
            window.location.href='http://127.0.0.1:5501/'
        }
        errorCount++
    }
    
}