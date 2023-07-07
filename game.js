function getComputerChoice() {
    const choice = Math.round(Math.random() * 2) + 1;
    
    switch (choice) {
        case 1:
            return 'Rock';

        case 2:
            return 'Paper';
            
        case 3:
            return 'Scissor';
    }
}

console.log(getComputerChoice());
