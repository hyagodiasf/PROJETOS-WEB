window.addEventListener('scroll', function(){
	var header = document.querySelector('header');
	header.classList.toggle('stick', window.scrollY > 0);
});
