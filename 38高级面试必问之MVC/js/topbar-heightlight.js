 //页面内容与Nav栏的高亮互动

 
 let navHeightlight = function () {
     let About = document.querySelector('a[href="#siteAbout"]').parentElement
     let Skills = document.querySelector('a[href="#siteSkills"]').parentElement
     let Works = document.querySelector('a[href="#siteWorks"]').parentElement
     let allRemove = function () {
         About.classList.remove('heightLight')
         Skills.classList.remove('heightLight')
         Works.classList.remove('heightLight')
     }
     switch (true) {
         case 10 > window.scrollY:
             allRemove();
             break;
         case 10 < window.scrollY && window.scrollY < 700:
             allRemove();
             About.classList.add('heightLight')
             break;
         case 700 < window.scrollY && window.scrollY < 1200:
             allRemove();
             Skills.classList.add('heightLight')
             break;
         case 1200 < window.scrollY && window.scrollY < 2000:
             allRemove();
             Works.classList.add('heightLight')
             break;
     }
 }

 window.addEventListener('scroll', function (e) {
     navHeightlight();
 })