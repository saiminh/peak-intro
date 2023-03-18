window.addEventListener('DOMContentLoaded', function() {

    let hasPlayed = this.sessionStorage.getItem('hasPlayed') || false;

    if (hasPlayed) {
      this.document.body.classList.add('skip-anim');
    } else {
      this.sessionStorage.setItem('hasPlayed', true);
    }

})