const quotes = [
  {
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela",
  },
  {
    quote:"In the end, it’s not the years in your life that count. It’s the life in your years.",
    author:"Abraham Lincoln",
  },
  {
    quote:"Life is either a daring adventure or nothing at all.",
    author:"Helen Keller",
  },
  {
    quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author:"Thomas A. Edison",
  },
  {
    quote:"Despite the forecast, live like it’s spring.",
    author:"Lilly Pulitzer",
  },
  {
    quote:"There is always some madness in love. But there is also always some reason in madness.",
    author:"Friedrich Nietzsche",
  },
  {
    quote:"Love asks me no questions, and gives me endless support.",
    author:"William Shakespeare",
  },
  {
    quote:"If you would be loved, love and be lovable.",
    author:"Benjamin Franklin",
  },
  {
    quote:"We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
    author:"Anonymous",
  },
  {
    quote:"If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward. ",
    author:"Martin Luther King",
  },
  {
    quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. ",
    author:"Thomas Edison",
  },
  {
    quote:"Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you ‘re not doing a tour of gas stations. ",
    author:"Tim O’Reilly",
  },
  {
    quote:"I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.",
    author:"G. K. Chesterton",
  },
  {
    quote:"I find that the harder I work, the more luck I seem to have.",
    author:"Thomas Jefferson",
  },
  {
    quote:"We must believe in luck. For how else can we explain the success of those we don’t like?",
    author:"Jean Cocteau",
  },
  {
    quote:"Always bear in mind that your own resolution to succeed is more important than any other",
    author:"Abraham Lincoln",
  },
  {
    quote:"There is no use whatever trying to help people who do not help themselves. You cannot push anyone up a ladder unless he be willing to climb himself.",
    author:"Andrew Carnegie",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const numOfQuotes = quotes.length;
const todaysQuote = quotes[Math.floor(Math.random()*numOfQuotes)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;