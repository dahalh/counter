//1. press plus or minus
//2. show result after pressing plus or minus
//3. reset to 0 after pressing reset button


//set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#result");
const buttons = document.querySelectorAll(".btn");


buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        const styles = event.currentTarget.classList;
        if(styles.contains('minus')){
            count--;
        }
        else if(styles.contains('plus')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "purple";
        }
        if(count < 0){
            value.style.color = "pink";
        }
        if(count === 0){
            value.style.color = "black";
        }
        value.textContent = count;
    });
});