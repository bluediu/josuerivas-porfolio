import { useEffect, useRef } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

type ButtonType = HTMLElement | null;

function App() {
  const themeBtn = useRef<ButtonType>(null);

  const darkTheme = 'dark-theme';
  const iconTheme = 'ri-sun-line';

  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme)
      ? 'dark'
      : 'light';

  const getCurrentIcon = () =>
    themeBtn?.current &&
    themeBtn.current.classList.contains(iconTheme)
      ? 'ri-moon-line'
      : 'ri-sun-line';

  useEffect(() => {
    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[
        selectedTheme === 'dark' ? 'add' : 'remove'
      ](darkTheme);
      themeBtn.current &&
        themeBtn.current.classList[
          selectedIcon === 'ri-moon-line' ? 'add' : 'remove'
        ](iconTheme);
    }
  }, []);

  const handleChangeTheme = () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  };

  return (
    <>
      <Header
        themeBtn={themeBtn}
        changeTheme={handleChangeTheme}
      />
      <Main />
      <Footer />
    </>
  );
}

export default App;
