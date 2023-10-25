//Пример
//Используйте метод querySelector, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Ты нашёл элемент и изменил его текст!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

const paragraph = document.getElementById('practicum0');

function makeZero() {
	paragraph.innerText = 'Ты нашёл элемент и изменил его текст!';
}

document.querySelector('.b-0').onclick = makeZero;




//Задание 1
//Используйте метод getElementById, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Привет!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
const secondParagraph= document.getElementById('practicum');
function makeOne() {secondParagraph.innerText = 'Привет!';
}
	//Ваш код

document.querySelector('.b-1').onclick = makeOne;

//Задание 2
//Используйте метод getElementById, чтобы найти элемент <span>. При нажатии на кнопку измените его текст на "Привет, Мир!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
const thirdParagraph= document.getElementById('practicum2');
function makeTwo() {
	thirdParagraph.innerText = 'Привет, Мир!'
	

}

document.querySelector('.b-2').onclick = makeTwo;

//Задание 3
//Используйте метод querySelector, чтобы найти элемент <h1>. При нажатии на кнопку измените его текст на "Заголовок изменен!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
const fourthParagraph= document.getElementById('practicum3');
function makeThree() {
	fourthParagraph.innerHTML = 'Заголовок изменен!'
}

document.querySelector('.b-3').onclick = makeThree;

//Задание 4
//Используйте метод querySelector, чтобы найти элемент <div>. При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте свойство style для изменения стилей элемента
const redHover = document.getElementById("practicum4");
function makeFour() { 
        redHover.style.background = "red";  
};
document.querySelector('.b-4').onclick = makeFour;

//Задание 5
//Используйте метод getElementById, чтобы найти элемент <input>. При нажатии на кнопку измените его значение на "Новое значение".
//Подсказка: Используйте свойство value для изменения значения элемента формы
const newInput = document.getElementById("practicum5")
function makeFive() {
	newInput.value = 'Новое значение';
}
document.querySelector('.b-5').onclick = makeFive;

//Задание 6
//Используйте метод getElementById, чтобы найти элемент <img>. При нажатии на кнопку измените его атрибут src на "newimage.jpg", а атрибут alt на "Новое изображение".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента

function makeSix() {
	var img = document.getElementById("practicum6");
	img.src = ('newimage.jpg') ;
	img.alt = ('Новое изображение');
	
}
document.querySelector('.b-6').onclick = makeSix;
//Задание 7
//Используйте метод querySelector, чтобы найти элемент <a>. При нажатии на кнопку измените его href на "https://www.google.com", а название ссылки на "Ссылка на Google".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента и метод для изменения текстового содержимого элемента

function makeSeven() {
	var webPage = document.getElementById("practicum7");
	webPage.href = ("https://www.google.com") ;
	webPage.innerText = ("Ссылка на Google");
}
 
document.querySelector('.b-7').onclick = makeSeven;

//Задание 8
//Используйте метод getElementById, чтобы найти элемент <ul>. При нажатии на кнопку добавьте новый элемент <li> со значением "Новый элемент" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeEight() {
	const parentElement = document.getElementById("practicum8");
const newElement = document.createElement('li');
newElement.textContent = 'Новый элемент';
parentElement.append(newElement);

}

document.querySelector('.b-8').onclick = makeEight;

//Задание 9
//Используйте метод getElementById, чтобы найти элемент <select>. При нажатии на кнопку добавьте новый элемент <option> со значением "Новый вариант" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeNine() {
		const previousElement = document.getElementById("practicum9");
	const nextElement = document.createElement('option');
nextElement.textContent = 'Новый элемент';
previousElement.append(nextElement);

}

document.querySelector('.b-9').onclick = makeNine;

//Задание 10
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его стиль на "display: none;", чтобы скрыть его.
//Подсказка: Используйте свойство display для изменения стилей элемента


function makeTen() 
	
{
document.getElementById("practicum10").style.display = "none";
	
}
document.querySelector('.b-10').onclick = makeTen;



//Задание 11
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его ширину на 400px и высоту на 200px.
//Подсказка: Используйте свойство style для изменения стилей элемента
const pointEleven = document.getElementById("practicum11");
const eleven = document.querySelector('.b-11');
function makeEleven() {
	document.getElementById("practicum11").style.width = "400px";
	document.getElementById("practicum11").style.height = "200px";
}
document.querySelector('.b-11').onclick = makeEleven;


