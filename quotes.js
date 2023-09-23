var text = [
    "Nearly 800,000 people are reported missing every year in the United States.",
    "Roughly 2,300 children are reported missing each day in the US... That's 1 child every 40 seconds.",
    "Minorities, those who suffer from mental disorders, and substance abusers who go missing often receive little attention from authorities and little sympathy from the press or public.",
    "Child abduction alerts patterned after the U.S. AMBER Alert have been implemented in 18 countries: Australia, Belgium, Canada, Czech Republic, among others.",
    "In the United States alone, enough children are abducted by family members on an average day to fill a school bus every other hour, 24 hours a day, 7 days a week, 365 days a year.",
    "Due to panic and shock, it can take up to two hours to get information about a missing child from a parent.",
    "Of nearly 25,000 runaways reported to NCMEC in 2017, one in seven are victims of sex trafficking.",
    "The first 12-24 hour the most critical in a missing person investigation.",
    " For children the first 3 hour are especially critical as 76% of children abducted by strangers are killed within that time-frame."
  ];

  // A function to display a random text string
  function displayRandomText () {
    // Get a random index for the array
    var index = Math.floor (Math.random () * text.length);
    // Get the text element
    var textElement = document.getElementById ("text");
    // Set the text content to the random string
    textElement.innerHTML = text [index];
    // Add the show class to make the text visible
    textElement.classList.add ("show");
    // Remove the show class after a delay
    document.body.appendChild (textElement);
    textElement.style.position = "absolute";
    var top = Math.random () * (window.innerHeight - textElement.offsetHeight);
    var left = Math.random () * (window.innerWidth - textElement.offsetWidth);
    textElement.style.top = top + "px";
    textElement.style.left = left + "px";

    setTimeout (function () {
      textElement.classList.remove ("show");
    }, 5000);
  }

  // Call the function once when the page loads
  displayRandomText ();

  // Call the function every 5 seconds
  setInterval (displayRandomText, 10000);