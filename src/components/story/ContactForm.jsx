const states = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA'];

export default function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const audience = data.get('audience');
    const fields = [
      ['I am a', audience],
      ['Email', data.get('email')],
      ['First Name', data.get('firstName')],
      ['Last Name', data.get('lastName')],
      ['Phone Number', data.get('phone')],
      ['State', data.get('state')],
      ['Venue or business name', data.get('workplace')],
    ];
    const body = fields.map(([label, value]) => `${label}: ${value || ''}`).join('\n');
    const subject = `Amandus discovery call request: ${audience}`;
    window.location.href = `mailto:beatty222c@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>I'm a:</legend>
        <label><input type="radio" name="audience" value="Venue" required /> Venue</label>
        <label><input type="radio" name="audience" value="Local vendor" /> Local vendor</label>
        <label><input type="radio" name="audience" value="Brand" /> Brand</label>
      </fieldset>
      <label>Email*<input type="email" name="email" autoComplete="email" required /></label>
      <label>First Name*<input type="text" name="firstName" autoComplete="given-name" required /></label>
      <label>Last Name*<input type="text" name="lastName" autoComplete="family-name" required /></label>
      <label>Phone Number*<input type="tel" name="phone" autoComplete="tel" required /></label>
      <label>State or Territory<select name="state" autoComplete="address-level1" defaultValue=""><option value="">Select state</option>{states.map((state) => <option value={state} key={state}>{state}</option>)}</select></label>
      <label>Venue or Business Name*<input type="text" name="workplace" autoComplete="organization" required /></label>
      <button type="submit">Open Email to Send Enquiry</button>
      <p className="form-note">This opens a draft in your email app. Please press Send there to complete your enquiry.</p>
    </form>
  );
}
