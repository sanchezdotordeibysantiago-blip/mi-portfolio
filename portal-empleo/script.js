// FILTRO DE VACANTES

const searchInput = document.getElementById('searchInput');
const careerFilter = document.getElementById('careerFilter');
const jobCards = document.querySelectorAll('.job-card');

function filterJobs(){

    const searchText = searchInput.value.toLowerCase();
    const selectedCareer = careerFilter.value;

    jobCards.forEach(card => {

        const title = card.querySelector('h3').textContent.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch = title.includes(searchText);
        const matchesCategory = selectedCareer === 'all' || selectedCareer === category;

        if(matchesSearch && matchesCategory){
            card.style.display = 'block';
        }else{
            card.style.display = 'none';
        }
    });
}

searchInput.addEventListener('keyup', filterJobs);
careerFilter.addEventListener('change', filterJobs);


// SUBIDA DE CV

const cvFile = document.getElementById('cvFile');
const fileName = document.getElementById('fileName');

cvFile.addEventListener('change', function(){

    if(cvFile.files.length > 0){
        fileName.textContent = `Archivo seleccionado: ${cvFile.files[0].name}`;
    }
});


// BOTONES DE POSTULACION

const applyButtons = document.querySelectorAll('.apply-btn');

applyButtons.forEach(button => {

    button.addEventListener('click', () => {

        button.textContent = 'Postulado';
        button.style.background = '#10b981';

        alert('¡Te has postulado exitosamente!');
    });
});


// SCROLL SUAVE

const links = document.querySelectorAll('nav a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));

        section.scrollIntoView({
            behavior:'smooth'
        });
    });
});