document.addEventListener('DOMContentLoaded', function(){
    const links = document.querySelectorAll('.sidebar__link');
    for (const link of links) {
        link.addEventListener('click', function() {
            for (const  lnk of links) {
                lnk.classList.remove('sidebar__link--active');
            }

            this.classList.add('sidebar__link--active');

            const tabs = document.querySelectorAll('.content');
            for (const tab of tabs) {
                tab.classList.add('content--hidden');
            }

            const id = this.href.split('#')[1];
            document.querySelector('#' + id).classList.remove('content--hidden');
        });    
    }
    
});