document.addEventListener('DOMContentLoaded', function(e) {
    // Lets just call out the elements we want to focus on
    const mainEl = '.shredded-paper';
    const repeatUnit = '.shredded-paper .content';
    const repeatNum = 20; // And this is how many times we want the element to be repeated
    
    for(let i = 0; i < repeatNum; ++i) {
        // We will create a new element for every repeatNum
        let newEl = document.createElement('div');
        newEl.innerHTML = document.querySelector(repeatUnit).innerHTML;
        newEl.classList.add(`item-${i+1}`);
        // Our element is about 400px wide, so I have hardcoded this in here
        // But it is not too challenging to customise if you want
        // THIS IS WHERE WE SET CLIP-PATH()
        newEl.setAttribute('style', `clip-path: inset(0px ${(repeatNum-1-i)*65}px 0 ${i*65}px);`);
        // And we append the element
        document.querySelector(mainEl).appendChild(newEl);
    }

    // Finally, we add the 'animate' class when a user clicks on shred.
    document.querySelector('.shred-me').addEventListener('click', function(e) {
        document.querySelector('.shredded-paper').classList.add('animate');
    });
});