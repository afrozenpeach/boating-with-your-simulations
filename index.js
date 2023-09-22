let iterations = 1000000;
let players = 2;

let deckConfig = {
    'deck6': [
        {
            'name': 'Boat',
            'subname': 'Seats: 2',
            'size': 2,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 4',
            'size': 4,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 6',
            'size': 6,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 8',
            'size': 8,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 10',
            'size': 10,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 12',
            'size': 12,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 14',
            'size': 14,
            'count': 1
        },
        {
            'name': 'Weather',
            'subname': '',
            'count': 14
        },
        {
            'name': 'Music',
            'subname': '',
            'count': 14
        },
        {
            'name': 'Water',
            'subname': '',
            'count': 20
        },
        {
            'name': 'Sun',
            'subname': '',
            'count': 21
        },
        {
            'name': 'Speed',
            'subname': '',
            'count': 14
        },
        {
            'name': 'Legal Substance',
            'subname': 'Bottle',
            'count': 6
        },
        {
            'name': 'Legal Substance',
            'subname': 'Can',
            'count': 6
        },
        {
            'name': 'Legal Substance',
            'subname': 'Hot Dog',
            'count': 6
        },
        {
            'name': 'Legal Substance',
            'subname': 'Sandwich',
            'count': 6
        },
        {
            'name': 'Legal Substance',
            'subname': 'Pipe',
            'count': 6
        },
        {
            'name': 'Legal Substance',
            'subname': 'Stick',
            'count': 6
        }
    ],
    'deck5': [
        {
            'name': 'Boat',
            'subname': 'Seats: 2',
            'size': 2,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 4',
            'size': 4,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 6',
            'size': 6,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 8',
            'size': 8,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 10',
            'size': 10,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 12',
            'size': 12,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 14',
            'size': 14,
            'count': 0
        },
        {
            'name': 'Weather',
            'subname': '',
            'count': 12
        },
        {
            'name': 'Music',
            'subname': '',
            'count': 12
        },
        {
            'name': 'Water',
            'subname': '',
            'count': 19
        },
        {
            'name': 'Sun',
            'subname': '',
            'count': 19
        },
        {
            'name': 'Speed',
            'subname': '',
            'count': 12
        },
        {
            'name': 'Legal Substance',
            'subname': 'Bottle',
            'count': 0
        },
        {
            'name': 'Legal Substance',
            'subname': 'Can',
            'count': 5
        },
        {
            'name': 'Legal Substance',
            'subname': 'Hot Dog',
            'count': 5
        },
        {
            'name': 'Legal Substance',
            'subname': 'Sandwich',
            'count': 5
        },
        {
            'name': 'Legal Substance',
            'subname': 'Pipe',
            'count': 5
        },
        {
            'name': 'Legal Substance',
            'subname': 'Pipe',
            'count': 5
        }
    ],
    'deck4': [
        {
            'name': 'Boat',
            'subname': 'Seats: 2',
            'size': 2,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 4',
            'size': 4,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 6',
            'size': 6,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 8',
            'size': 8,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 10',
            'size': 10,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 12',
            'size': 12,
            'count': 0
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 14',
            'size': 14,
            'count': 0
        },
        {
            'name': 'Weather',
            'subname': '',
            'count': 10
        },
        {
            'name': 'Music',
            'subname': '',
            'count': 10
        },
        {
            'name': 'Water',
            'subname': '',
            'count': 16
        },
        {
            'name': 'Sun',
            'subname': '',
            'count': 17
        },
        {
            'name': 'Speed',
            'subname': '',
            'count': 10
        },
        {
            'name': 'Legal Substance',
            'subname': 'Bottle',
            'count': 0
        },
        {
            'name': 'Legal Substance',
            'subname': 'Can',
            'count': 4
        },
        {
            'name': 'Legal Substance',
            'subname': 'Hot Dog',
            'count': 4
        },
        {
            'name': 'Legal Substance',
            'subname': 'Sandwich',
            'count': 4
        },
        {
            'name': 'Legal Substance',
            'subname': 'Pipe',
            'count': 0
        },
        {
            'name': 'Legal Substance',
            'subname': 'Stick',
            'count': 4
        }
    ],
    'deck3': [
        {
            'name': 'Boat',
            'subname': 'Seats: 2',
            'size': 2,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 4',
            'size': 4,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 6',
            'size': 6,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 8',
            'size': 8,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 10',
            'size': 10,
            'count': 0
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 12',
            'size': 12,
            'count': 0
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 14',
            'size': 14,
            'count': 0
        },
        {
            'name': 'Weather',
            'subname': '',
            'count': 8
        },
        {
            'name': 'Music',
            'subname': '',
            'count': 8
        },
        {
            'name': 'Water',
            'subname': '',
            'count': 13
        },
        {
            'name': 'Sun',
            'subname': '',
            'count': 13
        },
        {
            'name': 'Speed',
            'subname': '',
            'count': 8
        },
        {
            'name': 'Legal Substance',
            'subname': 'Bottle',
            'count': 0
        },
        {
            'name': 'Legal Substance',
            'subname': 'Can',
            'count': 3
        },
        {
            'name': 'Legal Substance',
            'subname': 'Hot Dog',
            'count': 0
        },
        {
            'name': 'Legal Substance',
            'subname': 'Sandwich',
            'count': 3
        },
        {
            'name': 'Legal Substance',
            'subname': 'Pipe',
            'count': 0
        },
        {
            'name': 'Legal Substance',
            'subname': 'Stick',
            'count': 3
        }
    ],
    'deck2': [
        {
            'name': 'Boat',
            'subname': 'Seats: 2',
            'size': 2,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 4',
            'size': 2,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 6',
            'size': 6,
            'count': 1
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 8',
            'size': 8,
            'count': 0
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 10',
            'size': 10,
            'count': 0
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 12',
            'size': 12,
            'count': 0
        },
        {
            'name': 'Boat',
            'subname': 'Seats: 14',
            'size': 14,
            'count': 0
        },
        {
            'name': 'Weather',
            'subname': '',
            'count': 6
        },
        {
            'name': 'Music',
            'subname': '',
            'count': 6
        },
        {
            'name': 'Water',
            'subname': '',
            'count': 8
        },
        {
            'name': 'Sun',
            'subname': '',
            'count': 9
        },
        {
            'name': 'Speed',
            'subname': '',
            'count': 6
        },
        {
            'name': 'Legal Substance',
            'subname': 'Bottle',
            'count': 0
        },
        {
            'name': 'Legal Substance',
            'subname': 'Can',
            'count': 0
        },
        {
            'name': 'Legal Substance',
            'subname': 'Hot Dog',
            'count': 0
        },
        {
            'name': 'Legal Substance',
            'subname': 'Sandwich',
            'count': 2
        },
        {
            'name': 'Legal Substance',
            'subname': 'Pipe',
            'count': 0
        },
        {
            'name': 'Legal Substance',
            'subname': 'Stick',
            'count': 2
        }
    ]
}

