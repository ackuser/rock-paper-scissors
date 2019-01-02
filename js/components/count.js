import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Count extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.js-count')
        });

        this.element.innerHTML = `
        <small>Your summary</small>
        <span>0</span>
        <small>results today 😢</small>
        <div>
            <img src="assets/images/arcade-player.png" alt="Arcade">
        </div>            
            `
    }

    /**
     * React to state changes and render the component's HTML
     *
     * @returns {void}
     */
    render() {
        let image = '<img src="assets/images/arcade-player.png" alt="Arcade">',
            results = store.state.results;
        document.querySelector('#loader').style.display = "block";
        if (results.lastResult != '') {
            if (results.lastResult == 'player1') {
                image = '<img src="assets/images/arcade-player-win.png" id="win" alt="Win">'
            }
            else if (results.lastResult == 'player2') {
                image = '<img src="assets/images/arcade-player-lost.png" id="game-over" alt="Game Over">';
            }
            else {
                image = '<img src="assets/images/arcade-player-draw.png" id="draw" alt="Draw">';
            }
        }
        document.querySelector('#loader').style.display = "none";

        this.element.innerHTML = `
                <small>You've played</small>
                <span>${results.numGames}</span>
                <small>You win ${results.wins} 🙌 today, 
                       lost ${results.lost} 😢 
                       and got ${results.draws} 🤔 draws 
                </small>
                <div>                
                    ${image}
                </div>
            `;
    }
}
