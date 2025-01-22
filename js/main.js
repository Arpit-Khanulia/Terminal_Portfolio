var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
    loopLines(startbanner, "", 80);
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

// console.log(
//     "%cYou hacked my password!😠",
//     "color: #04ff00; font-weight: bold; font-size: 24px;"
// );
console.log("%cwho is the GOAT ?", "color: grey");

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    }
    if (pw) {
        let et = "*";
        let w = textarea.value.length;
        command.innerHTML = et.repeat(w);
        if (textarea.value === password) {
            pwd = true;
        }
        if (pwd && e.keyCode == 13) {
            loopLines(secret, "color2 margin", 120);
            command.innerHTML = "";
            textarea.value = "";
            pwd = false;
            pw = false;
            liner.classList.remove("password");
        } else if (e.keyCode == 13) {
            addLine("Wrong password", "error", 0);
            command.innerHTML = "";
            textarea.value = "";
            pw = false;
            liner.classList.remove("password");
        }
    } else {
        if (e.keyCode == 13) {
            commands.push(command.innerHTML);
            git = commands.length;
            addLine("firedragon:~/ visitor$ " + command.innerHTML, "no-animation", 0);
            commander(command.innerHTML.toLowerCase());
            command.innerHTML = "";
            textarea.value = "";
        }
        if (e.keyCode == 38 && git != 0) {
            git -= 1;
            textarea.value = commands[git];
            command.innerHTML = textarea.value;
        }
        if (e.keyCode == 40 && git != commands.length) {
            git += 1;
            if (commands[git] === undefined) {
                textarea.value = "";
            } else {
                textarea.value = commands[git];
            }
            command.innerHTML = textarea.value;
        }
    }
}

function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case "help":
            loopLines(help, "color2 margin", 80);
            break;
        case "whoami":
            loopLines(whoami, "color2 margin", 80);
            break;
        case "coding_profiles":
            loopLines(coding_profiles, "color2 margin", 80);
            break;
        case "ls":
            loopLines(ls, "command3 margin", 80);
            break;
        case "cat password.txt":
            loopLines(catpass, "color2 margin", 80);
            break;
        case "cat do_not_open.txt":
            loopLines(catdo, "color2 margin", 80);
            break;
        case "sudo cat do_not_open.txt":
            loopLines(sudocatdo, "color2 margin", 80);
            break;
        case "ls -a":
            loopLines(lsa, "color2 margin", 80);
            break;
        // case "video":
        //     addLine("Opening YouTube...", "color2", 80);
        //     newTab(youtube);
        //     break;
        case "sudo su":
            addLine("Oh no, you're not admin...", "color2", 80);
            setTimeout(function() {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            }, 1000);
            break;
        case "social":
            loopLines(social, "color2 margin", 80);
            break;
        case "secret":
            liner.classList.add("password");
            pw = true;
            break;
        case "projects":
            loopLines(projects, "color2 margin", 80);
            break;
        case "password":
            addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!😂</span>", "error", 100);
            break;
        case "history":
            addLine("<br>", "", 0);
            loopLines(commands, "color2", 80);
            addLine("<br>", "command", 80 * commands.length + 50);
            break;
        case "email":
            addLine('Opening mailto:<a href="mailto:arpitkhanulia7@gmail.com">arpitkhanulia7.com</a>...', "color2", 80);
            newTab(email);
            break;
        case "clear":
            setTimeout(function() {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            break;
        case "banner":
            loopLines(banner, "", 80);
            break;
        case "startbanner":
            loopLines(startbanner, "", 80);
            break;
            // socials
        case "youtube":
            addLine("Opening YouTube...", "color2", 80);
            newTab(youtube);
            break;
        case "twitter":
            addLine("Opening Twitter...", "color2", 0);
            newTab(twitter);
            break;
        case "linkedin":
            addLine("Opening LinkedIn...", "color2", 0);
            newTab(linkedin);
            break;
        case "instagram":
            addLine("Opening Instagram...", "color2", 0);
            newTab(instagram);
            break;
        case "github":
            addLine("Opening GitHub...", "color2", 0);
            newTab(github);
            break;
        case "resume":
            addLine("Opening Resume...", "color2", 0);
            newTab(resume);
            break;
        case "leetcode":
            addLine("Opening leetcode...", "color2", 0);
            newTab(Leetcode);
            break;
        case "codechef":
            addLine("Opening codechef...", "color2", 0);
            newTab(CodeChef);
            break;
        case "geeksforgeeks":
            addLine("Opening geeksforgeeks...", "color2", 0);
            newTab(Geeksforgeeks);
            break;
        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;
    }
}

function newTab(link) {
    setTimeout(function() {
        window.open(link, "_blank");
    }, 500);
}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function() {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function(item, index) {
        addLine(item, style, index * time);
    });
}