let scores = [];

let weatherScores = [];
let musicScores = [];
let speedScores = [];
let legalSubstanceScores = [];
let waterScores = [];
let sunScores = [];
let boatScores = [];
let trashScores = [];
let scoreDifferentials = [];

for (let i = 0; i < 1000; i++) {
    scores.push(0);
    weatherScores.push(0);
    musicScores.push(0);
    speedScores.push(0);
    legalSubstanceScores.push(0);
    waterScores.push(0);
    sunScores.push(0);
    boatScores.push(0);
    trashScores.push(0);
    scoreDifferentials.push(0);
}

for (let iterationCount = 0; iterationCount < iterations; iterationCount++) {
    let finalDeck = []

    for (let card of deckConfig['deck' + players]) {
        for (let i = 0; i < card.count; i++) {
            finalDeck.push(card);
        }
    }

    let handSize = finalDeck.length / players;
    let turns = handSize / 3;

    shuffleArray(finalDeck);

    let playerTableaus = [];

    for (let i = 0; i < players; i++) {
        let hand = [];

        for (let j = 0; j < handSize; j++) {
            hand.push(finalDeck.pop());
        }

        playerTableaus.push({
            'hand': hand,
            'human1': [],
            'human2': [],
            'doggo': [],
            'trash': [],
            'human1Used': false,
            'human2Used': false,
            'doggoUsed': false,
            'leftHand': null,
            'rightHand': null,
            'self': null,
            'passedCards': null,
            'waterHuman1Count': 0,
            'waterHuman2Count': 0,
            'waterDoggoCount': 0,
            'sunHuman1Count': 0,
            'sunHuman2Count': 0,
            'sunDoggoCount': 0,
            'speedCount': 0,
            'weatherCount': 0,
            'musicCount': 0,
            'legalSubstanceBottleCount': 0,
            'legalSubstancePipeCount': 0,
            'legalSubstanceSandwichCount': 0,
            'legalSubstanceStickCount': 0,
            'legalSubstanceCanCount': 0,
            'legalSubstanceHotDogCount': 0,
            'trashCount': 0,
            'boatSize': 0,
            'waterScore': 0,
            'sunScore': 0,
            'speedScore': 0,
            'weatherScore': 0,
            'musicScore': 0,
            'boatScore': 0,
            'legalSubstanceScore': 0,
            'trashScore': 0,
            'finalScore': 0
        });
    }

    for (let i = 0; i < turns; i++) {
        for (let h = 0; h < players; h++) {
            let hand = playerTableaus[h].hand;

            shuffleArray(hand);

            let leftPlayer = h - 1 >= 0 ? h - 1 : players - 1;
            let rightPlayer = h + 1 < players ? h + 1 : 0;

            playerTableaus[leftPlayer].rightHand = hand.pop();
            playerTableaus[rightPlayer].leftHand = hand.pop();
            playerTableaus[h].self = hand.pop();

            playerTableaus[leftPlayer].passedCards = hand;
            playerTableaus[h].hand = null;
        }

        for (let tableau of playerTableaus) {
            assignCards(tableau);
            tableau.hand = tableau.passedCards;
            tableau.passedCards = null;
        }
    }

    countTableaus(playerTableaus);
    scoreTableaus(playerTableaus);

    let lowScore = 1000;
    let highScore = 0;

    for (let tableau of playerTableaus) {
        if (tableau.finalScore < lowScore) {
            lowScore = tableau.finalScore;
        }

        if (tableau.finalScore > highScore) {
            highScore = tableau.finalScore;
        }

        if (!scores[String(tableau.finalScore)]) {
            scores[String(tableau.finalScore)] = 1;
        } else {
            scores[String(tableau.finalScore)]++;
        }

        if (!weatherScores[String(tableau.weatherScore)]) {
            weatherScores[String(tableau.weatherScore)] = 1;
        } else {
            weatherScores[String(tableau.weatherScore)]++;
        }

        if (!musicScores[String(tableau.musicScore)]) {
            musicScores[String(tableau.musicScore)] = 1;
        } else {
            musicScores[String(tableau.musicScore)]++;
        }

        if (!speedScores[String(tableau.speedScore)]) {
            speedScores[String(tableau.speedScore)] = 1;
        } else {
            speedScores[String(tableau.speedScore)]++;
        }

        if (!legalSubstanceScores[String(tableau.legalSubstanceScore)]) {
            legalSubstanceScores[String(tableau.legalSubstanceScore)] = 1;
        } else {
            legalSubstanceScores[String(tableau.legalSubstanceScore)]++;
        }

        if (!waterScores[String(tableau.waterScore)]) {
            waterScores[String(tableau.waterScore)] = 1;
        } else {
            waterScores[String(tableau.waterScore)]++;
        }

        if (!sunScores[String(tableau.sunScore)]) {
            sunScores[String(tableau.sunScore)] = 1;
        } else {
            sunScores[String(tableau.sunScore)]++;
        }

        if (!boatScores[String(tableau.boatScore)]) {
            boatScores[String(tableau.boatScore)] = 1;
        } else {
            boatScores[String(tableau.boatScore)]++;
        }

        if (!trashScores[String(tableau.trashScore)]) {
            trashScores[String(tableau.trashScore)] = 1;
        } else {
            trashScores[String(tableau.trashScore)]++;
        }
    }

    if (!scoreDifferentials[String(highScore - lowScore)]) {
        scoreDifferentials[String(highScore - lowScore)] = 1;
    } else {
        scoreDifferentials[String(highScore - lowScore)]++;
    }
}

