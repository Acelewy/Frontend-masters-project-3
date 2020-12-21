const acc = document.getElementsByClassName('accordion');
let i;
let openPanel, bolded, activeBtn;

const test = (e) => {
	const button = e.target.closest('.accordion');

	const panel = button.parentElement.nextElementSibling;

	if (panel.hasAttribute('hidden')) {
		panel.removeAttribute('hidden');
		button.classList.add('rotate');
		button.previousElementSibling.classList.add('bold');
	} else {
		panel.setAttribute('hidden', true);
		button.classList.remove('rotate');
		button.previousElementSibling.classList.remove('bold');
	}

	if (openPanel) {
		openPanel.setAttribute('hidden', true);
		bolded.classList.remove('bold');
		activeBtn.classList.remove('rotate');
	}

	openPanel = panel;
	bolded = button.previousElementSibling;
	activeBtn = button;
};

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', test);
}
