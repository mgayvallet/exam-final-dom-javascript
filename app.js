const logMood = document.querySelector("#log-mood")
const modal = document.createElement('div')
modal.classList.add('modal')
modal.innerHTML = `
    <form class="log-form">
        <button class="btn text" type="button" style="align-self: flex-end;">
            <img src="assets/close.svg" alt="close">
        </button>
    <h2 class="text-preset-2">Log your mood</h2>
    <h3 class="text-preset-3">How was your mood today ?</h3>
    <label>
      <input type="radio" name="mood" value="very-happy">
      <h5 class="text-preset-5">Very Happy</h5>
      </label>
    <label>
      <input type="radio" name="mood" value="happy">
      <h5 class="text-preset-5">Happy</h5>
    </label>
    <label>
      <input type="radio" name="mood" value="neutral">
      <h5 class="text-preset-5">Neutral</h5>
    </label>
    <label>
        <input type="radio" name="mood" value="sad">
        <h5 class="text-preset-5">Sad</h5>
    </label>
    <label>
        <input type="radio" name="mood" value="very-sad">
        <h5 class="text-preset-5">Very Sad</h5>
    </label>
        <button class="btn block blue-600 neutral-o-text" type="submit" id="logMood">
            <h4 class="text-preset-4">Log Mood</h4>
        </button>
    </form>
`
const tabs = []

logMood.addEventListener('click', (e)=>{
   e.preventDefault()
   document.body.appendChild(modal)
   const croix = document.querySelector('.text')
   const logMood = document.querySelector('#logMood')
   const inputRadio = document.querySelectorAll('input')
   const lastMoodImg = document.querySelector('#last-mood-img')
   const listMood = document.querySelector('.list-mood')
   const mood = document.createElement('div')
   const lastMoodName = document.querySelector('#last-mood-name')
   mood.classList.add("mood-card")
   listMood.classList.add('list-mood')
   listMood.appendChild(mood)
   if (modal) {
       croix.addEventListener('click', (e)=>{
           e.preventDefault()
           modal.remove()
       })
       logMood.addEventListener('click', (e)=>{
           e.preventDefault()
           const tab = []
           for (let i = 0; i < inputRadio.length; i++) {
               if (inputRadio[i].checked) {
                   tab.push("oui");
               }else{
                   tab.push("non");
               }
           }
           if (tab[0] == "oui") {
               tabs.push("Very Happy")
               lastMoodImg.src = "./assets/very-happy.svg"
               mood.classList.add('amber-300')
               mood.textContent = "Very Happy"
               lastMoodName.textContent = "Very Happy"
           } else if (tab[1] == "oui") {
               tabs.push("Happy")
               lastMoodImg.src = "./assets/happy.svg"
               mood.classList.add('green-300')
               mood.textContent = "Happy"
               lastMoodName.textContent = "Happy"
           } else if (tab[2] == "oui") {
               tabs.push("Neutral")
               lastMoodImg.src = "./assets/neutral.svg"
               mood.classList.add('blue-600')
               mood.textContent = "Neutral"
               lastMoodName.textContent = "Neutral"
           } else if (tab[3] == "oui") {
               tabs.push("Sad")
               lastMoodImg.src = "./assets/sad.svg"
               mood.classList.add('indigo-200')
               mood.textContent = "Sad"
               lastMoodName.textContent = "Sad"
           } else if (tab[4] == "oui") {
               tabs.push("VerySad")
               lastMoodImg.src = "./assets/very-sad.svg"
               mood.classList.add('red-300')
               mood.textContent = "Very Sad"
               lastMoodName.textContent = "Very Sad"
           }
           console.log(tab);
           console.log(tabs);
           modal.remove()
       })      
   }       
})  