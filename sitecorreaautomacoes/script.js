
// Initialize AOS library
AOS.init();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showSkillDetails(name, experience, description) {
    document.getElementById('skillName').innerText = name;
    document.getElementById('skillExperience').innerText = experience;
    document.getElementById('skillDescription').innerText = description;
}

