var list = [];

function words() {
    document.getElementById("list").innerHTML = "";
    var txt = document.getElementById("searchWords").value;
    if (list.includes(txt) == false) {
        document.getElementById("list").innerHTML = "This word does not exist in the Dictionary.<br>If you want to add push the button.<br>";
        let addText = document.createElement("BUTTON");
        addText.innerHTML = "Add word";
        document.getElementById("list").appendChild(addText);
        addText.onclick = function() {add(txt)};    
    } else {
        document.getElementById("list").innerHTML = "This word exists.";
    }
}

function allWords() {
    var x = document.getElementById("allw");
    document.getElementById("allw").innerHTML = "";
    list.sort();
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    for (let i = 0; i < list.length; ++i) {
        document.getElementById("allw").innerHTML += list[i] + "<br>";
    }
}

function add(txt) {
    list.push(txt);
    document.getElementById("list").innerHTML = "The word has been added.";
}
