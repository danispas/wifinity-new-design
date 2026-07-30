document
.querySelectorAll('.w-plan-card')
.forEach(function(card){

    card.addEventListener('click',function(e){

        if(e.target.tagName === 'BUTTON'){
            return;
        }

        this.classList.toggle('w-plan-card--expanded');

    });

});
