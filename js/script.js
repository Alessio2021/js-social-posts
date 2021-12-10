const users = [
    {
        guest: 'Phil Mangione',
        imageUser: 'image=15',
        date: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.Distinctio minima iusto.Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.',
        image: 'image=171',
        likes: 80
    },
    {
        guest: 'Jhonny Bravo',
        imageUser: 'image=16',
        date: '5 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.Distinctio minima iusto.Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.',
        image: 'image=172',
        likes: 50
    },
    {
        guest: 'James Bond',
        imageUser: 'image=17',
        date: '6 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.Distinctio minima iusto.Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.',
        image: 'image=173',
        likes: 46
    },
    {
        guest: 'Tony Stark',
        imageUser: 'image=18',
        date: '7 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut.Distinctio minima iusto.Ad ad maiores et sint voluptate recusandae architecto.Et nihil ullam aut alias.',
        image: 'image=174',
        likes: 98
    },
]

for (let i = 0; i < users.length; i++) {
    const newPost = users[i];

    const element = 
        `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="https://unsplash.it/300/300?${newPost.imageUser}" alt="${newPost.guest}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${newPost.guest}</div>
                    <div class="post-meta__time">${newPost.date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${newPost.text}</div>
        <div class="post__image">
            <img src="https://unsplash.it/600/300?${newPost.image}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${newPost.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `;

    container.innerHTML += element;
}

const button = document.querySelectorAll('.js-like-button');
let like = document.querySelectorAll('.js-likes-counter');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (){
        // console.log(button[i]);
        button[i].classList.toggle('like-button--liked');

        if (button[i].classList.contains('like-button--liked') == true) {
            like.innerHTML = users[i].likes += 1;
        } else {
            like.innerHTML = users[i].likes -= 1;
        }
    });
}