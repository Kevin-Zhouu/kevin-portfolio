import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Gramedia',
      role: 'Senior DevOps Engineer',
      period: 'May 2024 - Present',
      location: 'Jakarta, Indonesia',
      responsibilities: [
        'Lead DevOps initiatives and best practices across the organization',
        'Implement and maintain CI/CD pipelines for multiple projects',
        'Optimize cloud infrastructure for cost and performance',
      ],
    },
    {
      company: 'Lion Parcel',
      role: 'Site Reliability Engineer (SRE)',
      period: 'Jan 2021 - May 2024',
      location: 'Jakarta, Indonesia',
      responsibilities: [
        'Provide technical support and assistance to developers, addressing their problems and needs, ensuring smooth development processes.',
        'Utilize JIRA for project management and issue tracking, ensuring efficient collaboration and task management.',
        'Develop and maintain an automated CI/CD pipeline using Jenkins, enabling seamless code deployment for every release.',
        'Create and maintain deployment processes for mobile apps on Android and iOS platforms, ensuring efficient and reliable distribution.',
        'Provision infrastructure, servers, and services using Terraform, enabling scalable and consistent deployment and management.',
        'Set up and monitoring, tracing, and logging tools such as ELK, Grafana, and Datadog, ensuring comprehensive visibility into system performance and issues.',
        'Implement monitoring alerts for services, databases, and logs, reducing the occurrence of errors in production environments.',
        'Manage and monitor a Kubernetes-based container cluster, ensuring high availability with a 99.9% uptime.',
        'Actively manage, improve, and monitor cloud infrastructure services on AWS and GCP, including backups, patches, and scaling.',
      ],
    },
    {
      company: 'Tech Innovators',
      role: 'DevOps Engineer',
      period: 'Jun 2019 - Dec 2020',
      location: 'Surabaya, Indonesia',
      responsibilities: [
        'Implemented containerization strategies using Docker',
        'Managed and optimized AWS cloud infrastructure',
        'Developed automation scripts to streamline deployment processes',
      ],
    },
    {
      company: 'StartUp Dynamo',
      role: 'Junior Systems Administrator',
      period: 'Feb 2018 - May 2019',
      location: 'Bandung, Indonesia',
      responsibilities: [
        'Maintained and troubleshot Linux-based systems',
        'Assisted in implementing backup and disaster recovery solutions',
        'Collaborated with development teams to improve system performance',
      ],
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded-lg shadow">
      <div className="relative pl-12">
        {/* Continuous timeline */}
        <div className="absolute left-[15px] top-0 bottom-0 w-px bg-blue-300"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 last:mb-0 relative">
            {/* Timeline circle */}
            <div className="absolute left-0 w-[30px] h-[30px] bg-white border-4 border-blue-500 rounded-full -ml-[15px] mt-1"></div>
            <div className="ml-8">
              <h2 className="text-xl font-bold text-blue-600">{exp.company}</h2>
              <h3 className="text-lg font-semibold text-gray-800">{exp.role}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Clock size={16} className="mr-2" />
                <span>{exp.period}</span>
              </div>
              {exp.location && (
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin size={16} className="mr-2" />
                  <span>{exp.location}</span>
                </div>
              )}
              {exp.responsibilities.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="mt-1">
                      {resp}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
