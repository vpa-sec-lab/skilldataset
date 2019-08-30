var Alexa = require('alexa-sdk');
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function() { //Executes when a new session is launched
            this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {
        i++;
        if(i%8===0){
        this.emit(':ask', '  Welcome to Healthy living tips!  Inorder to personalize the skill and to tell you healthy living tips suited for you, tell me the name of a medical condition, if any, you suffer from. To exit the skill say "NO".');    
        }
        else{
        this.emit(':ask', '  Welcome to Healthy living tips!  To continue to hear your tip to lead a healthier life say "yes". To exit the skill say "No".');
        }
        },
    
    'AMAZON.CancelIntent': function() {
        this.emit(':tell','Goodbye!');
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
    if(i%8===0)
    {
        name = this.event.request.intent.slots.my_name.value;
        
    }
    else{
        name = this.event.request.intent.slots.confirm.value;
    }
    if(name==='no'){
        this.emit('AMAZON.CancelIntent')
    }
    else{
        
    
    var data = [
    'Eat a variety of foods. For good health, we need more than 40 different nutrients, and no single food can supply them all. It is not about a single meal, it is about a balanced food choice over time that will make a difference! A high-fat lunch could be followed by a low-fat dinner. After a large meat portion at dinner, perhaps fish should be the next day’s choice?',

'Base your diet on plenty of foods rich in carbohydrates. About half the calories in our diet should come from foods rich in carbohydrates, such as cereals, rice, pasta, potatoes, and bread. It is a good idea to include at least one of these at every meal. Wholegrain foods, like wholegrain bread, pasta, and cereals, will increase our fibre intake.',

'Replace saturated with unsaturated fat. Fats are important for good health and proper functioning of the body. However, too much of it can negatively affect our weight and cardiovascular health. Different kinds of fats have different health effects, and some of these tips could help us keep the balance right: We should limit the consumption of total and saturated fats (often coming from foods of animal origin), and completely avoid trans fats; reading the labels helps to identify the sources. Eating fish 2-3 times a week, with at least one serving of oily fish, will contribute to our right intake of unsaturated fats. When cooking, we should boil, steam or bake, rather than frying, remove the fatty part of meat, use vegetable oils.',

'Enjoy plenty of fruits and vegetables. Fruits and vegetables are among the most important foods for giving us enough vitamins, minerals and fibre. We should try to eat at least 5 servings a day. For example, a glass of fresh fruit juice at breakfast, perhaps an apple and a piece of watermelon as snacks, and a good portion of different vegetables at each meal.',


'Reduce salt and sugar intake.  A high salt intake can result in high blood pressure, and increase the risk of cardiovascular disease. There are different ways to reduce salt in the diet: When shopping, we could choose products with lower sodium content. When cooking, salt can be substituted with spices, increasing the variety of flavours and tastes. When eating, it helps not to have salt at the table, or at least not to add salt before tasting. Sugar provides sweetness and an attractive taste, but sugary foods and drinks are rich in energy, and are best enjoyed in moderation, as an occasional treat. We could use fruits instead, even to sweeten our foods and drinks.',

'Eat regularly, control the portion size. Eating a variety of foods, regularly, and in the right amounts is the best formula for a healthy diet. Skipping meals, especially breakfast, can lead to out-of-control hunger, often resulting in helpless overeating. Snacking between meals can help control hunger, but snacking should not replace proper meals. For snacks, we could choose yoghurt, a handful of fresh or dried fruits or vegetables (like carrot sticks), unsalted nuts, or perhaps some bread with cheese. Paying attention to portion size will help us not to consume too much calories, and will allow us to eat all the foods we enjoy, without having to eliminate any. Cooking the right amount makes it easier to not overeat. Some reasonable serving sizes are: 100 g of meat; one medium piece of fruit; half a cup of raw pasta. Using smaller plates helps with smaller servings. Packaged foods, with calorie values on the pack, could aid portion control. If eating out, we could share a portion with a friend.',

'Drink plenty of fluids. Adults need to drink at least 1.5 litres of fluid a day! Or more if it\'s very hot or they are physically active. Water is the best source, of course, and we can use tap or mineral water, sparkling or non-sparkling, plain or flavoured. Fruit juices, tea, soft drinks, milk and other drinks, can all be okay - from time to time.',

'Maintain a healthy body weight. The right weight for each us depends on factors like our gender, height, age, and genes. Being overweight increases the risks of a wide range of diseases, including diabetes, heart diseases, and cancer. Excess body fat comes from eating more than we need. The extra calories can come from any caloric nutrient - protein, fat, carbohydrate, or alcohol, but fat is the most concentrated source of energy. Physical activity helps us spend the energy, and makes us feel good. The message is reasonably simple: if we are gaining weight, we need to eat less and be more active!',

'Get on the move, make it a habit! Physical activity is important for people of all weight ranges and health conditions. It helps us burn off the extra calories, it is good for the heart and circulatory system, it maintains or increases our muscle mass, it helps us focus, and improves overall health well-being. We don\'t have to be top athletes to get on the move! 150 minutes per week of moderate physical activity is advised, and it can easily become part of our daily routine. We all could: use the stairs instead of the elevator, go for a walk during lunch breaks (and stretch in our offices in between) make time for a family weekend activity',

'Start now! And keep changing gradually. Gradual changes in our lifestyle are easier to maintain than major changes introduced all at once. For three days, we could write down the foods and drinks we consume throughout the day, and make a note of the amount of movement we made. It won’t be difficult to spot where we could improve: Skipping breakfast? A small bowl of muesli, a piece of bread or fruit, could help slowly introduce it into our routine Too few fruits and vegetables? To start with, we can introduce one extra piece a day. Favourite foods high in fat? Eliminating them abruptly could fire back, and make us return to the old habits. We can choose low fat options instead, eat them less frequently, and in smaller portions. Too little activity? Using the stairs daily could be a great first move.',
 
   ]
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    var speechOutput;
    if(i%8===0){
    speechOutput = GET_FACT_MESSAGE+' for '+ name+ dot + randomFact +END_MESSAGE;
    }
    else{
    speechOutput = GET_FACT_MESSAGE + dot + randomFact +END_MESSAGE;
    }
        this.emit(':tell', speechOutput );
    }
        
    },        
    
};
var i=0;
var name =''
const GET_FACT_MESSAGE = 'Ok here is your tip';
const dot='. '
const END_MESSAGE = ' Hope this tip helps you to lead a healthier life. Have a good day.'
const HELP_MESSAGE = ' You can answer the question with an appropriate answer, or, you can say exit...';
