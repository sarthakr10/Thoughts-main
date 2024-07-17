// Array of random questions
const randomQuestions = [
  "What is a recent accomplishment you're proud of?",
  "If you could have dinner with any historical figure, who would it be and why?",
  "What is a book or movie that has had a significant impact on your life?",
  "If you could travel to any place in the world, where would you go?",
  "What is a skill you would like to learn or improve?",
  "Describe a moment that made you smile today.",
  "If you could have any superpower, what would it be and how would you use it?",
];

export const useQuets = () => {
  const randomIndex = Math.floor(Math.random() * randomQuestions.length);
  return randomQuestions[randomIndex];
};
