document.documentElement.dataset.theme = localStorage.getItem('currentTheme') || 'light';

document.addEventListener("DOMContentLoaded", register_callbacks);
function register_callbacks() {
	const slider = document.getElementById("content-width");
	const slider_label = document.getElementById("content-width-output");
	slider.addEventListener("change", set_container_width);
	function set_container_width() {
		const containers = document.getElementsByClassName("Container");
		for (const container of containers) {
			container.style.setProperty("max-width", `${slider.value}%`);
		}
	}
	slider.addEventListener("input", set_width_label);
	function set_width_label(event) {
		slider_label.textContent = `${event.target.value}%`;
	}
}
