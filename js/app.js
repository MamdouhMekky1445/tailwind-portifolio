const btn = document.getElementById("navToggle");
const menu = document.getElementById("mobileMenu");
const iconBars = document.getElementById("iconBars");
const iconClose = document.getElementById("iconClose");

btn.addEventListener("click", () => {
  const nowHidden = menu.classList.toggle("hidden"); // returns true if hidden after toggle
  const open = !nowHidden;
  btn.setAttribute("aria-expanded", String(open));
  iconBars.classList.toggle("hidden", open);
  iconClose.classList.toggle("hidden", !open);
});

const testimonials = [
  {
    title: "Mobile App Development",
    description:
      "I had the pleasure of working with Lily on a critical web development project, and I can confidently say that their expertise and professionalism exceeded my expectations.",
    name: "Michael - Technical Manager",
    position: "Marketing @ APPLE INC.",
    image: "./images/imgi_12_avatar1.jpg",
  },
  {
    title: "Website Redesign",
    description:
      "Lily revamped our entire online presence with elegance and functionality. We’ve seen a 40% increase in user engagement since launch.",
    name: "Sarah - Project Lead",
    position: "Design @ NETFLIX",
    image: "./images/imgi_13_avatar2.jpg",
  },
  {
    title: "Custom API Integration",
    description:
      "Her work on our backend systems was brilliant. Communication was clear, deadlines were met, and the quality was spot on.",
    name: "James - Senior Dev",
    position: "Tech @ AMAZON",
    image: "./images/imgi_14_avatar3.jpg",
  },
];

function setTestimonial(index) {
  const testimonial = testimonials[index];
  document.getElementById("testimonialTitle").textContent = testimonial.title;
  document.getElementById("testimonialDescription").textContent =
    testimonial.description;
  document.getElementById("testimonialName").textContent = testimonial.name;
  document.getElementById("testimonialPosition").textContent =
    testimonial.position;
  document.getElementById("testimonialImage").src = testimonial.image;

  // update thumbnail highlighting
  testimonials.forEach((_, i) => {
    const thumb = document.getElementById(`thumb-${i}`);
    if (i === index) {
      thumb.classList.remove("opacity-50");
      thumb.classList.add("border-2", "border-black-500");
    } else {
      thumb.classList.remove("border-2", "border-black-500");
      thumb.classList.add("opacity-50");
    }
  });
}
