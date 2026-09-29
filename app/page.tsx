export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <header className="hero">
        <h1>Claudia Mena Rieke</h1>
        <p className="tagline">
          a senior at UH Manoa studying Management Information Systems
        </p>
      </header>

      <main>
        <section aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>
            I&apos;m a senior at UH Manoa, studying
            Management Information Systems. I&apos;m interested in the space
            where business and technology meet, and in how information systems
            help organizations work better. As I finish my degree, I&apos;m
            looking for ways to put that interest into practice.
          </p>
        </section>

        <section aria-labelledby="semester-heading">
          <h2 id="semester-heading">This semester</h2>
          <ul>
            <li>I&apos;m working on my MIS capstone project with a small team.</li>
            <li>I&apos;m taking a course in database design and management.</li>
            <li>I&apos;m applying for full-time roles to start after graduation.</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© Claudia Mena Rieke {year}</p>
      </footer>
    </div>
  );
}
