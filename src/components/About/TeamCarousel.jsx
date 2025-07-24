
export default function TeamCarousel({ teamMembers }) {
  return (
    <div className="team-carousel">
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-photo" />
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}