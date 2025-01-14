document.addEventListener('DOMContentLoaded', () => {
    const profileInfo = {
        name: 'Benedict Doe',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
        email: 'john.doe@example.com',
        phone: '(123) 456-7890'
    };

    document.getElementById('profile-name').textContent = profileInfo.name;
    document.getElementById('profile-bio').textContent = profileInfo.bio;
    document.getElementById('profile-email').textContent = profileInfo.email;
    document.getElementById('profile-phone').textContent = profileInfo.phone;
});
