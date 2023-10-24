// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent="we love you"

// document.querySelector('.inp').value=33
let score = 20;
let highscore = 0;
const number = Math.trunc(Math.random() * 20) + 1
console.log(number);
function message() {
    const inp = document.querySelector(".inp").value;
    if (!inp) {
        document.querySelector('.message').textContent = "no number";

    }
    else if (inp > number) {
        if (score > 1) {
            document.querySelector(".message").textContent = "too high....";
            score--;
            document.querySelector(".score").textContent = score;
        } else {

            document.querySelector(".message").textContent = "you lost the game";
            document.querySelector(".score").textContent = 0;
            document.body.style.backgroundColor = "red";
            document.querySelector('.btn').textContent = number;

        }
    }
    else if (inp < number) {
        if (score > 1) {
            document.querySelector(".message").textContent = "too low....";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "you lost the game";
            document.querySelector(".score").textContent = 0;
            document.body.style.backgroundColor = "red";
            document.querySelector('.btn').textContent = number;

        }
    }
    else if (inp == number) {

        document.querySelector('.message').textContent = "correct number";
        document.body.style.backgroundColor = "green";
        document.querySelector('.btn').textContent = number;


        if (score > highscore) {
            highscore = score;


            document.querySelector('.highscore').textContent = highscore;
        }
    }
}
document.querySelector('.check-btn').addEventListener("click", message);
document.querySelector('.bt').addEventListener("click", () =>{
    window.location.reload()
});


