import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Weapons extends Component {

    constructor(weaponType) {
        super({
            store,
            element: document.createElement("img")
        });

        // Instantiate a weapon component with it images
        this.weaponType = weaponType;
        this.element.src = `assets/images/${this.weaponType}.png`;
        this.element.alt = `${this.weaponType}`;
        this.element.classList.add("weapon");
        this.element.classList.add("weapon-p1");        
        this.element.setAttribute("data-weapon-type", this.weaponType);
    
        // Find buttons for dispatching the action and make the animation
        this.element.addEventListener('click', () => {
            store.dispatch('addWeapon', this.weaponType);            
            const classes = this.element.classList;
            if (classes) {
                classes.remove('ripple-out');
                setTimeout(() => {
                    classes.add('ripple-out');
                })
            }
        });
    }

    /**
     * React to state changes and render the component's HTML
     *
     * @returns {void}
     */
    render() {}
}
