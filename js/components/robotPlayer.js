import Component from '../lib/component.js';
import store from '../store/index.js';
import Game from '../lib/game.js';

export default class RobotPlayer extends Component {

    constructor(name) {
        super({
            store,
            element: document.querySelector(`.js-robot-${name}`),
        });
        this.name = name;
    }

    /**
     * React to state changes and render the component's HTML
     *
     * @returns {void}
     */
    render() {
        if (store.state.results.currentItems.length == 1 && this.name == 'player2') {
            // Instantiate a ramdon weapon component with it images, when is its turn
            const img =document.createElement("img"),
            weaponType = ['rock','scissors','paper'][Math.floor(Math.random() * (2 + 1))]

            img.src = `assets/images/${weaponType}${this.name == 'player2' ? '-player2' : ''}.png`;
            img.alt = `${weaponType}`;
            img.classList.add("weapon");
            img.classList.add("ripple-out");
            this.element.innerHTML = '';            
            this.element.append(img);
            store.dispatch('addWeapon', weaponType);      
        }
        else if (store.state.results.currentItems.length == 2 && this.name == 'player2') {
            store.dispatch('addResult', new Game(store.state.results.currentItems));
        }
    }
}
