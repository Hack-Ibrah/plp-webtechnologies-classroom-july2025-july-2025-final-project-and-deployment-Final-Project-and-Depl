// Mobile menu toggle (works for each page menu button)
const toggles = document.querySelectorAll('.menu-toggle');
const navs = document.querySelectorAll('.site-nav');
toggles.forEach((btn,i)=>{
  btn.addEventListener('click', ()=>{
    const nav = navs[i] || document.querySelector('.site-nav');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('show');
  })
});

// Set current year in footer
[...document.querySelectorAll('[id^="year"]')].forEach(el => el.textContent = new Date().getFullYear());

// Gallery lightbox
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbCaption = document.getElementById('lightbox-caption');
const lbClose = document.getElementById('lightbox-close');
if (gallery){
  gallery.addEventListener('click', e=>{
    if (e.target && e.target.matches('.gallery-item')){
      lbImg.src = e.target.src;
      lbCaption.textContent = e.target.alt || '';
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden','false');
    }
  });
  gallery.addEventListener('keydown', e=>{ if (e.key === 'Enter' && e.target.matches('.gallery-item')) e.target.click(); });
}
if (lbClose) lbClose.addEventListener('click', ()=>{ lightbox.style.display='none'; lightbox.setAttribute('aria-hidden','true'); });
lightbox && lightbox.addEventListener('click', (e)=>{ if (e.target === lightbox) { lightbox.style.display='none'; lightbox.setAttribute('aria-hidden','true'); } });

// Contact form validation (simple client-side)
const form = document.getElementById('contact-form');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const msgEl = document.getElementById('form-msg');
    if (name.length < 2){ msgEl.textContent = 'Please enter your name.'; return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ msgEl.textContent = 'Please enter a valid email.'; return; }
    if (message.length < 10){ msgEl.textContent = 'Message should be at least 10 characters.'; return; }
    msgEl.textContent = 'Thanks — your message has been sent (demo).';
    form.reset();
  });
}
// Handle Art Classes form
const classForm = document.getElementById('class-form');
if (classForm) {
  classForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('class-msg').textContent =
      "Thanks for applying! We'll get back to you soon.";
    classForm.reset();
  });
}

// Chat Box
const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');
if (chatForm) {
  chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if (msg) {
      const p = document.createElement('p');
      p.innerHTML = `<strong>You:</strong> ${msg}`;
      chatMessages.appendChild(p);
      input.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Auto reply demo
      setTimeout(() => {
        const reply = document.createElement('p');
        reply.innerHTML = `<strong>Ibra's Art:</strong> Thanks for your message! We'll reply soon.`;
        chatMessages.appendChild(reply);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
    }
  });
}
// ========== FORM VALIDATION ==========
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      const name = form.querySelector("input[name='name']");
      const email = form.querySelector("input[name='email']");
      const phone = form.querySelector("input[name='phone']");

      let errors = [];

      if (!name.value.trim()) {
        errors.push("Name is required.");
      }

      if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        errors.push("Valid email is required.");
      }

      if (!phone.value.trim() || !/^\d+$/.test(phone.value)) {
        errors.push("Valid phone number is required (digits only).");
      }

      if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join("\n"));
      }
    });
  }
});

// ========== SIMPLE CHAT BOX ==========
document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.querySelector("#chat-input");
  const chatButton = document.querySelector("#chat-send");
  const chatMessages = document.querySelector("#chat-messages");

  if (chatInput && chatButton && chatMessages) {
    chatButton.addEventListener("click", () => {
      const message = chatInput.value.trim();
      if (message) {
        const newMessage = document.createElement("p");
        newMessage.textContent = "You: " + message;
        chatMessages.appendChild(newMessage);
        chatInput.value = "";

        // Simple bot response
        setTimeout(() => {
          const botReply = document.createElement("p");
          botReply.textContent = "Bot: Thanks for reaching out! 😊";
          chatMessages.appendChild(botReply);
        }, 1000);
      }
    });
  }
});
form.addEventListener("submit", (event) => {
  event.preventDefault(); // ⛔ stops HTTP request (fixes the 405 error)
  
  // collect the form data
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const continent = document.getElementById("continent").value;
  const artType = document.getElementById("artType").value;

  if (!name || !email || !phone) {
    alert("⚠️ Please fill in all required fields.");
    return;
  }

  // simulate a success response
  alert(`🎉 Thank you ${name}! Your application for ${artType} classes has been received.`);
  form.reset();
});
// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("applicationForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop actual form submission

      // Show success message
      message.textContent = "✅ Thank you! Your application has been submitted successfully.";
      message.style.color = "green";

      // Clear the form after submission
      form.reset();
    });
  }
});
