const cl = console.log;

const searchBar = document.getElementById('searchBar');
const input = document.querySelector(".searchIcon");
const suggestionBox = document.getElementById("suggestionBox");

const onSearchHandler = (eve) => {
    let result = [];
    let inputValue = eve.target.value;
    if(inputValue.length){
        result = suggestion.filter(ele => ele.toLowerCase().includes(inputValue.toLowerCase()));
    }
    showResult(result);
};

const showResult = (ele) => {
    if(!ele.length){
        return suggestionBox.classList.remove("show");
    };
    let content = ele.map(ele => `<li class="suggestionItems">${ele}</li>`).join('');
    suggestionBox.classList.add("show");
    suggestionBox.innerHTML = `<ul class="suggestionList">${content}</ul>`;
    const li = document.querySelectorAll(".suggestionList li");
    li.forEach(ele => ele.setAttribute("onclick","select(this)"));
};

const select = (element) => {
    let userData = element.textContent;
    searchBar.value = userData;
};

searchBar.addEventListener("keyup", onSearchHandler);