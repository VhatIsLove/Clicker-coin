const $circle = document.querySelector('#circle')
const $score = document.querySelector('#score')

$circle.addEventListener('click', (e) => {
	const rect = $circle.getBoundingClientRect() // получаем размеры элемента по которому кликаем
	
	const offsetX = e.clientX - rect.left - rect.width / 2 // отступ по вертикали
	const offsetY = e.clientY - rect.top - rect.height / 2 // отступ по горизонтали

	const DEG = 50 // угол наклона

	const tiltX = (offsetY / rect.height) * DEG 
	const tiltY = (offsetX / rect.width) * -DEG 

	$circle.style.setProperty('--tiltX', `${tiltX}deg`)
	$circle.style.setProperty('--tiltY', `${tiltY}deg`)

	setTimeout(() =>{
		$circle.style.setProperty('--tiltX', '0deg')
		$circle.style.setProperty('--tiltY', '0deg')
	}, 300)


	// создаем анимацию цифр на изображении

	const plusOne = document.createElement('div') // создаем элемент
	plusOne.classList.add('plus-one') // добавляем нужный класс
	plusOne.textContent = '+1' // добавляем текст
	plusOne.style.left = `${e.clientX - rect.left}px` // добавляемый текст будет в месте где кликнули (горизонталь)
	plusOne.style.top = `${e.clientY - rect.top}px` // добавляемый текст будет в месте где кликнули (вертикаль)


	$circle.parentElement.appendChild(plusOne) // добавляем в DOM нашь элемент

	setTimeout(() => {
		plusOne.remove() // удаляем элемент
	}, 500)
})