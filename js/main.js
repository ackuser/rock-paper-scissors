import store from './store/index.js';

// Load up components
import Count from './components/count.js';
import HumanPlayer from './components/humanPlayer.js';
import RobotPlayer from './components/robotPlayer.js';

const disableLoading = () => {
    document.querySelector('#loader').style.display = "none";
}
// Instantiate components
const countInstance = new Count();

// Initial renders
countInstance.render();
// weaponsInstance.render();

const player1Instance = new HumanPlayer();
player1Instance.render();
const player2Instance = new RobotPlayer('player2');
player2Instance.render();


const playButton = document.querySelector('#play');
if (confirm("Do you want to play VS machine??")) {
    playButton.style.display = "none";
    disableLoading();
} 
else {
    // Simulate click for dispatching for robot 1
    playButton.addEventListener('click', event => {        
        const button = document.querySelectorAll('.weapon-p1')[Math.floor(Math.random() * (2 + 1))];        
        button.click();
    });    
    disableLoading();
}


