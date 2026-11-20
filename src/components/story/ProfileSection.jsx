export default function ProfileSection({ person }) {
  return (
    <section className="story-section profile-section story-light" id={person.id} aria-labelledby={`${person.id}-title`}>
      <div className="story-inner profile-grid">
        <div className="profile-side story-reveal" data-reveal>
          <a className="profile-back" href="/#leadership" data-back-to-team><span className="material-symbols-outlined" aria-hidden="true">back_to_tab</span>Back to team</a>
          <p className="eyebrow">Our Leadership Team</p>
          <img className="profile-photo" src={person.photo} alt={`Portrait of ${person.profileName}`} loading="lazy" decoding="async" />
          <h2 id={`${person.id}-title`}>{person.profileName}</h2>
          <p>{person.profileRole}</p>
          {person.profilePhone && <p><a href={`tel:${person.profilePhone.replace(/\s/g, '')}`}>{person.profilePhone}</a></p>}
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
