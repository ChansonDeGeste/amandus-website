import ProfileSection from './ProfileSection.jsx';
import { team } from '../../data/team.js';

export default function LeadershipStory() {
  return (
    <>
      <section className="story-section leadership-intro story-light" id="leadership" aria-labelledby="leadership-title">
        <div className="story-inner">
          <p className="eyebrow story-reveal" data-reveal>08 / The people</p>
          <h2 className="story-display story-reveal" data-reveal id="leadership-title">Our leadership Team</h2>
          <div className="team-grid">
            {team.map((person) => (
              <a className="team-card story-reveal" data-reveal href={`#${person.id}`} key={person.id}>
                <img className="team-photo" src={person.photo} alt={`Portrait of ${person.overviewName}`} loading="lazy" decoding="async" />
                <span className="team-card-info">
                  <span className="team-monogram" aria-hidden="true">{person.initials}</span>
                  <span className="team-name">{person.overviewName}</span>
                  <span className="team-role">{person.overviewRole}</span>
                  <span className="team-contact">{person.overviewPhone}</span>
                  <span className="team-contact">{person.overviewEmail}</span>
                  <span className="team-arrow" aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      {team.map((person, index) => <ProfileSection person={person} number={String(index + 9).padStart(2, '0')} key={person.id} />)}
    </>
  );
}
