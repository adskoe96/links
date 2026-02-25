const myInfo = { birthDate: '2005-04-20', hobby: 'game development' };

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    if (today.getMonth() - birth.getMonth() < 0 || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('description').innerHTML = `AGE: ${calculateAge(myInfo.birthDate)}<br>MISSION: ${myInfo.hobby}`;

    try {
        const [projects, skills, badges] = await Promise.all([
            fetch('data/projects.json').then(r => r.json()),
            fetch('data/skills.json').then(r => r.json()),
            fetch('data/badges.json').then(r => r.json())
        ]);

        const skillsContainer = document.getElementById('skills-list');
        skillsContainer.innerHTML = skills.map(s => 
            `<b style="color:${s.color};">[${s.name}]</b>`
        ).join(' ');

        const badgesContainer = document.getElementById('badges-container');
        badgesContainer.innerHTML = badges.map(b => 
            `<img src="${b.src}" alt="${b.alt}" style="margin:2px; border:1px solid #fff;">`
        ).join('');

        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.innerHTML = projects.map(proj => `
            <div id="${proj.id}" style="margin-bottom: 15px; border-left: 3px solid #00FFFF; padding-left: 10px;">
                <b class="project-link" onclick="toggleProject('${proj.id}')" style="cursor:pointer; color:#FFFF00; text-decoration:underline;">
                    > EX_FILE: ${proj.title}
                </b>
                <div id="details-${proj.id}" style="display:none; margin-top:10px; background:#000044; padding:10px;">
                    <img src="${proj.image}" width="200" border="2" style="border-color:#00FFFF;"><br>
                    <p><font size="2" color="#C0C0C0">${proj.description}</font></p>
                    
                    ${proj.contributors && proj.contributors.length > 0 ? `
                        <div class="contributors">
                            <h4 style="color:#00FF00; font-size:14px;">>> CONTRIBUTORS <<</h4>
                            <ul style="color:#C0C0C0; font-size:12px; margin:5px 0;">
                                ${proj.contributors.map(c => `
                                    <li>
                                        ${c.link ? `<a href="${c.link}" target="_blank" style="color:#00FFFF; text-decoration:underline;">` : ''}
                                        <b style="color:#FFFF00;">${c.name}</b>
                                        ${c.link ? '</a>' : ''}
                                        - ${c.activity}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                                
                    <a href="${proj.link}" target="_blank" style="color:#00FFFF; text-decoration:underline;">[ ${proj.isGame ? 'EXECUTE GAME' : 'MORE DETAILS'} ]</a>
                </div>
            </div>
        `).join('');

        checkHash();

    } catch (e) {
        console.error("Critical System Failure:", e);
    }
});

window.toggleProject = function(id) {
    const el = document.getElementById(`details-${id}`);
    if(el) el.style.display = (el.style.display === 'none') ? 'block' : 'none';
};

function checkHash() {
    const id = window.location.hash.substring(1);
    if (id) {
        const target = document.getElementById(id);
        if (target) {
            toggleProject(id);
            target.scrollIntoView();
            target.style.background = "#FF0000";
            setTimeout(() => target.style.background = "transparent", 1000);
        }
    }
}

window.addEventListener('hashchange', checkHash);