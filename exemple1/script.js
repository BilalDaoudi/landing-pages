const blogs = [
    {
        title: "Blog Title 1",
        image: "img/13.webp",
        description: "Aenean vel turpis scelerisque, viverra nulla in, dapibus velit. Nulla facilisi. Curabitur ut pulvinar augue."
    },
    
    {
        title: "Blog Title 2",
        image: "img/12.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    
    {
        title: "Blog Title 3",
        image: "img/11.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    {
        title: "Blog Title 1",
        image: "img/10.webp",
        description: "Aenean vel turpis scelerisque, viverra nulla in, dapibus velit. Nulla facilisi. Curabitur ut pulvinar augue."
    },
    {
        title: "Blog Title 2",
        image: "img/14.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    {
        title: "Blog Title 3",
        image: "img/15.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    
    {
        title: "Blog Title 2",
        image: "img/12.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    {
        title: "Blog Title 3",
        image: "img/11.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    {
        title: "Blog Title 1",
        image: "img/10.webp",
        description: "Aenean vel turpis scelerisque, viverra nulla in, dapibus velit. Nulla facilisi. Curabitur ut pulvinar augue."
    },
    {
        title: "Blog Title 2",
        image: "img/14.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    
    {
        title: "Blog Title 1",
        image: "img/10.webp",
        description: "Aenean vel turpis scelerisque, viverra nulla in, dapibus velit. Nulla facilisi. Curabitur ut pulvinar augue."
    },
    {
        title: "Blog Title 3",
        image: "img/11.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    {
        title: "Blog Title 2",
        image: "img/14.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    
    {
        title: "Blog Title 1",
        image: "img/10.webp",
        description: "Aenean vel turpis scelerisque, viverra nulla in, dapibus velit. Nulla facilisi. Curabitur ut pulvinar augue."
    },
    {
        title: "Blog Title 3",
        image: "img/15.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    
    {
        title: "Blog Title 3",
        image: "img/11.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    
    {
        title: "Blog Title 3",
        image: "img/13.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    
    {
        title: "Blog Title 2",
        image: "img/12.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    
    {
        title: "Blog Title 1",
        image: "img/13.webp",
        description: "Aenean vel turpis scelerisque, viverra nulla in, dapibus velit. Nulla facilisi. Curabitur ut pulvinar augue."
    },
    {
        title: "Blog Title 2",
        image: "img/12.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    {
        title: "Blog Title 3",
        image: "img/11.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    {
        title: "Blog Title 1",
        image: "img/10.webp",
        description: "Aenean vel turpis scelerisque, viverra nulla in, dapibus velit. Nulla facilisi. Curabitur ut pulvinar augue."
    },
    {
        title: "Blog Title 2",
        image: "img/14.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    {
        title: "Blog Title 3",
        image: "img/15.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    
    {
        title: "Blog Title 2",
        image: "img/12.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    {
        title: "Blog Title 3",
        image: "img/11.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    {
        title: "Blog Title 1",
        image: "img/10.webp",
        description: "Aenean vel turpis scelerisque, viverra nulla in, dapibus velit. Nulla facilisi. Curabitur ut pulvinar augue."
    },
    {
        title: "Blog Title 2",
        image: "img/14.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    
    {
        title: "Blog Title 1",
        image: "img/10.webp",
        description: "Aenean vel turpis scelerisque, viverra nulla in, dapibus velit. Nulla facilisi. Curabitur ut pulvinar augue."
    },
    {
        title: "Blog Title 3",
        image: "img/11.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    {
        title: "Blog Title 2",
        image: "img/14.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    
    {
        title: "Blog Title 2",
        image: "img/12.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    
    {
        title: "Blog Title 1",
        image: "img/10.webp",
        description: "Aenean vel turpis scelerisque, viverra nulla in, dapibus velit. Nulla facilisi. Curabitur ut pulvinar augue."
    },
    {
        title: "Blog Title 3",
        image: "img/15.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    
    {
        title: "Blog Title 3",
        image: "img/11.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    
    {
        title: "Blog Title 3",
        image: "img/13.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    
    {
        title: "Blog Title 2",
        image: "img/12.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },

];


const top_blogs = [
    {
        title: "Blog Title 4",
        image: "img/13.webp",
        description: "Aenean vel turpis scelerisque, viverra nulla in, dapibus velit. Nulla facilisi. Curabitur ut pulvinar augue."
    },
    {
        title: "Blog Title 5",
        image: "img/12.webp",
        description: "Sed ac fermentum massa. Mauris consectetur, quam in tristique interdum, mauris orci efficitur justo, eu finibus eros orci ac est."
    },
    {
        title: "Blog Title 1",
        image: "img/14.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
    },
    {
        title: "Blog Title 2",
        image: "img/10.webp",
        description: "Donec dictum augue non magna vehicula, eget suscipit felis hendrerit. Integer sit amet consectetur leo."
    },
    {
        title: "Blog Title 3",
        image: "img/15.webp",
        description: "Quisque euismod lectus vitae justo tincidunt, a consectetur eros hendrerit. Vivamus vel massa sed risus."
    },
    {
        title: "Blog Title 4",
        image: "img/13.webp",
        description: "Aenean vel turpis scelerisque, viverra nulla in, dapibus velit. Nulla facilisi. Curabitur ut pulvinar augue."
    },]


let currentPage = 1;
const postsPerPage = 6;
const totalPages = Math.ceil(blogs.length / postsPerPage);

function displayBlogs() {
    const blogSection = document.getElementById('blog-section');
    blogSection.innerHTML = '';
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    for (let i = start; i < end && i < blogs.length; i++) {
        const blog = blogs[i];
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
            </div>
        `;
        blogSection.appendChild(blogCard);
    }
    updatePagination();
}

function updatePagination() {
const pagination = document.getElementById('pagination');
pagination.innerHTML = '';
const prevButton = document.createElement('button');
prevButton.setAttribute("class","prev_next");
prevButton.textContent = '←';
prevButton.disabled = currentPage === 1;
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayBlogs();
    }
});
pagination.appendChild(prevButton);

const maxVisiblePages = 4;
let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
}

for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement('button');
    pageButton.setAttribute("class","num")
    pageButton.textContent = i;
    if (i === currentPage) {
        pageButton.disabled = true;
    }
    pageButton.addEventListener('click', () => {
        currentPage = i;
        displayBlogs();
    });
    pagination.appendChild(pageButton);
}

const nextButton = document.createElement('button');
nextButton.setAttribute("class","prev_next");
nextButton.textContent = '→';
nextButton.disabled = currentPage === totalPages;
nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayBlogs();
    }
});
pagination.appendChild(nextButton);
}

function displayTopBlogs() {
    const topblogSection = document.getElementById('top-blog-section');
    topblogSection.innerHTML = '';
    for (let i = 0; i < top_blogs.length; i++) {
        const blog = top_blogs[i];
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
            </div>
        `;
        topblogSection.appendChild(blogCard);
    }

}

displayBlogs();
displayTopBlogs();





