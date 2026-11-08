import StoryPage from './story/StoryPage.jsx';
import '../styles/scroll-canvas.css';

export default function ScrollCanvas() {
  return (
    <main>
      <div className="intro-scroll" aria-hidden="true" />
      <StoryPage />
    </main>
  );
}
