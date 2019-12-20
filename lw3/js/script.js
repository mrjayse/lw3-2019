var currentTheme = "Light";
var themeSwitch = document.getElementById("theme");
var weekendNode = document.getElementsByClassName("weekend");
var holidays = document.getElementsByClassName("holiday");

var scienceDayCaption = "Всемирный день науки. Накануне праздника в вузах проводят конференции и презентации, на которых молодые ученые и исследователи представляют свои работы. Обсуждаются проблемы и новшества отрасли. Студенты поздравляют преподавателей концертами и творческими номерами. В честь данного праздника также организовывают интеллектуальные игры, в которых может принять участие любой желающий.";
var kindDayCaption = "Всемирный день доброты. Человек в нашем стремительно развивающемся мире часто забывает о ценных нравственных критериях, таких как любовь, поддержка, взаимопомощь и добро. Ну, а если ими все же пользуются, то все намерения и дела остаются надолго в сердцах не только тех, кому они предназначены, но и тех, кто является их носителями.";
var marinesDayCaption = "День морской пехоты. Государства, где имеются побережья, обязательно имеют морскую пехоту. Такие подразделения очень важны для любой страны. В России морские пехотинцы отличаются непобедимостью и отважностью, являются элитой среди вооруженных сил. Для поддержания боевого духа военных, чествования и государственной поддержки, отмечается День морской пехоты.";

window.onload = function() {
    var icon, caption;
    for (var i = 0; i < this.holidays.length; i++) {
        icon = this.document.createElement("div");
        caption = this.document.createElement("p");
        icon.classList.add("icon");
        caption.classList.add("caption");
        this.holidays[i].parentElement.insertBefore(icon, holidays[i]);
        switch (this.holidays[i].innerText)
        {
            case "10":
                caption.innerText = this.scienceDayCaption;
                break;
            case "13":
                caption.innerText = this.kindDayCaption;
                break;
            case "27":
                caption.innerText = this.marinesDayCaption;
                break;
        }
        this.holidays[i].parentElement.insertBefore(caption, holidays[i]);
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    if (dd[0] == 0)
        dd = dd.substr(1, 1);
    var days = this.document.getElementsByClassName("date");
    for (var i = 0; i < days.length; i++) {
        if (days[i].innerText == dd) {
            days[i].classList.add("active");
            break;
        }
    }
}

themeSwitch.onclick = function() {
    if (currentTheme != "Light") {
        currentTheme = "Light";
        document.getElementById("theme").textContent = "Dark Theme";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        for (var i = 0; i < holidays.length; i++) {
            holidays[i].parentElement.getElementsByClassName("icon")[0].style.backgroundImage = "url(icons/holiday-icon.png)";
            holidays[i].parentElement.getElementsByClassName("caption")[0].style.backgroundColor = "rgba(51,51,51,0.6)";
        }
        for (var i = 0; i < weekendNode.length; i++) {
            weekendNode[i].classList.remove("dark");
        }
    }
    else {
        currentTheme = "Dark"
        document.getElementById("theme").textContent = "Light Theme";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
                
        for (var i = 0; i < holidays.length; i++) {
            holidays[i].parentElement.getElementsByClassName("icon")[0].style.backgroundImage = "url(icons/holiday-icon-white.png)";
            holidays[i].parentElement.getElementsByClassName("caption")[0].style.backgroundColor = "rgba(51,51,51,0.9)";
        }
        for (var i = 0; i < weekendNode.length; i++) {
            weekendNode[i].classList.add("dark");
        }
    }
}