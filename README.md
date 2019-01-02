# Waste an Hour Having Fun Rock, Paper and Scissors done in Vanilla DDD with State Managment

> As a frequent games player,                   
 I'd like to play rock, paper, scissors           
 so that I can spend an hour of my day having fun 
                                                  
 Acceptance Criteria                              
  - Can I play Player vs Computer?  ✔️
  - Can I play Computer vs Computer? ✔️            
  - Can I play a different game each time? ✔️

- Is your solution visually creative and appealing?
 Well, that's what a couple of real users told me. But of course, it could be better.

 - Consider how your UX design is influenced by your target user. Who are you building this for?
 This is my prototype user ==> 
 People from 80's living in big cities wishing to waste an hour of time, while they are commuting in the tube

So we focus the design on him/her

- We are keen to see how much you think is enough, and how much would go into a Minimum Viable Product.  As a guide, elegant and simple wins over feature rich every time, though extra gold stars are given to people who get excited and do more because they are having fun.
 formatting syntax is to make it as readable

 MVP -> see roadmap to check what I have done and what I have not 

- Is your UI layer neatly separated from your business logic?
Yes, I separate as much as I could; each component has its own template

- Please specify which is your target browser
 Looking at the statistics our target browser is Chrome
 Usage share of web browsers

| Browser | Percentage |
| ------ | ------ |
| Google Chrome | 59.69% |
| Safari | 13.85% |
| UC Browser | 7.03% |
| Firefox | 5.02% |
| Opera | 3.35% |
| Internet Explorer | 3.01% |

### Installation

Just clone the project
```sh
$ git clone https://github.com/ackuser/rock-paper-scissors.git
$ npm i http-server
$ cd rock-paper-scissors
$ http-server
```
And then open the index.html in a browser

### Roadmap

- Use a framework
- Make it responsive with @media and css flex
- Menu and a pretty prompt with options, even sounds¿?
- Testing unit functionalities and interfaces behaviour of the game with Mocha or Jasmine
- Polyfills & Cross compatibility with some tools
- Extend for Lizard & Spock
- Server side back for multi-players
