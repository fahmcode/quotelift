feather.replace();

const refreshButton = document.getElementById("refresh");

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
];

refreshButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quote").textContent = `"${quote.text}"`;
  document.getElementById("author").textContent = `- ${quote.author}`;
});
