![alt text](./assets/images/ac-newhorizons-logo.png "Animal Crossing (TM) New Horizons Logo")
# Animal Crossing (TM) New Horizons - The Memory Game

Memory game (or match the pairs game) inspired by a viral Nintendo Switch(TM) game Animal Crossing(TM) New Horizons.

## Live demo

Live demo of the website can be found at [this link](https://ib-skoric.github.io/ci-acnhmg/).

![alt text](./assets/docs/responsive-showcase.png "Responsive showcase of the website on various devices")

## UX

### User stories

As a user I want to navigate through the game UI and play the game

As a user I want to have fun

### Strategy

The main goal is for the user to be able to navigate the game easily and for the user to have fun.

### Scope

The application guides the user through the rules and allows the user to play the game.

### Structure

The landing page features the logo, title and an input field for the user to input their name. Underneath the input field is a call-to-action button that leads the user to the next page - rules.

Rules page contains image of Tim Nook (lead character in the game and Nook Inc. owner) and a speech bubble through which the user navigates by clicking or tapping the same call-to-action button.

After user goes through the rules, user is brought to the game screen that consists of the logo, timer and 12 cards.

Once user completes level 1 in time a page clears and displays a congratulations message and 2 buttons to either proceed to next level or cancel the game.

Once user completes level 2 in time a page clears and displays a congratulations message and 2 buttons to either proceed to next level or cancel the game.

Once user completes level 3 in time a page clears and displays a congratulations message and 2 buttons to either replay the game or go back to home page.

### Skeleton

[Landing page wireframe](assets/docs/landing-wireframe.png)

[Rules page wireframe](assets/docs/rules-wireframe.png)

[Game page wireframe](assets/docs/game-wireframe.png)

### Surface

Colour used as a main colour is #532901 (pictured below). This colour has been used for text and button elements through the page.

![alt text](./assets/docs/colour.png "Image of RGB #532901 colour")

Background image used is a wood background that repeats across the entire site. *(see credits)*

## Features

### Existing Features

The game features a user input element and a simple introduction to the game to help user understand the rules of the game.

The game itself consists of a 12 cards (6 pairs) which user has to match within set time (depending on the level 120, 90 or 60 seconds).

The game has 3 different levels - matching Animal Crossing(TM) villagers at level 1, fish at level 2 & insects at level 3.

The game has 3 difficulty modes - easy, normal and hard which sets different timers for the game effectively making the game harder.

Users progression is saved to session storage so it can be retrieved later if the user decides to play the game at later date.

After every level (apart from last) user can choose whether to proceed to next level or to cancel the game.

### Features Left to Implement

It would be great to implement a database for storing player data and progression as well as more levels & a leaderboard that would pull the data for the aforementioned database.

## Technologies Used

1. HTML5
2. CSS3
3. [Bootstrap v4.4.1](https://getbootstrap.com/)
4. jQuery (only as part of Bootstrap)
5. [Font Awesome](https://fontawesome.com/start)
6. JavaScript

## Testing

Upon loading the webpage the user is presented with a welcome screen, welcome message, an input filed and a forward button.
In the background the script checks if the player name exists in the session storage and if it does, it automatically populates the name field for the user. If the value is not present in the session storage, user can click on the input field and input their name. Underneath 'your name' field, user can choose game difficutly level which will change the timer and make the game harder. If the user chooses the default 'Normal' option, timer is set for 90 seconds, easy mode gives the user 120 and hard 60 seconds respectively.
After this, the user presses the forward button. If the name field is empty an alert window is presented to the users informing them they need to input their name in order to proceed. User's name & difficulty level is kept in session storage of the browser. 

After successfully entering the name, if the user is visiting the game for the first time (ie. session storage has no level information stored), the users is presented with 5 slides explaining the rules of the game. The user navigates these by clicking or tapping the forward button.

Once navigated through the rules the user is presented with a set of 12 cards (6 pairs). At the top of the cards, user can see which level they're at, how much time they've remaining and the sound control button.

Once the user clicks on a card the card front image is shown revealing a villager (Level 1), fish (Level 2) or insect (Level 3). A card flip sound is played each time a user click on a card. If the two selected cards **do not** match, the card simply turn back. If the cards do match, they flip back and grey out. The user is unable to click on those cards again. The goal for the user is to complete the game (match 6 pairs) before the timer runs out. If the user succeeds, a tada sound is player & a congratulations modal is displayed prompting the user to either continue to the next level, to cancel the game or to go back to home page. Proceeding will bring the user to the next level (if the current level is 1 & 2). If the user cancels out the game the landing page is displayed again and user's progress is wiped. By clicking on the home button user is returned to the index page and their progress is retained. 

If the user does not manage to match the cards in time a dun-dun-dun sound is played & game over screen is presented offering the user to repeat the level, cancel the game or return back to home page. 

There were bugs found which were fixed and impact of some has been minimised, an non-exhaustive list includes:
1. Sound playing even though the user has chosen to mute it (fixed by tracing all sound effects in 'app.js' file)
2. 2 non-matching cards would get matched if a user matches 2 matching cards but very quickly taps on the third card (fixed by addding another condition to the if statements inside app.js)
3. Game not scaling properly on tablet devices (fixed by adding custom media queries into 'style.css' file)
4. Buttons on level transition screens/game lost/game won pages were not working (fixed by altering the logic between when session storage is wiped and wrapping some buttons in anchor tags)

This has been tested using (all on 13" Macbook Pro with macOS 10.15.5 & on an external 24" display):

+ Google Chrome 83.0.4103.116
+ Opera 69.0.3686.36
+ Firefox 77.0.1
+ Safari 13.1.1

+ Safari on iOS 13.5.1 (Apple iPhone 11 Pro Max)
+ Safari on iOS 13.5.1 (Apple iPhone XR)
+ Safari on iOS 8.1 (Apple iPad Air 2)
+ Also tested on Chrome on all above devices but that's irrelevant due to Apple restricting developers to only WebKit (Safari engine) for website render ie. all other browsers are just different looking Safaris.

The website has also been tested via the [W3C Markup Validation Service](https://validator.w3.org/) & [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).

## Deployment

This website has been deployed and is hosted on GitHub Pages. It has been deployed straight from *master* branch. This has been done by navigating to the repository &gt; Clicking on *Settings* &gt; Scrolling down to *GitHub Pages* section &gt; Selecting *master branch* as a source.

The page will update automatically with new/changed content once commits are pushed to the remote repo location using `git push` command.

If you wish to clone this repository, this can be done using `git clone https://github.com/ib-skoric/ci-acnhmg.git`

## Credits

### Content

All textual content has been written by myself.

### Media

Background image has been sourced from [toptal.com](https://www.toptal.com/designers/subtlepatterns/retina-wood/).

Sound files have been sourced from [soundbible.com](http://soundbible.com/) and are under copyright of their respective owners - licences vary.

Favicon has been generated using [favicon-generator.org](https://www.favicon-generator.org/).

All Animal Crossing (TM) images including images of the villagers, fish & insects has been sourced from [Critterpedia Plus](https://critterpedia-plus.mutoo.im/) and these are courtesy of Nintendo Company.

Sketch 61 was used to create card SVG images.

Animal Crossing and Nintendo Switch are trademarks of Nintendo.

### Acknowledgements

I have loosely followed [this tutorial]('https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/') to get the core idea of how to structure the JavaScript application, and built up the rest of the features myself.

To create the showcase image shown under live demo section techsini's Multidevice Mockup Generator's been used.

To my girlfriend who came up with the theme for the game and helped me pick out the cards to be used.