console.log('Weather Scores');
console.log('--------------');
for (let i = 0; i < weatherScores.length; i++) {
    if (weatherScores[i] != 0) {
        console.log(i + ',' + weatherScores[i]);
    }
}
console.log('');

console.log('Music Scores');
console.log('------------');
for (let i = 0; i < musicScores.length; i++) {
    if (musicScores[i] != 0) {
        console.log(i + ',' + musicScores[i]);
    }
}
console.log('');

console.log('Speed Scores');
console.log('------------');
for (let i = 0; i < speedScores.length; i++) {
    if (speedScores[i] != 0) {
        console.log(i + ',' + speedScores[i]);
    }
}
console.log('');

console.log('Legal Substance Scores');
console.log('----------------------');
for (let i = 0; i < legalSubstanceScores.length; i++) {
    if (legalSubstanceScores[i] != 0) {
        console.log(i + ',' + legalSubstanceScores[i]);
    }
}
console.log('');

console.log('Water Scores');
console.log('------------');
for (let i = 0; i < waterScores.length; i++) {
    if (waterScores[i] != 0) {
        console.log(i + ',' + waterScores[i]);
    }
}
console.log('');

console.log('Sun Scores');
console.log('----------');
for (let i = 0; i < sunScores.length; i++) {
    if (sunScores[i] != 0) {
        console.log(i + ',' + sunScores[i]);
    }
}
console.log('');

