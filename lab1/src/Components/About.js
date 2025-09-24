import React from 'react';

const bullet = (
    <span style={{
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#4169E1",
        marginRight: "12px",
        verticalAlign: "middle",
        boxShadow: "0 2px 6px rgba(65,105,225,0.15)"
    }}></span>
);

const About = () => {
    const students = [
        { name: 'Arthur Regondola', age: 21 },
        { name: 'Francis Reyes', age: 22 },
        { name: 'Aaron Sagan', age: 21 },
        { name: 'Khen Valencia', age: 21 },
        { name: 'Mico Valencia', age: 21 },
        { name: 'Chris Velitario', age: 22 },
        { name: 'Roel Villadiego', age: 22 },
        { name: 'Chester Yalong', age: 22 },
    ];

    return (
        <div id="about" style={{
            padding: '40px 0',
            background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
            minHeight: '100vh'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#4169E1',
                marginBottom: '30px',
                fontWeight: 'bold',
                letterSpacing: '2px',
                fontSize: '2.4em',
                textShadow: '0 2px 8px #cfdef3'
            }}>
                About Us
            </h1>
            <div
                className="student-container"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '32px',
                    justifyItems: 'center',
                    alignItems: 'center',
                    maxWidth: '1300px',
                    margin: '0 auto'
                }}
            >
                {students.map((student, index) => (
                    <div
                        key={index}
                        className="student-details"
                        style={{
                            boxShadow: '0 8px 24px rgba(65,105,225,0.10)',
                            border: 'none',
                            width: '240px',
                            height: '240px',
                            padding: '24px',
                            borderRadius: '18px',
                            background: 'linear-gradient(120deg, #f8fafc 70%, #e0eafc 100%)',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            textAlign: 'left',
                            fontSize: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            position: 'relative'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.06)';
                            e.currentTarget.style.boxShadow = '0 12px 32px rgba(65,105,225,0.18)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(65,105,225,0.10)';
                        }}
                    >
                        <div style={{
                            marginBottom: '16px',
                            paddingBottom: '8px',
                            borderBottom: '1px solid #e0eafc',
                            width: '100%'
                        }}>
                            <p style={{
                                fontWeight: 'bold',
                                color: "#4169E1",
                                fontSize: '1.15em',
                                letterSpacing: '1px',
                                margin: 0,
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                {bullet} <span style={{ marginLeft: '4px' }}>{student.name}</span>
                            </p>
                        </div>
                        <div style={{ width: '100%' }}>
                            <p style={{
                                marginBottom: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '1em',
                                fontWeight: 'normal',
                                color: "#444"
                            }}>
                                {bullet} Age: <span style={{ marginLeft: '6px', color: "#222" }}>{student.age}</span>
                            </p>
                            <p style={{
                                marginBottom: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '1em',
                                fontWeight: 'normal',
                                color: "#444"
                            }}>
                                {bullet} Program: <span style={{ marginLeft: '6px', color: "#222" }}>BSIT</span>
                            </p>
                            <p style={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '1em',
                                fontWeight: 'normal',
                                color: "#444"
                            }}>
                                {bullet} Year: <span style={{ marginLeft: '6px', color: "#222" }}>4th</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;