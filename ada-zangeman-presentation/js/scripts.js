var existingLanguages = ['en', 'fr', 'de'];
var menus = {
    'fr': '    <label for="menu-collapsed">🛹<span class="accessibility">Menu</span></label>\n' +
        '    <input type="checkbox" id="menu-collapsed" name="menu-collapsed" />\n' +
        '    <ul>\n' +
        '        <li>\n' +
        '            <div class="custom-select">\n' +
        '               <select name="language-selector" id="language-selector" onchange="changeLanguage()">\n' +
        '                   <option value="fr" selected>Français</option>\n' +
        '                   <option value="de">Deutsch</option>\n' +
        '                   <option value="en">English</option>\n' +
        '               </select>\n' +
        '           </div>\n' +
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
        '            <div class="custom-select">\n' +
        '               <select name="language-selector" id="language-selector" onchange="changeLanguage()">\n' +
        '                   <option value="fr">Français</option>\n' +
        '                   <option value="de">Deutsch</option>\n' +
        '                   <option value="en" selected>English</option>\n' +
        '               </select>\n' +
        '           </div>\n' +
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
        '            <div class="custom-select">\n' +
        '               <select name="language-selector" id="language-selector" onchange="changeLanguage()">\n' +
        '                   <option value="fr">Français</option>\n' +
        '                   <option value="de" selected >Deutsch</option>\n' +
        '                   <option value="en">English</option>\n' +
        '               </select>\n' +
        '           </div>\n' +
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


if (monhash = window.location.hash)  {
    scrollToId(monhash)
}

function scrollToId(monhash) {
    var monhash = monhash.substring(1);
    var mapage = document.getElementById(monhash);
    if (mapage) {
        var mapagey = mapage.offsetTop;
        var conteneur = document.getElementById('conte');
        console.log(conteneur);
        console.log("scroll to ", monhash);
        conteneur.scrollTo({
            top: mapage.offsetTop,
            /* behavior: 'smooth' */
        });
    }
}

function getNavigatorPreferredLanguage() {
    let preferredLanguage = navigator.language.split("-")[0];
    if (preferredLanguage in existingLanguages) {
        return preferredLanguage;
    } else {
        return 'en';
    }
}

function changeLanguage() {
    let newLanguage = document.getElementById('language-selector').value;
    currentUrl = localStorage.getItem('ada_currentUrl');
    myHref = currentUrl.replace(/_[a-z]{2}\./, '_' + newLanguage + '.');
    myHref = myHref.replace(/\/[a-z]{2}\//, '/' + newLanguage + '/');
    localStorage.setItem('ada_currentUrl', myHref);
    localStorage.setItem('ada_currentLanguage', newLanguage);
    window.location.href = myHref;
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

function getConteneur() {
    if (document.getElementById('conte')) {
        return document.getElementById('conte');
    } else {
        return document.getElementsByTagName('article')[0]
    }
}

function initialisation() {
    localStorage.clear();
    let currentLanguage = window.location.href.match(/_(.*)\./)[1];
    if (!currentLanguage) {
        let currentLanguage = getNavigatorPreferredLanguage();
    }
    let newUrl = getServerName() + '/livre/' + currentLanguage + '/index_' + currentLanguage + '.html';
    localStorage.setItem('initialisation', 'initialized');
    localStorage.setItem('ada_currentLanguage', currentLanguage);
    localStorage.setItem('ada_currentUrl', newUrl);
    localStorage.setItem('ada_pageId', '');
    localStorage.setItem('ada_serverName', getServerName());
    localStorage.setItem('ada_existingLanguages', existingLanguages);
    localStorage.setItem('ada_reading', false);
    localStorage.setItem('ada_changingLanguage', false);
    console.log(localStorage);
}
// update location hash on scroll
// and activate scroll hints

window.addEventListener('load', () => {

    if (window.location.href.indexOf('index') !== -1) {
        initialisation();
    }
    const allPages = document.querySelectorAll('.ada-page');
    const allHScroll = document.querySelectorAll('.horizontal-scroll');
    const currentLanguage = localStorage.getItem('ada_currentLanguage');

    // if (document.getElementById("main-menu")) {
    //     document.getElementById("main-menu").innerHTML = menus[localStorage.getItem('ada_currentLanguage')];
    // }
    let conteneur = getConteneur();
    conteneur.addEventListener('click', (e) => {
        document.getElementById('menu-collapsed').checked = false;
    });

    if (window.location.href.indexOf('az_') === -1) {
        // paratexte
        localStorage.setItem('ada_currentUrl', window.location.href);
        localStorage.setItem('ada_pageId', '');
        localStorage.setItem('ada_reading', false);
        let footerFile = getServerName() + '/livre/' + currentLanguage + "/footer_" + currentLanguage + ".frg.html";
        getText(footerFile, "footer-content");

        async function getText(file, idToFill) {
            let x = await fetch(file);
            let y = await x.text();
            document.getElementById(idToFill).innerHTML = y;
        }
    } else {
        //lecture du conte
        localStorage.setItem('ada_reading', true);
        conteneur.addEventListener('scroll', (e) => {
            // document.getElementById('menu-collapsed').checked = false;

            allPages.forEach(page => {
                const rect = page.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < 150) {
                    var pageName = page.getAttribute('id');
                    localStorage.setItem('ada_pageId', pageName);
                    /* console.log("update hash", pageName) */
                    const oldHash = window.location.hash;
                    console.log(oldHash + '/' + pageName);
                    if ('#' + pageName !== oldHash) {
                        const location = window.location.toString().split('#')[0];
                        history.replaceState(null, null, location + '#' + pageName);
                    }
                }
                ;
                allHScroll.forEach(hScroll => {
                    const rect = hScroll.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top < 150) {
                        hScroll.classList.add('on-screen');
                    } else {
                        hScroll.classList.remove('on-screen');
                    }
                });
            });
            localStorage.setItem('ada_currentUrl', window.location.href);
            console.log(localStorage);
        });
    }
  });