console.log('Boat Scores');
console.log('-----------');
for (let i = 0; i < boatScores.length; i++) {
    if (boatScores[i] != 0) {
        console.log(i + ',' + boatScores[i]);
    }
}
console.log('');

console.log('Trash Scores');
console.log('------------');
for (let i = 0; i < trashScores.length; i++) {
    if (trashScores[i] != 0) {
        console.log(i + ',' + trashScores[i]);
    }
}
console.log('');

console.log('Total Scores');
console.log('------------');
for (let i = 0; i < scores.length; i++) {
    if (scores[i] != 0) {
        console.log(i + ',' + scores[i]);
    }
}
console.log('');

console.log('Score Differentials');
console.log('-------------------');
for (let i = 0; i < scoreDifferentials.length; i++) {
    if (scoreDifferentials[i] != 0) {
        console.log(i + ',' + scoreDifferentials[i]);
    }
}
console.log('');

console.log('Ties for First');
console.log('--------------');


//FUNCTIONS!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function assignCards(tableau) {
    assignCard(tableau.self, tableau);
    tableau.self = null;

    assignCard(tableau.leftHand, tableau);
    tableau.leftHand = null;

    assignCard(tableau.rightHand, tableau);
    tableau.rightHand = null;

    tableau.human1Used = false;
    tableau.human2Used = false;
    tableau.doggoUsed = false;
}

