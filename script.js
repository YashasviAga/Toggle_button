function toggle_click() {
    let backdrop = document.getElementById('body');
    if (backdrop.classList.contains('light')) {
        backdrop.classList.remove('light');
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
    else{
        backdrop.classList.remove('dark');
        backdrop.classList.add('light');
        let heading = document.getElementById('title');
        heading.classList.remove('theme_dark');
        heading.classList.add('theme_light');
        let togglebutton = document.getElementById('toggle_button');
        togglebutton.classList.remove('toggle_dark');
        togglebutton.classList.add('toggle_light');
        let slidertog = document.getElementById('slider');
        slidertog.classList.remove('right_dark');
        slidertog.classList.add('left_light');
    }

}
