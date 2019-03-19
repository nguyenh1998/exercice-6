window.addEventListener('load', function() {
    console.log('AAAAAAAAAAAAAAA')
    
    var titre = document.getElementsByClassName('site-title')[0]
    var sousTitre = document.getElementsByClassName('site-description')[0]
    var content = document.getElementsByClassName('site-content')[0]

    titre.classList.add('fadeIn')

    titre.addEventListener('animationend', () => {
        content.classList.add('appearIn')
    })
})