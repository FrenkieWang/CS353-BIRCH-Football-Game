# CS353-BIRCH-Football-Game
The card in the football-based card collection game has attackers, defenders and modifiers. In this game, attackers are the “Generators”, defenders are the “Depleters” and modifiers will be the cards with the tactic. There are 180 player cards (90 attackers and 90 defenders) and 14 modifier cards in the database. The card rarity can be divided into Gold (10 attackers/defenders, 2 modifiers), Silver (30 attackers/defenders, 3 modifiers), Bronze (62 attackers/defenders, 4 modifiers) and Standard (78 attackers/defenders, 5 modifiers).
The home page will be a landing page, which has two screens – Login Page and Register Page. The two screens can switch each other. If a user registered successfully, his information of “Name, Email, Password and creation time” will be posted into the database. When a user wants to log in, the program will check the database to decide whether the authentication is correct or not. In particular, there is a “Basket” property with the type “Array” to store the card number that each user gets in the Football Game.

Running Steps:

1) "Ctrl + `"(Open the terminal)

2) Open "backend" in integrated terminal, input:
npm install jquery mongodb express cors dotenv
npm install express-async-handler

3) Open "backend" in integrated terminal, input:
node server.js

4) Open "frontend" in integrated terminal, input:
npm install bootstrap react-router-dom
npm install cross-env

5) Open "frontend" in integrated terminal, input:
npm start

The project will be run on "localhost:3000"

Addition Notes:
If your port 5000 is occupied, please change the port to 8000.
Search → Replace

You can also see the video I attached, this will tell you how to run our program.


Presentation
https://docs.google.com/presentation/d/1yzsL89IQf0Ds4wHL_JiE7GTSaVBGMJzt9Lqh6L47kPo/edit?usp=sharing

Demo
https://build.cloud.unity3d.com/share/Wy-mBbQZWZ/ [deployed 13/04/16]

Git remotes
git@github.com:koHd/AgentBasedModel_Chemotaxis.git
