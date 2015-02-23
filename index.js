var ML_Subscribers = require('./lib/ML_Subscribers');
var ML_Campaigns = require('./lib/ML_Campaigns');
var ML_Lists = require('./lib/ML_lists');
var ML_Messages = require('./lib/ML_Messages');

module.exports = function ($apiKey) {

    this.subscribers = new ML_Subscribers($apiKey);

    this.campaigns = new ML_Campaigns($apiKey);

    this.lists = new ML_Lists($apiKey);
    
    this.messages = new ML_Messages($apiKey);

};