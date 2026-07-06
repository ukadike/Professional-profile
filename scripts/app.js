async function renderFeaturedRole() {
  const featured = document.getElementById('featured');
  if (!featured) return;
  try {
    const [career, organizations] = await Promise.all([
      fetch('data/career.json').then(r => r.json()),
      fetch('data/organizations.json').then(r => r.json())
    ]);
    const current = career.find(role => role.end === null);
    if (!current) return;
    const organization = organizations.find(org => org.id === current.organizationId);

    const card = document.createElement('article');
    const heading = document.createElement('h2');
    heading.textContent = current.role;
    const detail = document.createElement('p');
    const orgName = organization ? organization.name : current.organizationId;
    detail.textContent = `${orgName} · ${current.start}–present`;
    card.append(heading, detail);
    featured.append(card);
  } catch {
    // data unavailable; leave section empty
  }
}

renderFeaturedRole();
