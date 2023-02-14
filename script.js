// 1. Написать программу, которая формирует на основе массива строк множество
// параграфов и выводит их в интерфейс. При клике на параграф текст должен
// меняться на звездочки. На данном этапе делать процесс обратимым при
// повторном клике необязательно.

let task01arr = ["Бла-бла-бла строка 1", "Бла-бла-бла строка 2", "Бла-бла-бла строка 3",
                 "Бла-бла-бла строка 4", "Бла-бла-бла строка 5", "Бла-бла-бла строка 6",
                 "Бла-бла-бла строка 7", "Бла-бла-бла строка 8"];

for (let i = 0; i < task01arr.length; i++) {
    let paragraph = document.createElement('p');
    paragraph.innerText = task01arr[i];
    paragraph.addEventListener("click", function(){ if (paragraph.hasAttribute("hide")) { paragraph.innerText = task01arr[i]; } else { paragraph.innerText =  '*'.repeat(task01arr[i].length); } paragraph.toggleAttribute("hide"); });
    document.body.append(paragraph);
}



// 2. Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо
// карточку присвоить ей класс active. В классе active должны быть стили,
// которые меняют цвет текста и цвет заднего фона местами.
// 3. Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс
// active удалялся.

let parent_d = document.createElement('div');
parent_d.className = "parent";
for (let i = 0; i < 10; i++) {
    let division = document.createElement('div');
    division.innerText = i;
    division.addEventListener("click", function(){ if (division.hasAttribute("active")) { division.className = ""; } else { division.className = 'active'; } division.toggleAttribute("active"); });
    parent_d.append(division);
}
document.body.append(parent_d);



// 4. В JS объявлен массив с ссылками на картинки. На основе этого массива
// формируется множество маленьких картинок в верхней части интерфейса. При
// нажатии на одну из картинок забирается ссылка на эту картинку и в нижней
// части интерфейса отображается в большем размере. Так, пользователь, нажимая
// на маленькие картинки видит их отображение в большем размере.
let task04arr = ["https://catherineasquithgallery.com/uploads/posts/2021-03/1614595657_107-p-smail-na-belom-fone-110.jpg",
                 "https://catherineasquithgallery.com/uploads/posts/2021-03/1614595558_1-p-smail-na-belom-fone-1.jpg",
                 "https://steamuserimages-a.akamaihd.net/ugc/1848171911306719177/3AE0756B83E3BF4073113C52ABBCAEF35F42BF08/",
                 "https://yt3.googleusercontent.com/ytc/AMLnZu9NvcIZlQ_B9swvgwkOmX7pD9MoxLk_RUVTkMsHkw=s900-c-k-c0x00ffffff-no-rj"];


let ddiv = document.createElement('div');
ddiv.className = "picture";
document.body.append(ddiv);

for (let i = 0; i < task04arr.length; i++) {
    let pic = document.createElement('img');
    pic.setAttribute("src", task04arr[i]);
    pic.setAttribute("width", "90");
    pic.setAttribute("height", "90");
    pic.addEventListener("click", function(){ ddiv.style.backgroundImage = 'url(' + task04arr[i] + ')'; ddiv.style.backgroundColor = "red"; });
    document.body.prepend(pic);
}



// 5. Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве
// en написано слово на английском, а в свойстве ru на русском. Необходимо 
// реализовать карточки, при нажатии на которые слова с русского меняются на
// английский и обратно. Подсказка. В каждой карточке должно быть два параграфа.
// В одном написано на русском, а во втором на английском и при нажатии на
// карточку один параграф получает класс с display none а второй с display block.

let task05arr = [
    {en: 'cat', ru: 'кошка'},
    {en: 'dog', ru: 'собака'},
    {en: 'squirrel', ru: 'белка'},
]

let parent_d1 = document.createElement('div');
parent_d1.className = "parent";
for (let i = 0; i < task05arr.length; i++) {
    let division = document.createElement('div');
    let p1 = document.createElement('p');
    p1.className = "visible";
    p1.setAttribute("en", '');
    p1.innerText = task05arr[i].en;
    let p2 = document.createElement('p');
    p2.className = "invisible";
    p2.setAttribute("ru", '');
    p2.innerText = task05arr[i].ru;
    division.append(p1);
    division.append(p2);
    division.addEventListener("click", function(){ if (division.hasAttribute("ru")) { p1.className = "visible"; p2.className = "invisible"; } else { p1.className = "invisible"; p2.className = "visible"; } division.toggleAttribute("ru"); });
    parent_d1.append(division);
}
document.body.append(parent_d1);

// 6. Добавить внизу кнопки RU и EN при нажатии на которые все карточки
// переключаются на русский или английский соответственно.
let swch = document.createElement('input');
swch.setAttribute("type", "checkbox")
swch.className = "switch";
swch.name = "enru"
swch.addEventListener('change', function() {
    if (this.checked) {
        console.log("Checkbox is checked..");
        let elements = document.querySelectorAll('p');
        for(let element of elements) {
            if (element.hasAttribute("en")) {
                element.className = "visible";
            }
            if (element.hasAttribute("ru")) {
                element.className = "invisible";
            }
            elements = document.querySelectorAll('div');
            for(let element of elements) {
                if (element.hasAttribute("ru")) {
                    element.toggleAttribute("ru");
                }
            }
        }
    } else {
        console.log("Checkbox is not checked..");
        let elements = document.querySelectorAll('p');
        for(let element of elements) {
            if (element.hasAttribute("en")) {
                element.className = "invisible";
            }
            if (element.hasAttribute("ru")) {
                element.className = "visible"
            }
        }
    }
  });
document.body.append(swch);
lbl = document.createElement("lable");
lbl.setAttribute("for", "enru");
lbl.innerText = "en/ru";
document.body.append(lbl);

// 7. Написать цикл, который создает множество div-ов c цветами от 
// rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом
// 5.
let parent_d2 = document.createElement('div');
parent_d2.className = "parent";
for (let i = 0; i < 256; i += 5) {
    let task7div = document.createElement("div");
    task7div.style.backgroundColor = 'rgb(128, 128, ' + i + ')';
    task7div.style.height = 20;
    task7div.style.width = 20;
    parent_d2.append(task7div);
}
document.body.append(parent_d2);
