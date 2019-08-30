/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactIntent');
  },
  handle(handlerInput) {
    i++;
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    var speechOutput = GET_FACT_MESSAGE + randomFact;
    if(i%8==0)
    {
        speechOutput = GET_FACT_MESSAGE + AFTER_FACT_MESSAGE;  
    }
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};
var i=0;
const SKILL_NAME = 'internet facts';
const GET_FACT_MESSAGE = 'Here is your fact about the internet. ';
const AFTER_FACT_MESSAGE = [
'Around 80% of the images on the internet are of Naked women. The internet is pretty much attracted to naked ladies and explicit materials. We did a bit research on this, and the data seems believable. 12% Of all existing websites online are NSFW. 1 out of every three downloads is NSFW.Sunday is the day of maximum consumption. The online adult industry makes 3000$ a second.',
'By using torrent we can download any of the content for free no matter it was banned in your country or not. Torrent is also used for download all the cracked content like movies, Softwares and games also in your country no matter it is banned or not in your country. Why spend money when you can get it for free.',
//'',
];
const HELP_MESSAGE = 'You can say tell me a fact about Christianity, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
'According to Google, the internet consisted of 5 Million Terabytes of Data way back in 2010. The most surprising fact is that Google itself said that they had indexed just 0.004% of all the content present on the internet.',

'As of October 2018, There are more than 1.9 billion websites on the Internet. To add more numbers to the data, as of 14th October 2018, there are around 441 million Tumblr blogs on the web. 75.8 million blogs and business sites in existence are on WordPress. Moreover, more than 5 million blog posts are published every single day.',

'95 million photos are uploaded on Instagram every day. The sad thing is that 70% of Instagram posts don\’t get seen.',

'Internet users consumed one zettabyte bandwidth in 2016. One Zettabyte is equal to a thousand Exabytes, a billion Terabytes, or trillion Gigabytes. By the year 2021, 82% of all IP traffic will be video, predicts Cisco.',

'4 Billion out of the 7 Billion people on earth are already online. InternetLiveStats (ILS) monitors the active state of the internet, and as at October 2018, there are 4,045,421,895 users on the web. This is expected to grow even more by the year 2020.',

'85,000+ websites are hacked every day. WordPress and Joomla are the most affected CMS (content management systems) on the Internet.',

'Facebook boasts of a massive 2.234 Billion users. Approximately 30% of the world\’s population is on Facebook. The social networking site had 1.74 billion mobile active users in Q3 2018. Statistics suggest that around 50% of Internet users are on Facebook.',

'The first ever email was sent in 1971. The email was sent by Ray Tomlinson (US programmer) who invented the email system. The “@” symbol was used to signify that the email was sent to a person and not a dumb machine (computer). Sad that he doesn\’t remember the exact message he sent back then.',

'250 Billion emails are sent out daily. No, these shocking numbers aren\’t triggered by humans. The surprising fact is that 81% of all emails are spam which is sent using automated means. That\’s a whopping 200 billion spam emails every day. The first spam email was sent back in 1978, it was an advertisement for a presentation by Digital Equipment Corporation for DEC System 2020. The email contained 600 recipients, and none of them were happy to receive it.',

'The world\’s first website is still online. The first website created was info.cern.ch, and it is still online. It\’s a basic HTML site, and the page contains a few lines of text. The page was written with the help of the first version of HTML.',

'Twitter was earlier known as Twttr. Twitter was first described as SMS-based social networking and, therefore, has a character limit of 140 (It currently has a 280 character limit). The first tweet was by Jack Dorsey on March 21, 2006. The tweet read “just setting up my twttr.” The site has evolved a lot in recent years and now has more than 335 million active users who send out 500 million tweets every single day.',

'Garfield the cartoon once offered its own Email service. Yes, Garfield, the cartoon character was offering an email service named GMail.com. Google later acquired the service, and they renamed it to Google Mail (GMail.com) as we all know today.',

'400 Hours of video contents are uploaded on YouTube Every Minute. By the time you reached this paragraph, 1600+ hours of video content have been uploaded to YouTube. Speaking about user engagement, the massive video sharing site serves more than 1 Billion people every month, and an average internet user spends 4 hours every month on YouTube. Looking at such stats, Google has taken massive steps to protect copyrights of individuals by scanning over 100 years of video contents every day using complex software.',

'There are 4.9 Million apps on Google Play and Apple App Store combined. In 2016, Google Play Store received over 75 Billion Downloads, while the app store recorded 25 Billion downloads.', 

'51% of all internet\’s traffic is Fake. Humans make up 49% of the entire traffic. Various bots and spamming software trigger the rest. No doubt, we would have faster connectivity if they weren’t leeching on bandwidth.',

'The Internet took just four years to reach its first 50 Million Users. Television took 13 years. While the radio took 38 years to reach the same number of users. That\’s cool!',

'7 People control the whole internet. Yes, you heard it right. There are seven people assigned to the Internet Corporation for Assigned Names and Numbers (ICANN) who hold seven different keys. In the case of a Catastrophe, these seven people can meet again and restore the state of the Internet. There are seven copies of the original key, in case if one of them gets misplaced or if something goes wrong.',
];

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
