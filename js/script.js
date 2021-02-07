const navbarNav = document.querySelector('.navbar-nav');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

navbarNav.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

const servercount = document.getElementById("servercount");
if (servercount) {
    var response = fetch('https://api.jsonbin.io/b/601ee476d5aafc6431a4d96b/11', {
        method: 'GET',
        headers: {
            'secret-key': '$2b$10$OgkBiBLjDeLFpRDpKaSwJOHZDsGclpeBgWobwl4ZqEta2M21auKJe'
        }
    }).then(response => response.json()).then(data => servercount.innerHTML =
        "Currently in " + data.total_servers + " servers"
    ); //appendChild(document.createTextNode(data.total_servers+" servers")));
}
const options = document.querySelectorAll('.option');
const allCommands = document.querySelectorAll('.command')

function removeSelected() {
    options.forEach(option => {
        option.classList.remove('selected')
    })
}
if (options) {
    options.forEach(option => {
        option.addEventListener('click', () => {
            removeSelected()
            option.classList.add('selected');
            if (option.innerHTML == "All") {
                allCommands.forEach(allCommand => {
                    allCommand.classList.remove('d-none')
                })
                console.log(option.innerHTML)
            } else {
                const commands = document.querySelectorAll(`#${option.innerHTML}`);
                allCommands.forEach(allCommand => {
                    allCommand.classList.add('d-none')
                })
                commands.forEach(command => {
                    command.classList.remove('d-none')
                })

            }
        })
    })
}