const libraryPhilo = [{
  image:"",
  name: "thus spoke zarathustra",
  year: 1883 + " " + 1885,
  genre: "existentialism",
  description: "  The novel opens with the descent of Zarathustra from his cave in the mountains after ten years of solitude. Overflowing with wisdom and love, he wants to teach humanity about the existence of the superman. He arrives in the town of the Motley Cow and announces that the superman must be the meaning of the earth.",
  author:" Friedrich Nietzsche",

},
{
  image:"",
  name: "Apologies of Socrates",
  year: 399+ " " +"BC",
  genre: "Greek philosopher",
  description: "Plato's The Apology is an account of the speech Socrates makes at the trial in which he is charged with not recognizing the gods recognized by the state, inventing new deities, and corrupting the youth of Athens. Socrates' speech, however, is by no means an apology in our modern understanding of the word. The name of the dialogue derives from the Greek apologia, which translates as a defense, or a speech made in defense. Thus, in The Apology, Socrates attempts to defend himself and his conduct--certainly not to apologize for it.",
  author:"Plato",

},
{
  image:"",
  name: "Metaphysics",
  year: 350+ " " +"BC",
  genre: "Greek philosopher",
  description: "The first major work in the history of philosophy to bear the title “Metaphysics” was the treatise by Aristotle that we have come to know by that name. But Aristotle himself did not use that title or even describe his field of study as ‘metaphysics’; the name was evidently coined by the first century C.E. editor who assembled the treatise we know as Aristotle’s Metaphysics out of various smaller selections of Aristotle’s works. The title ‘metaphysics’—literally, ‘after the Physics’—very likely indicated the place the topics discussed therein were intended to occupy in the philosophical curriculum. They were to be studied after the treatises dealing with nature (ta phusika). In this entry, we discuss the ideas that are developed in Aristotle’s treatise.",
  author:"Aristotle",

},
{
  image:"",
  name: "Thoughts for myself",
  year: "Depuis " + 2019,
  genre: "Roman Emperor philosopher",
  description: "Born in Rome, in 121, Marcus Aurelius was one of the most respected emperors in Roman history. When he was 17, Aurelius was adopted by emperor Antonius Pius and succeeded him in A.D. 161. He ruled jointly with his adoptive brother, Lucius Verus, until 169, when he became sole emperor after Verus died. Although Aurelius was a humanitarian ruler, he accepted the view that Christians were the enemies of Rome. Aurelius was dovoted to the Stoic philosophy. Meditations, his spiritual reflections, is considered a classic work of stoicism. Written in Greek, the work comprises of twelve books and records his innermost thoughts. Meditations is his only surviving work. Aurelius died in 180 while prosecuting war against the Marcomanni who lived along the northern limits of the Roman Empire. After his death Aurelius was idealized as the perfect emperor whose reign contrasted sharply with the disastrous period before him and the reigns that followed.",
  author:"Marcus Aurerlius",

},
{
  image:"",
  name: "The Art of Being Right",
  year: 1831,
  genre: "Metaphysics",
  description: "The Art of Being Right: 38 Ways to Win an Argument (also The Art of Controversy, or Eristic Dialectic: The Art of Winning an Argument; German: Eristische Dialektik: Die Kunst, Recht zu behalten; 1831) is an acidulous, sarcastic treatise written by the German philosopher Arthur Schopenhauer.[1] In it, Schopenhauer examines a total of thirty-eight methods of defeating one's opponent in a debate. He introduces his essay with the idea that philosophers have concentrated in ample measure on the rules of logic, but have not (especially since the time of Immanuel Kant) engaged with the darker art of the dialectic, of controversy. Whereas the purpose of logic is classically said to be a method of arriving at the truth, dialectic, says Schopenhauer, ...on the other hand, would treat of the intercourse between two rational beings who, because they are rational, ought to think in common, but who, as soon as they cease to agree like two clocks keeping exactly the same time, create a disputation, or intellectual contest.", 
  author:"Arthur Schopenhauer",

},
{
  image:"",
  name: "Critique of Pure Reason",
  year: 1781,
  genre: "Critique of Pure Reason",
  description: "This entirely new translation of Critique of Pure Reason is the most accurate and informative English translation ever produced of this epochal philosophical text. Though its simple, direct style will make it suitable for all new readers of Kant, the translation displays a philosophical and textual sophistication that will enlighten Kant scholars as well. This translation recreates as far as possible a text with the same interpretative nuances and richness as the original.",
  author:"Immanuel Kant",

},
{
  image: "",
  name: "Discourse on Voluntary Servitude",
  year: 1577,
  genre: "Political philosophy",
  description: "Published in 1576, The Discourse of Voluntary Servitude is the work of a young author of eighteen years. This text (oh so current!) analyzes the master-slave relationships that govern the world and are based on fear, complacency, sycophancy and self-abasement. A political lesson but also an ethical and moral one, La Boétie invites us to revolt against all oppression, all exploitation, all corruption, in short against the very framework of power.",
author:"Étienne de La Boétie",

},
]

let displayBody = document.querySelector('body')
let headerTitle = document.createElement("header")
displayBody.appendChild(headerTitle)
let h1 = document.createElement('h1')
let h2 = document.createElement('h2')

headerTitle.appendChild(h1);
headerTitle.appendChild(h2);
h1.innerHTML="my liberary"
h2.innerHTML = "My philosophy favorite"
let main = document.createElement("main")
displayBody.appendChild(main)

for (let i = 0; i < libraryPhilo.length; i++) {
  let article = document.createElement('article');
  main.appendChild(article);
  /*img*/
  let img = document.createElement('img')
  img.innerHTML = libraryPhilo[i].image;
  let header  =document.createElement('header')
  article.appendChild(header)
  header.appendChild(img)

  /*name*/
    let div = document.createElement('div')
    header.appendChild(div)
    let h3 = document.createElement('h3')
    div.appendChild(h3);
    h3.innerHTML = libraryPhilo[i].name

    let h4 = document.createElement('h4')
    h4.innerHTML = libraryPhilo[i].genre
    div.appendChild(h4)

    let paragraphe = document.createElement('p');
    let section = document.createElement('section')
    paragraphe.innerHTML = libraryPhilo[i].description
    article.appendChild(section)
    section.appendChild(paragraphe)

    let footer = document.createElement('footer')
    let em = document.createElement('em');
    em.innerHTML = libraryPhilo[i].year;
    footer.appendChild(em)
    article.appendChild(footer)
    /*author*/ 
    let italic = document.createElement('i')
    italic.innerHTML = libraryPhilo[i].author;
    footer.appendChild(italic)
}