import { team } from '../../data/team.js';

export default function LeadershipStory() {
  return (
    <>
      <section className="story-section leadership-intro story-light" id="leadership" aria-labelledby="leadership-title">
        <div className="story-inner">
          <p className="eyebrow story-reveal" data-reveal>The People</p>
          <h2 className="story-display story-reveal" data-reveal id="leadership-title">Our Leadership Team</h2>
          <div className="team-grid">
            {team.map((person) => (
              <a className="team-card story-reveal" data-reveal href={`/team/${person.id}/`} aria-label={`Read ${person.overviewName}'s biography`} key={person.id}>
                <img className="team-photo" src={person.photo} alt={`Portrait of ${person.overviewName}`} loading="lazy" decoding="async" />
                <span className="team-card-info">
                  <span className="team-name">{person.overviewName}</span>
                  <span className="team-role">{person.overviewRole}</span>
                  {person.overviewPhone && <span className="team-contact">{person.overviewPhone}</span>}
                  <span className="team-arrow material-symbols-outlined" aria-hidden="true">open_in_new</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
