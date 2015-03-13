var $apiKey = 'u6w0b9r3m9v3g6e1l5v4f8x5e1v5c8r4';
/* ML Subscribers API */
var Mailersoft = require('./index');
var mailersoft = new Mailersoft($apiKey);

var $ML_Subscribers = mailersoft.subscribers;
var $ML_Campaigns = mailersoft.campaigns;
var $ML_lists = mailersoft.lists;
var $ML_Messages = mailersoft.messages;

/*
var $subscriber = [
         {
         email: 'd.o.gusev@gmail.com',
         name: 'First name'
         },
        {
            email: 'dgusev@q-page.com',
            name: 'First name'
        }
    ];
         
$ML_Messages.setId('31044183').addRecipients($subscriber).send(function(r){
    console.log(r);
});*/
        /*
         var $subscriber = [
         {
         'email': 'example1@email.com',
         'name': 'First name'
         },
         {
         'email': 'example2@email.com',
         'name': 'First name'
         }
         ];
         
         $ML_Subscribers.setId('1654219').addAll($subscriber, 1, function (r) {
         console.log(r);
         });
         
         
         
         
         
         $ML_Subscribers.unsubscribe('example1@email.com', function (r) {
         console.log(r);
         });
         
         
         
         $ML_Subscribers.setId('ID').remove('example1@email.com', function (r) {
         console.log(r);
         });
         
         
         
         $ML_Subscribers.get('example1@email.com', true, function (r) {
         console.log(r);
         });
         
         

         var $subscriber = {
         form: {
         'email': 'info.sd.illi@gmail.com',
         'name': 'dfsdf'
         }
         };
         $ML_Subscribers.setId('3008681').add($subscriber, 1 ,function(r){
         console.log(r);
         });

         
         ML CAMPAINGNS API  
         
         $ML_Campaigns.setId('ID').getJunk(false, function (r) {
         console.log(r);
         });
         
         $ML_Campaigns.setId('ID').getBounces(false, function (r) {
         console.log(r);
         });
         
         $ML_Campaigns.setId('ID').getUnsubscribes(false, function (r) {
         console.log(r);
         });
         
         $ML_Campaigns.setId('ID').getClicks(false, function (r) {
         console.log(r);
         });
         
         $ML_Campaigns.setId('ID').getOpens(false, function (r) {
         console.log(r);
         });
         
         
         $ML_Campaigns.setId('ID').getRecipients(false, function (r) {
         console.log(r);
         });
         
         $ML_Campaigns.setId('ID').get(false, function (r) {
         console.log(r);
         });
         
         $ML_Campaigns.getAll(false, function (r) {
         console.log('getAll', r);
         });
         
         
         
         
         
         ML LISTS API  
         
         $ML_lists.setId('ID').getBounced(false,function (r) {
         console.log('getBounced', r);
         })
         
         $ML_lists.setId('ID').getUnsubscribed(false,function (r) {
         console.log('getUnsubscribed', r);
         });
         
         $ML_lists.setId('ID').getActive(false,function (r) {
         console.log('getActive', r);
         });

         $ML_lists.getAll(false, function (r) {
         console.log('getAll', JSON.stringify(r));
         });

         $ML_lists.setId('ID').remove(false, function (r) {
         console.log('remove', r);
         });
         
         $ML_lists.setId('ID').put({name:"New name"}, function (r) {
         console.log('put', r);
         });
         
         $ML_lists.add({form:{"name": "new list name"}}, function (r) {
         console.log('add ', r);
         });

         $ML_lists.setId('3008681').get(false, function (r) {
         console.log('get', r);
         });
         */