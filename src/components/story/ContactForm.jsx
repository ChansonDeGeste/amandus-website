export default function ContactForm({ partner = false }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = [
      ['Email', data.get('email')],
      ['First Name', data.get('firstName')],
      ['Last Name', data.get('lastName')],
      ['Phone Number', data.get('phone')],
      ['State', data.get('state')],
      ['Where do you work?', data.get('workplace')],
    ];
    if (partner) fields.unshift(['Which AmPro membership are you interested in?', data.get('membership')]);
    const body = fields.map(([label, value]) => `${label}: ${value || ''}`).join('\n');
    const recipient = partner ? 'charles.beatty@ampro.com' : 'paddy.dalton@ampro.com';
    const subject = partner ? 'AmPro partner application' : 'AmPro request call';
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {partner && (
        <fieldset>
          <legend>Which AmPro membership are you interested in?</legend>
          <label><input type="radio" name="membership" value="Venue member" required /> Venue member</label>
          <label><input type="radio" name="membership" value="Local vendor partner" /> Local vendor partner</label>
          <label><input type="radio" name="membership" value="Brand partner" /> Brand partner</label>
        </fieldset>
      )}
      <label>Email*<input type="email" name="email" autoComplete="email" required /></label>
      <label>First Name*<input type="text" name="firstName" autoComplete="given-name" required /></label>
      <label>Last Name*<input type="text" name="lastName" autoComplete="family-name" required /></label>
      <label>Phone Number*<input type="tel" name="phone" autoComplete="tel" required /></label>
      <label>State<input type="text" name="state" autoComplete="address-level1" /></label>
      <label>Where do you work?*<input type="text" name="workplace" autoComplete="organization" required /></label>
      <button type="submit">Request Call</button>
    </form>
  );
}