function assignCard(card, tableau) {
    switch (card.name) {
        case 'Boat':
            if (boaterContains(tableau.human1, card.name) || boaterContains(tableau.human2, card.name)) {
                tableau.trash.push(card);
            } else if (boaterContains(tableau.human1, card.name)) {
                tableau.human2.push(card);
                tableau.human2Used = true;
            } else {
                tableau.human1.push(card);
                tableau.human1Used = true;
            }
            break;
        case 'Weather':
            if (!tableau.human1Used) {
                tableau.human1.push(card);
                tableau.human1Used = true;
            } else if (!tableau.human2Used) {
                tableau.human2.push(card);
                tableau.human2Used = true;
            } else if (!tableau.doggoUsed) {
                tableau.doggo.push(card);
                tableau.doggoUsed = true;
            } else {
                tableau.trash.push(card);
            }
            break;
        case 'Legal Substance':
            switch (card.subname) {
                case 'Bottle':
                case 'Hot Dog':
                case 'Sandwich':
                    if (!tableau.human1Used) {
                        tableau.human1.push(card);
                        tableau.human1Used = true;
                    } else if (!tableau.human2Used) {
                        tableau.human2.push(card);
                        tableau.human2Used = true;
                    } else if (!tableau.doggoUsed) {
                        tableau.doggo.push(card);
                        tableau.doggoUsed = true;
                    }
                    break;
                case 'Pipe':
                case 'Can':
                case 'Stick':
                    if (!tableau.human1Used) {
                        tableau.human1.push(card);
                        tableau.human1Used = true;
                    } else if (!tableau.human2Used) {
                        tableau.human2.push(card);
                        tableau.human2Used = true;
                    } else {
                        tableau.trash.push(card);
                    }
                    break;
            }
            break;
        case 'Water':
            if (!tableau.human1Used && boaterContains(tableau.human1, card.name)) {
                tableau.human1.push(card);
                tableau.human1Used = true;
            } else if (!tableau.human2Used && boaterContains(tableau.human2, card.name)) {
                tableau.human2.push(card);
                tableau.human2Used = true;
            } else if (!tableau.doggoUsed && boaterContains(tableau.doggo, card.name)) {
                tableau.doggo.push(card);
                tableau.doggoUsed = true;
            } else if (!tableau.human1Used) {
                tableau.human1.push(card);
                tableau.human1Used = true;
            } else if (!tableau.human2Used) {
                tableau.human2.push(card);
                tableau.human2Used = true;
            } else if (!tableau.doggoUsed) {
                tableau.doggo.push(card);
                tableau.doggoUsed = true;
            } else {
                tableau.trash.push(card);
            }
            break;
        case 'Music':
            if (!tableau.human1Used && boaterContains(tableau.human1, card.name)) {
                tableau.human1.push(card);
                tableau.human1Used = true;
            } else if (!tableau.human2Used && boaterContains(tableau.human2, card.name)) {
                tableau.human2.push(card);
                tableau.human2Used = true;
            } else if (!tableau.human1Used) {
                tableau.human1.push(card);
                tableau.human1Used = true;
            } else if (!tableau.human2Used) {
                tableau.human2.push(card);
                tableau.human2Used = true;
            } else {
                tableau.trash.push(card);
            }
            break;
        case 'Speed':
            if (!tableau.human1Used && boaterContains(tableau.human1, 'Boat')) {
                tableau.human1.push(card);
                tableau.human1Used = true;
            } else if (!tableau.human2Used && boaterContains(tableau.human2, 'Boat')) {
                tableau.human2.push(card);
                tableau.human2Used = true;
            } else if (!tableau.human1Used && boaterContains(tableau.human1, 'Speed')) {
                tableau.human1.push(card);
                tableau.human1Used = true;
            } else if (!tableau.human2Used && boaterContains(tableau.human2, 'Speed')) {
                tableau.human2.push(card);
                tableau.human2Used = true;
            } else if (!tableau.human1Used) {
                tableau.human1.push(card);
                tableau.human1Used = true;
            } else if (!tableau.human2Used) {
                tableau.human2.push(card);
                tableau.human2Used = true;
            } else {
                tableau.trash.push(card);
            }
            break;
        case 'Sun':
            if (!tableau.human1Used && boaterContains(tableau.human1, card.name) === 1) {
                tableau.human1.push(card);
                tableau.human1Used = true;
            } else if (!tableau.human2Used && boaterContains(tableau.human2, card.name) === 1) {
                tableau.human2.push(card);
                tableau.human2Used = true;
            } else if (!tableau.doggoUsed && boaterContains(tableau.doggo, card.name) === 1) {
                tableau.doggo.push(card);
                tableau.doggoUsed = true;
            } else if (!tableau.human1Used && boaterContains(tableau.human1, card.name) < 2) {
                tableau.human1.push(card);
                tableau.human1Used = true;
            } else if (!tableau.human2Used && boaterContains(tableau.human2, card.name) < 2) {
                tableau.human2.push(card);
                tableau.human2Used = true;
            } else if (!tableau.doggoUsed && boaterContains(tableau.doggo, card.name) < 2) {
                tableau.doggo.push(card);
                tableau.doggoUsed = true;
            } else if (!tableau.human1Used) {
                tableau.human1.push(card);
                tableau.human1Used = true;
            } else if (!tableau.human2Used) {
                tableau.human2.push(card);
                tableau.human2Used = true;
            } else if (!tableau.doggoUsed) {
                tableau.doggo.push(card);
                tableau.doggoUsed = true;
            } else {
                tableau.trash.push(card);
            }
            break;
    }
}

