let input = document.querySelector('input');




input.addEventListener('blur', function() {
    let value = parseInt(this.value);
    console.log(Number(this.value));

    function isEven() { 
        if (value % 2 == 0) {return 'even'} 
        else {return 'odd'};
    }

    let answer = document.querySelector('p')
    answer.textContent = `The number ${this.value} is ${isEven()}`;
    // alert(`The number ${this.value} is ${isEven()}`)
});

    



