const url = "https://jsonplaceholder.typicode.com/posts"

const input = document.querySelector("input");
const body = document.querySelector("body")
const par = document.querySelector(".para");


async function getRequest() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error")
    }
}


input.addEventListener("input", () => {
    if (input.value === "" || input.value === " ") {
        par.innerText = "Type text"
    } else {
        par.innerText = ""
        getRequest()

            .then((data) => {
                data.map(el => {
                    if (el.title.includes(input.value)) {
                        par.innerText += `${el.title}
                    `
                    } else {
                        null
                    }
                })
            })
    }



})