//Задание 12
//Используйте метод querySelector, чтобы найти элемент <div>. При клике на этот элемент измените его ширину на 400px и высоту на 200px. При повторном клике верните его размеры в исходное состояние.
//Подсказка: Используйте метод toggle() для добавления/удаления класса, который изменяет размеры элемента


function makeTwelve() {
	const pointTwelve = document.querySelector('#practicum12');
		pointTwelve.classList.toggle('large');
}


   
//Задание 13
//Используйте метод `getElementsByTagName`, чтобы найти первый элемент <ol>. Затем измените его текст на "Первый!".
//Подсказка: Используйте метод для изменения текстового содержимого элемента

function makeThirteen() {
const list = document.getElementsByTagName("ul")[1];
list.getElementsByTagName("ol")[0].innerHTML = "Первый!";
}
document.querySelector('.b-13').onclick = makeThirteen;



//Задание 14
//Используйте метод querySelectorAll, чтобы найти все элементы <p> на странице. Затем измените их текст на "Огого, что могу!".
//Метод forEach является методом массивов в JavaScript. Он выполняет указанную функцию один раз для каждого элемента в массиве. С этим методом мы познакомимся на следующей неделе.

function makeFourteen() {

	const paragraphs = document.querySelectorAll('p');
	paragraphs.forEach(function (paragraph) {
       paragraph.innerText = 'Ого-го, что я могу!'
    }

);
}
document.querySelector('.b-14').onclick = makeFourteen;







//Задание 15
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "practicum15".
//Подсказка: Используйте метод remove для удаления класса элемента

function makeFifteen() {
	
	const task = document.getElementById('practicum15');
	task.classList.remove('practicum15');
}
	
document.querySelector('.b-15').onclick = makeFifteen;


//Задание 16
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "practicum16".
//Подсказка: Используйте метод add для добавления класса элемента

function makeSixteen() {

	
	const task2 = document.getElementById('practicum16');
	task2.classList.add('practicum16');
}
	

document.querySelector('.b-16').onclick = makeSixteen;

//Задание 17
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку переключите у него класс "color", который изменяет его фоновый цвет. Если класс уже присутствует, удалите его, иначе добавьте.
//Подсказка: Используйте метод toggle класса элемента

function makeSeventeen() {
	const task3 = document.getElementById('practicum17');
	task3.classList.toggle('color');
}

document.querySelector('.b-17').onclick = makeSeventeen;

//Задание 18
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "active", который изменит его стиль, например, изменит цвет текста. При повторном нажатии удалите класс "active".
//Подсказка: Используйте метод toggle класса элемента

function makeEighteen() {
		const newTask = document.getElementById('practicum18');
	newTask.classList.toggle('active');
}

document.querySelector('.b-18').onclick = makeEighteen;

//Задание 19
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "active", который изменяет его стиль, например, изменяет цвет текста.
//Подсказка: Используйте метод remove класса элемента

function makeNineteen() {
const removeColor= document.getElementById('practicum19');
	removeColor.classList.remove('active');
}

document.querySelector('.b-19').onclick = makeNineteen;

//Задание 20
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в начало элемента <div> новый дочерний элемент <p> с текстом "Добавлено в начало".
//Подсказка: Используйте метод prepend для добавления нового дочернего элемента в начало элемента <div>

function makeTwenty() {
	let parent = document.getElementById('practicum20');
	let taskTwenty = document.createElement('p');
	taskTwenty.textContent = 'Добавлено в начало!';
	parent.prepend(taskTwenty);

}


document.querySelector('.b-20').onclick = makeTwenty;

//Задание 21
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в конец элемента <div> новый дочерний элемент <p> с текстом "Добавлено в конец".
//Подсказка: Используйте метод append для добавления нового дочернего элемента в конец элемента <div>

function makeTwentyOne() {
let parent1 = document.getElementById('practicum21');
	let taskTwentyOne = document.createElement('bbb');
	taskTwentyOne.textContent = 'Добавлено в конец!';
	parent1.append(taskTwentyOne);
}

document.querySelector('.b-21').onclick = makeTwentyOne;

//Задание 22
//Используйте метод getElementById, чтобы найти элемент <img>. Выведите информацию на экран о наличии атрибута "src" у изображения.
//Подсказка: Используйте метод hasAttribute для проверки наличия атрибута

