# Rock-Paper-Scissors - Console-Game
This is a simple game played by two persons. In this vesion you play against the computer.
## Final Design
![rps-final](./examples/rps-final.png)
### Recipe Example 1
![rps-example](./examples/rps-example.png)
## Game Explained
The game consisting of three different objects {Rock,Paper,Scissors}. In the real life version these can be implemented using hand gestures, in this version I just use text (console output) to represent these objects. The player can just isert the choice using text input like Rock, Paper and Scissors, the programm generates a enemy turn and the result will be displayed.
### Game Rules
Every object beats exactly one other and gets beaten by exactly one, the same object
is a tie, so here are the rules:
#### Wins
- Rock beats Scissors
- Paper beats Rock
- Scissors beats Paper
