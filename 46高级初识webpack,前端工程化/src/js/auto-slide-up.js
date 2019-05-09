    //页面元素从下方出现,利用window.scrollY判断去除offset的时机

    function removeOffset() {
      switch (true) {
        case 900 < window.scrollY:
          siteAbout.classList.remove('offset')
          siteSkills.classList.remove('offset')
          siteWorks.classList.remove('offset')

          window.removeEventListener('scroll', removeOffset)
          break;
        case 550 < window.scrollY:
          siteAbout.classList.remove('offset')
          siteSkills.classList.remove('offset')
          break;
        case 0 == window.scrollY:
          setTimeout(() => {
            siteAbout.classList.remove('offset')
          }, 1000);
          break;
      }
    }

    window.addEventListener('scroll', removeOffset)