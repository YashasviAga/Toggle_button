function toggle_click() {
    let backdrop = document.getElementById('body');
    backdrop.classList.add('dark');
    let heading = document.getElementById('title');
    heading.classList.remove('theme_light');
    heading.classList.add('theme_dark');
    let togglebutton = document.getElementById('toggle_button');
    togglebutton.classList.remove('toggle_light');
    togglebutton.classList.add('toggle_dark');
    let slidertog = document.getElementById('slider');
    slidertog.classList.remove('left_light');
    slidertog.classList.add('right_dark');
}