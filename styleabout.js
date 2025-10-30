document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.skill-content');

    const handleTabClick = (event) => {
        const targetTabId = event.currentTarget.id;
        const targetContentId = targetTabId.replace('tab-', 'content-');

        
        tabs.forEach(tab => {
            tab.classList.remove('active-tab', 'text-yellow-500');
            tab.classList.add('text-gray-400', 'hover:text-white');
        });
        contents.forEach(content => {
            content.classList.remove('active-content');
        });

        
        event.currentTarget.classList.add('active-tab', 'text-yellow-500');
        event.currentTarget.classList.remove('text-gray-400', 'hover:text-white');

        
        const activeContent = document.getElementById(targetContentId);
        if (activeContent) {
            activeContent.classList.add('active-content');
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
    });
});

window.onload = function () {
    typeWriter();

    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero img');
    const elements = heroContent.querySelectorAll('h4, h1, #typed-container, h5');

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
    });

    heroImage.style.opacity = 0;
    heroImage.style.transform = 'translateX(50px)';
    heroImage.style.transition = 'all 1s ease';

    elements.forEach((el, i) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 400 * i);
    });

    setTimeout(() => {
        heroImage.style.opacity = 1;
        heroImage.style.transform = 'translateX(0)';
    }, 1800);
};