const quoteList = [
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
        author:"– Steve Jobs",
    },
    {
        quote: "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.",
        author:"— Celine Dion",
    },
    {
        quote: "Live for each second without hesitation.",
        author:"— Elton John",
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author:"— Albert Einstein",
    },
    {
        quote:"When we do the best we can, we never know what miracle is wrought in our life or the life of another.",
        author:"— Helen Keller",
    },
    {
        quote:"In three words I can sum up everything I've learned about life: It goes on.",
        author:"― Robert Frost",
    },
    {
        quote:"My mama always said, life is like a box of chocolates. You never know what you're gonna get.",
        author:"— Forrest Gump",
    },
    {
        quote:"Dont settle for what life gives you; make life better and build something.",
        author:"— Ashton Kutcher",
    },

]

const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");


btn.addEventListener("click",()=>{
    let random = Math.floor(Math.random()*quoteList.length);
    let quotes = quoteList[random];
    console.log(random)
    quote.innerHTML = quotes.quote;
    author.innerHTML = quotes.author;
})