export default function ProfileSection({ person, number }) {
  return (
    <section className="story-section profile-section story-light" id={person.id} aria-labelledby={`${person.id}-title`}>
      <div className="story-inner profile-grid">
        <div className="profile-side story-reveal" data-reveal>
          <p className="eyebrow">{number} / Our leadership Team</p>
          <img className="profile-photo" src={person.photo} alt={`Portrait of ${person.profileName}`} loading="lazy" decoding="async" />
          <h2 id={`${person.id}-title`}>{person.profileName}</h2>
          <p>{person.profileRole}</p>
          <p>{person.profilePhone}</p>
          <a href={`mailto:${person.profileEmail}`}>{person.profileEmail}</a>
        </div>
        <div className="profile-copy story-reveal" data-reveal>
          {person.paragraphs.map((paragraph, index) => (
            <p className={index === 0 ? 'profile-intro' : undefined} key={paragraph}>{paragraph}</p>
          ))}
          <div className="profile-facts">
            <div><span>Background</span><strong>{person.background}</strong></div>
            <div><span>Education</span><strong>{person.education}</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
