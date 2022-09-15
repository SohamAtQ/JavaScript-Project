//?vars
const contents = document.querySelectorAll(".content");
let optionsContent = document.querySelector(".options-content");

//?funcs
const fillPage = (whatt) => {
    fetch("./data.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (whatt === 0) {
                let i = 0;
                contents.forEach((content) => {
                    content.innerHTML = `
                            <div class="type-title">
                                <h3>${data[i].title}</h3>
                                <div class="three-dot">
                                    <img src="./images/icon-ellipsis.svg" alt="" />
                                </div>
                            </div>
                            <div class="description">
                                <h1>${data[i].timeframes.daily.current} hours</h1>
                                <p>Last week -${data[i].timeframes.daily.previous} hours</p>
                            </div>
                        `;
                    i += 1;
                });
            } else if (whatt === 1) {
                let i = 0;
                contents.forEach((content) => {
                    content.innerHTML = `
                            <div class="type-title">
                                <h3>${data[i].title}</h3>
                                <div class="three-dot">
                                    <img src="./images/icon-ellipsis.svg" alt="" />
                                </div>
                            </div>
                            <div class="description">
                                <h1>${data[i].timeframes.weekly.current} hours</h1>
                                <p>Last week -${data[i].timeframes.weekly.previous} hours</p>
                            </div>
                        `;
                    i += 1;
                });
            } else {
                let i = 0;
                contents.forEach((content) => {
                    content.innerHTML = `
                            <div class="type-title">
                                <h3>${data[i].title}</h3>
                                <div class="three-dot">
                                    <img src="./images/icon-ellipsis.svg" alt="" />
                                </div>
                            </div>
                            <div class="description">
                                <h1>${data[i].timeframes.monthly.current} hours</h1>
                                <p>Last week -${data[i].timeframes.monthly.previous} hours</p>
                            </div>
                        `;
                    i += 1;
                });
            }
        });
};

const changeContent = (event) => {
    if (event.target.id === "daily") {
        fillPage(0);
    } else if (event.target.id === "weekly") {
        fillPage(1);
    } else {
        fillPage(2);
    }
};
window.addEventListener("DOMContentLoaded", fillPage(0));
optionsContent.addEventListener("click", changeContent);
