var Alexa = require('alexa-sdk');


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    alexa.dynamoDBTableName = 'sampleLangaugeTable'; // creates new table for session.attributes

    alexa.registerHandlers(handlers);
    alexa.execute();
};
var i=0; var ch="first"; var ch2; var ln="last"; var ch3;
var handlers = {
    'LaunchRequest': function() { //Executes when a new session is launched
     //   if (this.attributes['my_name']) {
            this.emit('LaunchIntent');
  //      } 
    },

    'LaunchIntent': function() {
        this.emit(':ask', ' <emphasis level="strong"> Whats up kids! Its storytime!  </emphasis> Today you are going to hear a story with you as the main character.  To begin, please tell me your name?');
    },
    
    'AMAZON.CancelIntent': function() {
        this.emit(':tell','Goodbye!');
//        this.body.response.shouldEndSession= true
    },
    
    'AMAZON.HelpIntent': function() {
        this.emit('LaunchIntent');
    },
    
    'AMAZON.StopIntent': function() {
         this.emit(':tell','Goodbye!');
    },
    
    'SessionEndedRequest':function() {
         console.log('Session ended'); 
    },

    'LanguageIntent': function() {
    ch2=ch+i;
    ch3=ln+i;
    i++;
    this.attributes[ch2] = this.event.request.intent.slots.my_name.value;
    this.attributes[ch3] = this.event.request.intent.slots.my_lastname.value;
//    name = this.event.request.intent.slots.my_name.value;
    var data = [
    '<prosody rate="slow"> Two men named '+ this.attributes[ch2] + ' ' + this.attributes[ch3] +' and Paul were traveling in company along the road when '+ this.attributes[ch2] +' picked up a well-filled purse. "How lucky I am!" '+ this.attributes[ch2] +' said. "I have found a purse. Judging by its weight it must be full of gold." "Do not say \'I have found a purse,\'" said Paul. "Say rather \'we have found a purse\' and \'how lucky we are.\' Travelers ought to share alike the fortunes or misfortunes of the road." "No, no," replied '+ this.attributes[ch2] +' angrily. "I found it and I am going to keep it." Just then they heard a shout of "Stop, thief!" and looking around, saw a mob of people armed with clubs coming down the road.'+ this.attributes[ch2] +', who had found the purse and fell into a panic. "We are lost if they find the purse on us," he cried. "No, no," replied Paul, "You would not say \'we\' before, so now stick to your \'I\'. Say \'I am lost.\'" The moral of the story is “We cannot expect any one to share our misfortunes unless we are willing to share our good fortune also”.</prosody>',
    '<prosody rate="slow"> '+this.attributes[ch2]+ ' ' + this.attributes[ch3] +', a poor barber lived alone in his small hut. He was dedicated to his work. And whatever he earns was enough to fulfill his needs. One evening, after returning from work, '+this.attributes[ch2]+' was hungry. “What shall I cook tonight?" he thought. Just then he heard a hen clucking outside his hut. “That hen would make a great feast for me," thought '+this.attributes[ch2]+' and prepared to catch the hen.  With a little effort he was able to catch the hen. As he was about to kill the hen, it squeaked, “Please do not kill me, O kind man! I will help you." '+this.attributes[ch2]+' stopped. Though he was surprised that the hen spoke, he asked, “How can you help me?" “If you spare my life, I will lay a golden egg everyday for you," said the hen. '+this.attributes[ch2]+'’s eyes got widened in delight. '+this.attributes[ch2]+' was surprised to hear this promise. “A golden egg! That too everyday! But why should I believe you? You might be lying," said '+this.attributes[ch2]+'. “If I do not lay a golden egg tomorrow, you can kill me," said the hen. After this promise, '+this.attributes[ch2]+' spared the hen and waited for the next day. The next morning, '+this.attributes[ch2]+' found a golden egg lying outside his hut and the hen sitting beside it. “It is true! You really can lay a golden egg!" exclaimed '+this.attributes[ch2]+' with great delight. He did not reveal this incident to any one, fearing that others would catch the hen. From that day onwards, the hen would lay a golden egg everyday. In return, '+this.attributes[ch2]+' took good care of the hen. Very soon, '+this.attributes[ch2]+' became rich.  But he became greedy. He thought, “If I cut open the hen’s stomach, I can get out all the golden eggs at once. I do not have to wait for the hen to lay the golden eggs one by one."  That night, he brought the hen to the interior portion of his house and killed the hen. But to his dismay, he found no golden eggs. Not even one.  “What have I done? My greed had made me kill the hen," he wailed. But it was too late. </prosody>',
    '<prosody rate="slow"> Once there lived a milkman named '+this.attributes[ch2]+ ' ' + this.attributes[ch3] + '. '+this.attributes[ch2]+' became very wealthy through dishonest means. He had to cross a river daily to reach the city where his customers lived. He mixed the water of the river generously with the milk that he sold for a good profit. One day '+this.attributes[ch2]+' went around collecting the dues in order to celebrate the wedding of his son. With the large amount thus collected he purchased plenty of rich clothes and glittering gold ornaments. But while crossing the river the boat capsized and all his costly purchases were swallowed by the river. '+this.attributes[ch2]+' was speechless with grief. At that time he heard a voice that came from the river, “Do not weep. What you have lost is only the illicit gains you earned through cheating your customers The moral of the story is that Honest dealings are always supreme. Money earned by wrong methods will never remain for ever.</prosody>',
    '<prosody rate="slow"> Once there lived a very hardworking farmer named '+this.attributes[ch2]+ ' ' + this.attributes[ch3] +'. He has three sons James, Jacob and Jonas. All three were strong and healthy. But they were all lazy. '+this.attributes[ch2]+' was sad thinking about his sons and the future of his farmland. One day, '+this.attributes[ch2]+' got a flash of an idea. He called all his sons and said, “James! Jacob! and Jonas! I have hidden a treasure in our farmland. You search and share the treasure among you." The three sons were overjoyed. They went to the fields and started searching James started from one end. Jacob searched from the other end. And Jonas did so from the centre. They dug each and every inch of the field. But they could not find anything. '+this.attributes[ch2]+' said to his sons, “Dear boys! Now you have tooled and conditioned the field, why not we sow a crop!" Off went the sons to sow the crops. Days passed. Soon, the crops grew lushly green. The sons were delighted. The father said, "Sons, this is the real treasure I wanted you to share”. The MORAL of the story is Fruits of hard work are always sweet.</prosody>',
   ]
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    
    const speechOutput = GET_FACT_MESSAGE + randomFact +END_MESSAGE;
        this.emit(':tell', speechOutput );
    },        

    'TestIntent': function() {
        this.emit(':tell', '<prosody rate="slow">"I still remember that your name is, " + this.attributes[ch2] </prosody>'); //this.attributes['my_name']
    }
    
    
};
const GET_FACT_MESSAGE = 'Here is your story.';
const END_MESSAGE = 'Hope you liked the story. Have a good night.'
const HELP_MESSAGE = 'You can answer the question with an appropriate answer, or, you can say exit...';
