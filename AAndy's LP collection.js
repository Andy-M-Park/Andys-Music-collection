const categoryBtn = document.querySelector('.dropdown-content');
const projects = document.querySelectorAll('.box1');

categoryBtn.addEventListener('click', (e) =>{
    const filter = e.target.dataset.filter;

    if (filter == null){
        return;
    }

    projects.forEach((project)=>{
        if (filter == "*" || filter == project.dataset.type){
            project.classList.remove('invisible');
        }
        else{
            project.classList.add('invisible');
        }
    })
})