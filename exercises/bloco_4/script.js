let pecaXadrez = 'queen' 

switch (pecaXadrez) {
    case 'bishop':
        console.log('diagonal')
        break;
    
    case 'king':
        console.log('one square in any direction')
        break;
        
    case 'queen':
        console.log('diagonally, horizontally or vertically')
        break;
        
    default:
        break;
}