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
        'Implemented a CI/CD pipeline using GitHub Actions, supporting automated deployment to AppStore and Google Play',
        'Actively manage, improve, and monitor cloud infrastructure services on AWS and GCP, including backups, patches, and scaling.',
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
        'Developed and deployed automation scripts with Python, Bash and AWS EC2, enabling real-time monitoring of SSH traffic across over 70,000 IP ranges and 500 critical Linux hosts within the University HPC cluster',
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
        'Provide technical support and assistance to developers, addressing their problems and needs, ensuring smooth development processes.',
        'Manage and monitor a Kubernetes-based container cluster, ensuring high availability with a 99.9% uptime.',
        'Actively manage, improve, and monitor cloud infrastructure services on AWS and GCP, including backups, patches, and scaling.',
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
                  <h2 className={styles.company}>{exp.company}</h2>
                  <h3 className={styles.role}>{exp.role}</h3>
                </div>
              </div>
              <div className={styles.location}>
                <MapPin size={14} />
                <span>{exp.location}</span>
              </div>
              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
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
