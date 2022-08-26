var btn_1 = document.getElementById('btn_1');
var cat = document.getElementById('cat');


btn_1.addEventListener('click', Cat);


function Cat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}