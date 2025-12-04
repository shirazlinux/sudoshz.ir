// تابع اسکرول به هش
if (window.location.hash) {
    scrollToId(window.location.hash);
}

function scrollToId(monhash) {
    var hash = monhash.substring(1);
    var mapage = document.getElementById(hash);
    if (mapage) {
        var conteneur = document.getElementById('conte');
        console.log("scroll to ", hash);
        conteneur.scrollTo({
            top: mapage.offsetTop,
            /* behavior: 'smooth' */
        });
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

function getConteneur() {
    if (document.getElementById('conte')) {
        return document.getElementById('conte');
    } else {
        return document.getElementsByTagName('article')[0];
    }
}

function initialisation() {
    localStorage.clear();
    let newUrl = getServerName() + '/livre/index.html';
    localStorage.setItem('initialisation', 'initialized');
    localStorage.setItem('ada_currentUrl', newUrl);
    localStorage.setItem('ada_pageId', '');
    localStorage.setItem('ada_serverName', getServerName());
    localStorage.setItem('ada_reading', false);
    localStorage.setItem('ada_changingLanguage', false);
    console.log(localStorage);
}

// Event listener اصلی
window.addEventListener('load', () => {

    if (window.location.href.indexOf('index') !== -1) {
        initialisation();
    }

    const allPages = document.querySelectorAll('.ada-page');
    const allHScroll = document.querySelectorAll('.horizontal-scroll');
    let conteneur = getConteneur();

    // بستن منو با کلیک روی کانتینر
    conteneur.addEventListener('click', (e) => {
        document.getElementById('menu-collapsed').checked = false;
    });

    // تشخیص نوع صفحه
    if (window.location.href.indexOf('az.html') === -1) {
        // صفحات عادی (غیر از صفحه داستان)
        localStorage.setItem('ada_currentUrl', window.location.href);
        localStorage.setItem('ada_pageId', '');
        localStorage.setItem('ada_reading', false);
        
        // لود فوتر
        if (document.getElementById("footer-content")) {
            let footerFile = getServerName() + '/livre/footer.frg.html';
            getText(footerFile, "footer-content");
        }

        async function getText(file, idToFill) {
            try {
                let x = await fetch(file);
                if (x.ok) {
                    let y = await x.text();
                    let element = document.getElementById(idToFill);
                    if (element) {
                        element.innerHTML = y;
                    }
                }
            } catch (error) {
                console.error("Error loading footer:", error);
            }
        }
    } else {
        // صفحه داستان (az.html)
        localStorage.setItem('ada_reading', true);
        
        // مدیریت اسکرول و ردیابی صفحات
        conteneur.addEventListener('scroll', (e) => {
            allPages.forEach(page => {
                const rect = page.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < 150) {
                    var pageName = page.getAttribute('id');
                    localStorage.setItem('ada_pageId', pageName);
                    const oldHash = window.location.hash;
                    console.log(oldHash + '/' + pageName);
                    if ('#' + pageName !== oldHash) {
                        const location = window.location.toString().split('#')[0];
                        history.replaceState(null, null, location + '#' + pageName);
                    }
                }
            });
            
            // مدیریت اسکرول افقی
            allHScroll.forEach(hScroll => {
                const rect = hScroll.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < 150) {
                    hScroll.classList.add('on-screen');
                } else {
                    hScroll.classList.remove('on-screen');
                }
            });
            
            localStorage.setItem('ada_currentUrl', window.location.href);
        });
        
        // اسکرول به صفحه ذخیره شده بعد از لود
        const savedPageId = localStorage.getItem('ada_pageId');
        if (savedPageId) {
            setTimeout(() => {
                scrollToId('#' + savedPageId);
            }, 100);
        }
    }
});