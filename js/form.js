(function () {
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form');
    let tabNav;
    console.log(tabs)
    const formSelect = function (tabNav) {
        forms.forEach(item => {
            if (item.classList.contains(tabNav)) {
                item.classList.add('form_active');
            } else {
                item.classList.remove('form_active');
            }
        });
    };

    const tabsSelect = function () {
        tabs.forEach(item => {
            item.classList.remove('tab_active');
        });
        tabNav = this.getAttribute('data_form');
        this.classList.add('tab_active');
        formSelect(tabNav);
    };
    tabs.forEach(item => {
        item.addEventListener('click', tabsSelect)

    });


}())