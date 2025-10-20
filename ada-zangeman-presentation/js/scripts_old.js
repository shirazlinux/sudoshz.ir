
var menus = {
    'fr': '    <label for="menu-collapsed">🛹<span class="accessibility">Menu</span></label>\n' +
        '    <input type="checkbox" id="menu-collapsed" name="menu-collapsed" />\n' +
        '    <ul>\n' +
        '        <li>\n' +
        '            <select name="language-selector" id="language-selector" onchange="changeLanguage()">\n' +
        '                <option value="fr" selected>français</option>\n' +
        '                <option value="de">Deutsch</option>\n' +
        '                <option value="en">english</option>\n' +
        '            </select>\n' +
        '        </li>\n' +
        '        <li><a href="index_fr.html">Accueil</a></li>\n' +
        '        <li><a href="presentation_fr.html">Présentation</a></li>\n' +
        '        <li>——————————</li>\n' +
        '        <li><a href="az_fr.html">Ada &amp; Zangemann</a></li>\n' +
        '        <li><a href="az_fr.html#page-01">Chapitre 1</a></li>\n' +
        '        <li><a href="az_fr.html#page-24">Chapitre 2</a></li>\n' +
        '        <li><a href="az_fr.html#page-53">Chapitre 3</a></li>\n' +
        '        <li><a href="az_fr.html#page-77">Chapitre 4</a></li>\n' +
        '        <li>——————————</li>\n' +
        '        <li><a href="translation_fr.html">La traduction</a></li>\n' +
        '        <li><a href="acknowledgments_fr.html">Remerciements</a></li>\n' +
        '        <li><a href="authors_fr.html">Les auteurs</a></li>\n' +
        '        <li><a href="colophon_fr.html">Colophon</a></li>\n' +
        '        <li class="livre"><a href="https://cfeditions.com/ada" target="_blank">Livre imprimé…</a></li>\n' +
        '    </ul>',
    'en': '<label for="menu-collapsed">🛹<span class="accessibility">Menu</span></label>\n' +
        '    <input type="checkbox" id="menu-collapsed" name="menu-collapsed" />\n' +
        '    <ul>\n' +
        '        <li>\n' +
        '            <select name="language-selector" id="language-selector" onchange="changeLanguage()">\n' +
        '                <option value="fr">français</option>\n' +
        '                <option value="de">deutsch</option>\n' +
        '                <option value="en" selected>english</option>\n' +
        '            </select>\n' +
        '        </li>\n' +
        '        <li><a href="index_en.html">Home</a></li>\n' +
        '        <li><a href="presentation_en.html">Presentation</a></li>\n' +
        '        <li>——————————</li>\n' +
        '        <li><a href="az_en.html">Ada &amp; Zangemann</a></li>\n' +
        '        <li><a href="az_en.html#page-01">Chapter 1</a></li>\n' +
        '        <li><a href="az_en.html#page-24">Chapter 2</a></li>\n' +
        '        <li><a href="az_en.html#page-53">Chapter 3</a></li>\n' +
        '        <li><a href="az_en.html#page-77">Chapter 4</a></li>\n' +
        '        <li>——————————</li>\n' +
        '        <li><a href="translation_en.html">About translation</a></li>\n' +
        '        <li><a href="acknowledgments_en.html">Acknowledgments</a></li>\n' +
        '        <li><a href="authors_en.html">The authors</a></li>\n' +
        '        <li><a href="colophon_en.html">Colophon</a></li>\n' +
        '        <li class="livre"><a href="https://nostarch.com/ada-zangemann"  target="_blank">Printed book</a></li>\n' +
        '    </ul>',
    'de': '    <label for="menu-collapsed">🛹<span class="accessibility">Menu</span></label>\n' +
        '    <input type="checkbox" id="menu-collapsed" name="menu-collapsed" />\n' +
        '    <ul>\n' +
        '        <li>\n' +
        '            <select name="language-selector" id="language-selector" onchange="changeLanguage()">\n' +
        '                <option value="fr">français</option>\n' +
        '                <option value="de" selected >Deutsch</option>\n' +
        '                <option value="en">english</option>\n' +
        '            </select>\n' +
        '        </li>\n' +
        '        <li><a href="index_de.html">Startseite</a></li>\n' +
        '        <li><a href="presentation_de.html">Präsentation</a></li>\n' +
        '        <li>——————————</li>\n' +
        '        <li><a href="az_de.html">Ada &amp; Zangemann</a></li>\n' +
        '        <li><a href="az_de.html#page-01">Kapitel 1</a></li>\n' +
        '        <li><a href="az_de.html#page-24">Kapitel 2</a></li>\n' +
        '        <li><a href="az_de.html#page-53">Kapitel 3</a></li>\n' +
        '        <li><a href="az_de.html#page-77">Kapitel 4</a></li>\n' +
        '        <li>——————————</li>\n' +
        '        <li><a href="translation_de.html">Die Übersetzung</a></li>\n' +
        '        <li><a href="acknowledgments_de.html">Danksagungen</a></li>\n' +
        '        <li><a href="authors_de.html">Die Autoren</a></li>\n' +
        '        <li><a href="colophon_de.html">Kolophon</a></li>\n' +
        '        <li class="livre"><a href="https://dpunkt.de/produkt/ada-und-zangemann/" target="_blank">Gedrucktes Buch ...</a></li>\n' +
        '    </ul>'
}

