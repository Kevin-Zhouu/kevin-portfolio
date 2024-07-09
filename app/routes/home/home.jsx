import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import agtuary1 from '~/assets/agtuary_evaluation_1.jpg';
import agtuary2 from '~/assets/agtuary_evaluation_2.jpg';
import suncorpMicroservice from '~/assets/policy-generator-microservice.jpg';
import melodify from '~/assets/melodify.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { Heading } from '~/components/heading';
import { Button } from '~/components/button';
import { Section } from '~/components/section';
import { useEffect, useRef, useState } from 'react';
import WorkExperience from './workexpeirnece';
import config from '~/config.json';
import styles from './home.module.css';
import Social from './social';

import reactIcon from '~/assets/tech-stack/react.png';
import reactNativeIcon from '~/assets/tech-stack/react-native.svg';
import typescriptIcon from '~/assets/tech-stack/typescript.png';
import javaScriptIcon from '~/assets/tech-stack/javascript.png';
import kubernetesIcon from '~/assets/tech-stack/kubernetes.png';
import figmaIcon from '~/assets/tech-stack/figma.png';
import springbootIcon from '~/assets/tech-stack/springboot.png';
import awsIcon from '~/assets/tech-stack/aws.png';
import postgresIcon from '~/assets/tech-stack/postgres.png';
import dockerIcon from '~/assets/tech-stack/docker.png';
import jenkinsIcon from '~/assets/tech-stack/jenkins.png';
import { IconButton } from '~/components/iconButton/iconButton';

import { Link as RouterLink, useLocation } from '@remix-run/react';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <ProjectSectionContent>
        <ProjectTextRow center>
          <ProjectSectionHeading>My Work Experience</ProjectSectionHeading>
        </ProjectTextRow>
      </ProjectSectionContent>
      {/* <Section>
        <Heading as="h4" level={4}>
          Work Experience
        </Heading>
      </Section> */}
      <div className={styles.sectionTitle}></div>
      <WorkExperience></WorkExperience>
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Agtuary Evaluation"
        description="A cloud-based property valuation mobile platform designed for agricultural assessments"
        buttonText="AppStore"
        buttonLink="https://apps.apple.com/au/app/agtuary-evaluation/id1641840152"
        techstack={
          <>
            <br></br>
            Frontend: React Native, Redux, Google Maps SDK <br></br>Backend: Nest.js, AWS
            EC2, AWS S3, Postgres, Jest
          </>
        }
        techstackIcons={
          <>
            <IconButton file={reactNativeIcon} />
            <IconButton file={awsIcon} />
            <IconButton file={typescriptIcon} />
            <IconButton file={figmaIcon} />
            <IconButton file={postgresIcon} />
          </>
        }
        impact={
          <>
            Managing over $20M worth of assets<br></br>
            Used daily by top ASX-listed companies like <b>Acumentis Group</b>
          </>
        }
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${agtuary2} 375w, ${agtuary2} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
            {
              srcSet: `${agtuary1} 375w, ${agtuary1} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Suncorp Policy Generation Microservice"
        description={
          <>
            A Cloud Native Microservice provides insurance policy generation service for
            one of the largest fintech companies in Australia. Supported Suncorp's brands
            including <b>AAMI</b>, <b>GIO</b>, <b>Bingle</b>, and <b>Suncorp Insurance</b>{' '}
            It is running in production since Febuary 2024
          </>
        }
        buttonText="View my story"
        techstack="Springboot, Java, Kubernetes, Jenkins, Docker, AWS"
        techstackIcons={
          <>
            <IconButton file={springbootIcon} />
            <IconButton file={awsIcon} />
            <IconButton file={kubernetesIcon} />
            <IconButton file={jenkinsIcon} />
            <IconButton file={dockerIcon} />
          </>
        }
        buttonLink="https://github.com/Kevin-Zhouu/Suncorp-Insurance-Policy-Generator"
        impact="Deployed to production and used daily by nearly all engineering teams across Suncorp"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${suncorpMicroservice} 1280w, ${suncorpMicroservice} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Melodify AI"
        description="A Generative AI SaaS that creates music from your PDF documents and lecture slides!"
        techstack="AWS Lambda, GPT4, Next.js, TypeScript, Tailwind CSS, Vercel"
        impact="Achieving 500 monthly active users"
        buttonText="View project"
        buttonLink="https://melodifyai.com"
        model={{
          type: 'laptop',
          alt: 'Melodify: AI music generator',
          textures: [
            {
              srcSet: `${melodify} 800w, ${melodify} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