function boaterContains(boater, cardName, subname) {
    let count = 0;

    for (let card of boater) {
        if (card.name === cardName && (subname === undefined || card.subname === subname)) {
            count++;
        }
    }
    return count;
}

function countTableaus(playerTableaus) {
    for (let tableau of playerTableaus) {
        tableau.weatherCount = boaterContains(tableau.human1, 'Weather') + boaterContains(tableau.human2, 'Weather') + boaterContains(tableau.doggo, 'Weather');
        tableau.musicCount = boaterContains(tableau.human1, 'Music') + boaterContains(tableau.human2, 'Music');
        tableau.speedCount = boaterContains(tableau.human1, 'Speed') + boaterContains(tableau.human2, 'Speed');
        tableau.legalSubstanceBottleCount = boaterContains(tableau.human1, 'Legal Substance', 'Bottle') + boaterContains(tableau.human2, 'Legal Substance', 'Bottle') + boaterContains(tableau.doggo, 'Legal Substance', 'Bottle');
        tableau.legalSubstanceHotDogCount = boaterContains(tableau.human1, 'Legal Substance', 'Hot Dog') + boaterContains(tableau.human2, 'Legal Substance', 'Hot Dog') + boaterContains(tableau.doggo, 'Legal Substance', 'Hot Dog');
        tableau.legalSubstanceSandwichCount = boaterContains(tableau.human1, 'Legal Substance', 'Sandwich') + boaterContains(tableau.human2, 'Legal Substance', 'Sandwich') + boaterContains(tableau.doggo, 'Legal Substance', 'Sandwich');
        tableau.legalSubstanceCanCount = boaterContains(tableau.human1, 'Legal Substance', 'Can') + boaterContains(tableau.human2, 'Legal Substance', 'Can');
        tableau.legalSubstancePipeCount = boaterContains(tableau.human1, 'Legal Substance', 'Pipe') + boaterContains(tableau.human2, 'Legal Substance', 'Pipe');
        tableau.legalSubstanceStickCount = boaterContains(tableau.human1, 'Legal Substance', 'Stick') + boaterContains(tableau.human2, 'Legal Substance', 'Stick');
        tableau.trashCount = tableau.trash.length;
        tableau.waterHuman1Count = boaterContains(tableau.human1, 'Water');
        tableau.waterHuman2Count = boaterContains(tableau.human2, 'Water');
        tableau.waterDoggoCount = boaterContains(tableau.doggo, 'Water');
        tableau.sunHuman1Count = boaterContains(tableau.human1, 'Sun');
        tableau.sunHuman2Count = boaterContains(tableau.human2, 'Sun');
        tableau.sunDoggoCount = boaterContains(tableau.doggo, 'Sun');

        getBoatSize(tableau);
    }
}

function getBoatSize(tableau) {
    for (let card of tableau.human1) {
        if (card.name === 'Boat') {
            tableau.boatSize = card.size;
            return;
        }
    }
}

