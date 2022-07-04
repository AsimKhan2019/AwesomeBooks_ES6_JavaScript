export default class Navigation {
  static hideAllSections() {
    const sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i += 1) {
      if (!sections[i].classList.contains('hidden')) {
        sections[i].classList.add('hidden');
      }
    }
  }

  static showSection(section) {
    const s = document.querySelector(section);
    Navigation.hideAllSections();
    s.classList.remove('hidden');
  }
}