function getPreferredLanguage() {
    let preferredLanguage = navigator.language.split("-")[0];
    console.log(preferredLanguage);
    if (preferredLanguage in existingLanguages) {
        return preferredLanguage;
    } else {
        return 'en';
    }
}
function initialisation() {
    console.log('initialisation');
    let existingLanguages = ['fr', 'en', 'de'];
    localStorage.clear();
    let currentLanguage = getPreferredLanguage();
    let newUrl = getServerName() + currentLanguage +  '/index_' + currentLanguage + '.html';
    localStorage.setItem('ada_currentLanguage', currentLanguage);
    localStorage.setItem('ada_myHref', newUrl);
    localStorage.setItem('ada_pageId', '');
    localStorage.setItem('ada_serverName', getServerName());
    localStorage.setItem('ada_existingLanguages', existingLanguages);
    localStorage.setItem('ada_reading', false);
    console.log(localStorage);
    goToLocation(localStorage.getItem('ada_myHref'));
}

function changeLanguage() {
    let newLanguage = document.getElementById('language-selector').value;
    myHref = localStorage.getItem('ada_myHref');
    console.log('changeLanguage');
    console.log(myHref);
    myFile = myHref.split('#')[0];
    myHref = myHref.replace(/_[a-z]{2}\./, '_' + newLanguage + '.');
    myHref = myHref.replace(/\/[a-z]{2}\//, '/' + newLanguage + '/');
    if (localStorage.getItem('ada_pageId').length > 0) {
        myHref = myFile + '#' + localStorage.getItem('ada_pageId');
    }
    localStorage.setItem('ada_myHref', myHref);
    localStorage.setItem('ada_currentLanguage', newLanguage);
    if (localStorage.getItem('ada_reading')) {
        goToLocation(myHref);
    } else {
        goToLocation(myFile);
    }
}

function getServerName() {
    if (localStorage.getItem('ada_serverName')) {
        return localStorage.getItem('ada_serverName');
    } else {
        let TName = window.location.href.split('/');
        let serverName = TName[0] + '/' + TName[1] + '/' + TName[2];
        localStorage.setItem('ada_serverName', serverName);
        return serverName;
    }
}

async function goToLocation(location) {
    console.log('goToLocation');
    window.location.href = location;
    return 1;
}

async function goToPage() {
    console.log('je suis goToPage');
    let pageId = localStorage.getItem('ada_pageId');
    if (localStorage.getItem('ada_pageId').length === 0) {
        return 1;
    } else {
        console.log('goToPage ' + localStorage.getItem('ada_pageId'));
        document.getElementById(pageId).scrollTop = 0;
        let myFile = localStorage.getItem('ada_myHref').split('#')[0];
        console.log(myFile);
        let myHref = myFile + '#' + pageId;
        localStorage.setItem('ada_myHref', myHref);        return 1;
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        //let pageId = entry.target.parentNode.getAttribute('id');
        if (entry.isIntersecting) {
            let pageId = entry.target.parentNode.getAttribute('id');
            localStorage.setItem('ada_pageId', pageId);
        }
    });
});

function getConteneur() {
    if (document.getElementById('conte')) {
        return document.getElementById('conte');
        // conteneur.focus();
    } else {
        return document.getElementsByTagName('article')[0]
    }
}

window.addEventListener('load', () => {
    //localStorage.clear();

    if (localStorage.getItem('ada_serverName') === null) {
        initialisation();
    }

    let currentLanguage = localStorage.getItem('ada_currentLanguage');
    if (document.getElementById("main-menu")) {
        document.getElementById("main-menu").innerHTML = menus[currentLanguage];
    }
    let conteneur = getConteneur();
    conteneur.addEventListener('click', (e) => {
        document.getElementById('menu-collapsed').checked = false;
    });
    if (window.location.href.indexOf('az_') === -1) {
        localStorage.setItem('ada_myHref', window.location.href);
        localStorage.setItem('ada_pageId', '');
        localStorage.setItem('ada_reading', false);
        let footerFile = getServerName() + '/' + currentLanguage + "/footer_" + currentLanguage + ".frg.html";
        getText(footerFile, "footer-content");

        async function getText(file, idToFill) {
            let x = await fetch(file);
            let y = await x.text();
            document.getElementById(idToFill).innerHTML = y;
        }
    } else {
        console.log('reading');
        localStorage.setItem('ada_myHref', window.location.href);
        localStorage.setItem('ada_reading', true);
        if (localStorage.getItem('ada_pageId').length === 0) {
            localStorage.setItem('ada_pageId', 'page-01');
        }
        let allPages = document.querySelectorAll('.ada-page');
        const allHScroll = document.querySelectorAll('.horizontal-scroll');


        conteneur.addEventListener('scrollend', (e) => {
            document.getElementById('menu-collapsed').checked = false;
            allPages.forEach((myPage) => {
                let cible = myPage.children[0];
                observer.observe(cible);
            });
            goToPage();
            console.log(localStorage);
        });
    }

            //     const location = window.location.toString().split('#')[0];
            //     history.replaceState(null, null, location + '#' + pageName);
            // }
          // };
        //   allHScroll.forEach(hScroll => {
        //     const rect = hScroll.getBoundingClientRect();
        //     if (rect.top >= 0 && rect.top < 150) {
        //       hScroll.classList.add('on-screen');
        //     } else {
        //       hScroll.classList.remove('on-screen');
        //     }
        //   });
        //
        // });
console.log('fin');
    console.log(localStorage);
  });