function scoreTableaus(playerTableaus) {
    let leastWeather = deckConfig['deck' + players].filter(c => c.name === 'Weather')[0].count;
    let mostMusic = 0;
    let leastSpeed = deckConfig['deck' + players].filter(c => c.name === 'Speed')[0].count;
    let mostSpeed = 0;
    let mostPipe = 0;
    let mostSandwich = 0;
    let mostHotDog = 0;
    let mostStick = 0;
    let mostCan = 0;
    let mostBottle = 0;

    for (let h = 0; h < players; h++) {
        let tableau = playerTableaus[h];

        let leftPlayer = h - 1 >= 0 ? h - 1 : players - 1;
        let rightPlayer = h + 1 < players ? h + 1 : 0;

        if (tableau.boatSize > playerTableaus[leftPlayer].boatSize) {
            tableau.boatScore += 5;
        }

        if (tableau.boatSize > playerTableaus[rightPlayer].boatSize) {
            tableau.boatScore += 5;
        }

        if (tableau.weatherCount < leastWeather) {
            leastWeather = tableau.weatherCount;
        }

        if (tableau.musicCount > mostMusic) {
            mostMusic = tableau.musicCount;
        }

        if (tableau.speedCount > 0 && tableau.speedCount < leastSpeed) {
            leastSpeed = tableau.speedCount;
        }

        if (tableau.speedCount > mostSpeed) {
            mostSpeed = tableau.speedCount;
        }

        if (tableau.legalSubstanceBottleCount > mostBottle) {
            mostBottle = tableau.legalSubstanceBottleCount;
        }

        if (tableau.legalSubstancePipeCount > mostPipe) {
            mostPipe = tableau.legalSubstancePipeCount;
        }

        if (tableau.legalSubstanceCanCount > mostCan) {
            mostCan = tableau.legalSubstanceCanCount;
        }

        if (tableau.legalSubstanceHotDogCount > mostHotDog) {
            mostHotDog = tableau.legalSubstanceHotDogCount;
        }

        if (tableau.legalSubstanceSandwichCount > mostSandwich) {
            mostSandwich = tableau.legalSubstanceSandwichCount
        }

        if (tableau.legalSubstanceStickCount > mostStick) {
            mostStick = tableau.legalSubstanceStickCount;
        }

        tableau.waterScore += waterCalculator(tableau.waterDoggoCount) + waterCalculator(tableau.waterHuman1Count) + waterCalculator(tableau.waterHuman2Count);

        if (tableau.sunDoggoCount == 2) {
            tableau.sunScore += 5;
        }

        if (tableau.sunHuman1Count == 2) {
            tableau.sunScore += 5;
        }

        if (tableau.sunHuman2Count == 2) {
            tableau.sunScore += 5;
        }

        if (tableau.sunDoggoCount > 2) {
            tableau.sunScore -= (tableau.sunDoggoCount - 2) * 2;
        }

        if (tableau.sunHuman1Count > 2) {
            tableau.sunScore -= (tableau.sunHuman1Count - 2) * 2;
        }

        if (tableau.sunHuman2Count > 2) {
            tableau.sunScore -= (tableau.sunHuman2Count - 2) * 2;
        }

        tableau.trashScore = tableau.trashCount;
    }

    for (let tableau of playerTableaus) {
        if (tableau.weatherCount === leastWeather) {
            tableau.weatherScore += 15;
        }

        if (tableau.musicCount === mostMusic) {
            tableau.musicScore += 15;
        }

        if (tableau.speedCount === mostSpeed) {
            tableau.speedScore += 15;
        }

        if (tableau.speedCount === leastSpeed) {
            tableau.speedScore += 10;
        }

        if (tableau.legalSubstanceStickCount < mostStick) {
            tableau.legalSubstanceScore += 3;
        }

        if (tableau.legalSubstanceSandwichCount < mostSandwich) {
            tableau.legalSubstanceScore += 3;
        }

        if (tableau.legalSubstancePipeCount < mostPipe) {
            tableau.legalSubstanceScore += 3;
        }

        if (tableau.legalSubstanceHotDogCount < mostHotDog) {
            tableau.legalSubstanceScore += 3;
        }

        if (tableau.legalSubstanceCanCount < mostCan) {
            tableau.legalSubstanceScore += 3;
        }

        if (tableau.legalSubstanceBottleCount < mostBottle) {
            tableau.legalSubstanceScore += 3;
        }
    }

    for (let tableau of playerTableaus) {
        tableau.finalScore = tableau.weatherScore + tableau.musicScore + tableau.speedScore + tableau.legalSubstanceScore + tableau.waterScore + tableau.sunScore + tableau.boatScore - tableau.trashScore;
    }
}

function waterCalculator(count) {
    switch (count) {
        case 0:
            return 0;
        case 1:
            return 2;
        case 2:
            return 3;
        case 3:
            return 5;
        case 4:
            return 8;
        case 5:
            return 13;
        case 6:
            return 21;
        case 7:
            return 34;
    }
}

//Shamelessly stolen from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}