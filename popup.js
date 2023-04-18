

document.addEventListener('DOMContentLoaded', () => {
    var y = document.getElementById("index_link");
    y.addEventListener("click", openIndex);
 });

fetch('responses.json')
   .then((response) => response.json())
   .then((json) => console.log(json));
 
 function openIndex() {
   chrome.tabs.create({active: true, url: "https://www.reddit.com/r/cat/comments/12o541i/flooomp/"});
 }

 $(document).ready(function(){
   let person = "taylor"
   $.getJSON('result.json', function(content) {
      let c = content.taylor
      console.log(c)
   });
});
