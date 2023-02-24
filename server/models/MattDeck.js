// rough draft of the Deck model from Matt

/*
To-do/decks for development:
* How do we indicate the author of a deck? For the purposes of the project a deck should only have one author but maybe a "future development" topic could allow for deck co-authors, etc.
* How would we tie a card to a specific deck? IMO a given card should only be able to belong to a specific deck.

*/

// model for decks, which contain one or more cards

const { Schema, model } = require("mongoose");
// Moment.js import
const moment = require("moment");

// Schema for Card subdocument

const cardSchema = new Schema({
    // Setting an ID for an individual card 
    cardId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    // An individual card's subject
    cardSubject: { type: String, required: true, minLength: 1, maxLength: 100 },
    // The content/description/information on the card's subject
    cardContent: { type: String, required: true, minLength: 1, maxLength: 1000 },
    // Reference for the card, if applicable
    cardReference: { type: String, default: "None provided" },
}, 
{
    toJSON: {
        virtuals: true,
    },
    id: true,
});

// Schema for Deck

const deckSchema = new Schema({
    // Title of a given Deck
    title: { type: String, required: true, unique: true, trim: true },
    // Array of cards in the Deck
    cards: [{
        type: Schema.Types.ObjectId,
        ref: "Card",
    }],
    // Create date of the Deck - set as a moment.js string for now but can be reformatted to a Date object if deemed useful
    createdAt: { type: String, default: moment().format("MMMM Do YYYY")}
    // Should we have a last modified date?
},
{
    toJSON: {
        // Virtual use enabled
        virtuals: true,
    },
    id: true,
});

// Virtuals below here if we decide on any we want - # of cards in a deck (i.e. the array length) seems useful

// Deck model declaration

const Deck = model("Deck", deckSchema);

// Card model declaration

const Card = model("Card", cardSchema);

// Model exports - don't know that we need to export Card but threw it in for now.

module.exports = { Deck, Card };