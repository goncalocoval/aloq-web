import React from 'react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
}

const teamMembers: TeamMember[] = [
    { id: 1, name: 'John Doe', role: 'Developer', imageUrl: 'path/to/image1.jpg' },
    { id: 2, name: 'Jane Smith', role: 'Designer', imageUrl: 'path/to/image2.jpg' },
    // Add more team members here
];

const Team: React.FC = () => {
    return (
        <div className="team-container">
            {teamMembers.map(member => (
                <div key={member.id} className="team-member">
                    <img src={member.imageUrl} alt={member.name} className="profile-picture" />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Team;