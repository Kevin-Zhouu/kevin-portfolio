import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import styles from './work-experience.module.css';
import suncorpLogo from '~/assets/suncorp-logo.jpg';
import unimelbLogo from '~/assets/unimelb-logo.jpg';
import agtuaryLogo from '~/assets/agtuary-logo.png';
import melodifyLogo from '~/assets/melodify-logo.png';
const WorkExperience = () => {
  const experiences = [
    {
      company: 'Agtuary',
      role: 'Full Stack Software Engineer',
      startDate: 'May 2022',
      endDate: 'Aug 2023',
      location: 'Melbourne, Australia',
      responsibilities: [
        'Led the development of the MVP of a full stack enterprise platform with AWS, React, Figma and React Native',
        'Designed and managed Postgres database with Terraform, and implemented backend API with Nest.js and Docker',
        'Implemented a CI/CD pipeline using GitHub Actions, supporting automated deployment to AppStore and Google Play',
        'Developed and maintained an internal React library of 53 reusable UI components',
      ],
      logoUrl: agtuaryLogo, // Replace with actual path
    },
    {
      company: 'The University of Melbourne',
      role: 'Security Engineer (Intern)',
      startDate: 'Nov 2023',
      endDate: 'Feb 2024',
      location: 'Melbourne, Australia',
      responsibilities: [
        'Wrote and deployed automation scripts with Python, Bash, Linux and AWS EC2 for real-time monitoring of SSH traffic',
      ],
      logoUrl: unimelbLogo, // Replace with actual path
    },
    {
      company: 'Suncorp Group',
      role: 'Platform Engineer (Intern)',
      startDate: 'Nov 2023',
      endDate: 'Feb 2024',
      location: 'Melbourne, Australia',
      responsibilities: [
        'Developed and deployed a scalable cloud native microservice using AWS, Java and Kubernetes',
        'Implemented a CI/CD pipeline with Jenkins, Docker, and Kubernetes',
        'Led development of a developer platform with React.js and TypeScript',
        'Actively manage, improve, and monitor cloud infrastructure services on AWS , including backups, patches, and scaling',
      ],
      logoUrl: suncorpLogo, // Replace with actual path
    },
    {
      company: 'Melodify AI',
      role: 'DevOps and Software Engineer',
      startDate: 'May 2024',
      endDate: 'Present',
      location: 'Melbourne, Australia',
      responsibilities: [
        'Implement and maintain CI/CD pipelines for the projects',
        'Developed and deployed an AI SaaS with AWS Lambda, GPT4 and Next.js',
      ],
      logoUrl: melodifyLogo, // Replace with actual path
    },
  ];

  return (
    <div className={styles.workExperience}>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.dateColumn}>
              <div className={styles.date}>
                <Calendar size={14} />
                <span>
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <img
                  src={exp.logoUrl}
                  alt={`${exp.company} logo`}
                  className={styles.logo}
                />
                <div className={styles.headerText}>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.role}>{exp.role}</span>
                </div>
              </div>
              <div className={styles.location}>
                <MapPin size={14} />
                <span>{exp.location}</span>
              </div>
              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>
                    <p className={styles.responsibilityText}>{resp}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