function makeTwentyTwo() {
	let image = document.getElementById('practicum22');
	let hasSrcAttribute = image.hasAttribute('src');
	let resultElement = document.getElementById('result22');
	resultElement.textContent = 'Атрибут "src" присутствует: ' + hasSrcAttribute;
}
document.querySelector('.b-22').onclick = makeTwentyTwo;

//Задание 23
//Используйте метод getElementById, чтобы найти элемент <a>. Удалите атрибут "href" ссылки.
//Подсказка: Используйте метод removeAttribute для удаления атрибута

function makeTwentyThree() {
document.getElementById("practicum23").removeAttribute("href");
}

document.querySelector('.b-23').onclick = makeTwentyThree;

//Задание 24
//Используйте метод getElementById, чтобы найти элемент <input>. Установите атрибут "value" текстового поля на значение "Новое значение".
//Подсказка: Используйте метод setAttribute для установки атрибута

function makeTwentyFour() {
	document.getElementById("practicum24").setAttribute('value', 'Новое значение');
}

document.querySelector('.b-24').onclick = makeTwentyFour;

//Задание 25
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте атрибут "data-info" со значением "Дополнительная информация" к элементу <div>. Выведите значение атрибута на экран.
//Подсказка: Используйте метод setAttribute для добавления атрибута


	function makeTwentyFive() {
let div = document.getElementById('practicum25'); 
div.setAttribute('data-info', 'Дополнительная информация'); 
let elemAttribute = div.getAttribute('data-info'); 
let p = document.getElementById('infoOutput'); 
p.textContent = 'Добавленный атрибут: ' + elemAttribute; 
}
	

	document.querySelector('.b-25').onclick = makeTwentyFive;

	//Задание 26
	//Используйте метод closest, чтобы найти ближайший родительский элемент с классом "parent". При нажатии на кнопку измените его фоновый цвет на красный.
	//Подсказка: Используйте метод closest для поиска ближайшего родительского элемента

	const button = document.querySelector('.b-26');
const parent =button.closest('.parent');
	
	const makeTwentySix = () => {
		parent.style.backgroundColor = 'red';
	};

	document.querySelector('.b-26').onclick = makeTwentySix;

	//Задание 27
	//Используйте метод `getElementById`, чтобы найти элемент `<div>`. Проверьте, содержит ли данный элемент класс `highlight`. Выедите результат в <div> c id result.
	//Подсказка: Используйте метод `contains` для проверки наличия класса у элемента. В <div> должен появиться результат true или false.

function makeTwentySeven() {
	//Найдите переменную
	//Создайте переменную и сохраните в неё результат проверки метода contains. Например: const result = p.classList.contains('active');
	//Найдите переменную, в которую нужно вывести результат
	//Запишите результат в переменную
	let seven = document.getElementById('practicum27');
	const firstResult = seven.classList.contains('highlight');
	let resultAbc = document.getElementById('result');
	resultAbc.textContent = firstResult;
}

	document.querySelector('.b-27').onclick = makeTwentySeven;

	//Задание 28
	//Используйте метод getElementById, чтобы найти элемент <button>. Добавьте обработчик события click, который будет выводить сообщение "Кнопка нажата" в консоль при каждом клике на кнопку.
	//Подсказка: Используйте метод addEventListener для добавления обработчика события

	const buttonTaskTwentyEight = document.getElementById('button28');
function makeClick() {
console.log('Кнопка нажата!');
}
buttonTaskTwentyEight.addEventListener('click', makeClick);


	
	//Добавьте слушатель eventListener на кнопку buttonTaskTwentyEight

	//Задание 29
	//Используйте метод getElementById, чтобы найти элемент <input />. Добавьте обработчик события change, который будет выводить сообщение "Значение изменено" в консоль при изменении значения в поле ввода.
	//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.
const buttonTaskTwentyNine = document.getElementById('input29');

	function handleChange() {
		console.log('Значение изменено');
	}
buttonTaskTwentyNine.addEventListener('change', handleChange );
	//Ваш код

	//Задание 30
	//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте обработчик события `mouseover`, который будет выводить сообщение "Курсор наведен на элемент" в консоль при наведении курсора на элемент.
	//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.
const buttonTaskThirty = document.getElementById('div30');
	function handleMouseOver() {
		console.log('Курсор наведен на элемент');
	}
buttonTaskThirty.addEventListener('mouseover', handleMouseOver);
	