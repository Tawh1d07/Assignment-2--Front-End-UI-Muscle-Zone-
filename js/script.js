/* ==============================
   Muscle Zone Gym - Main JavaScript
   Custom JS written for Assignment 2
   ============================== */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const classCards = document.querySelectorAll('.class-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    classCards.forEach((card) => {
      const showCard = selectedCategory === 'all' || card.dataset.category === selectedCategory;
      card.hidden = !showCard;
    });
  });
});

const modal = document.querySelector('#plan-modal');
const modalText = document.querySelector('#modal-text');
const closeModal = document.querySelector('.modal-close');
const planButtons = document.querySelectorAll('.open-plan');

planButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!modal || !modalText) return;
    modalText.textContent = `You selected the ${button.dataset.plan}. You can continue to the enquiry form to ask a question or request more information.`;
    modal.hidden = false;
  });
});

if (closeModal && modal) {
  closeModal.addEventListener('click', () => {
    modal.hidden = true;
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.hidden = true;
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal && !modal.hidden) {
    modal.hidden = true;
  }
});

const enquiryForm = document.querySelector('#join-form');
const formMessage = document.querySelector('#form-message');

if (enquiryForm && formMessage) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!enquiryForm.checkValidity()) {
      formMessage.textContent = 'Please complete the required fields before sending your enquiry.';
      formMessage.style.color = '#9b111e';
      enquiryForm.reportValidity();
      return;
    }

    formMessage.textContent = 'Thank you. Your enquiry has been received. A member of the Muscle Zone team will contact you soon.';
    formMessage.style.color = '#176b2c';
    enquiryForm.reset();
  });
}
