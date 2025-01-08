function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

const myInfo = {
    birthDate: '2005-04-20',
    hobby: 'programming and game development',
};

const description = `I'm just an ordinary ${calculateAge(myInfo.birthDate)}-year-old student,
with an extraordinary passion for ${myInfo.hobby}.</br>
While I might not churn out content at lightning speed, I'm deeply dedicated to what I do.
I take my time to truly immerse myself in the materials I work with,
focusing on creating projects that bring me personal joy and satisfaction.`;

document.addEventListener('DOMContentLoaded', () => {
    const descriptionElement = document.getElementById('description');
    if (descriptionElement) {
        descriptionElement.innerHTML = description;
    }
});