import IntroStory from './IntroStory.jsx';
import BenefitsStory from './BenefitsStory.jsx';
import NetworkStory from './NetworkStory.jsx';
import LeadershipStory from './LeadershipStory.jsx';
import ContactStory from './ContactStory.jsx';
import { useStoryMotion } from '../../hooks/useStoryMotion.js';
import '../../styles/story.css';

export default function StoryPage() {
  const storyRef = useStoryMotion();

  return (
    <div className="story-page" ref={storyRef}>
      <IntroStory />
      <BenefitsStory />
      <NetworkStory />
      <LeadershipStory />
      <ContactStory />
    </div>
  );
}
