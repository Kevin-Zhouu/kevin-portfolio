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
import { useEffect, useRef, useState } from 'react';
import WorkExperience from './workexpeirnece';
import config from '~/config.json';
import styles from './home.module.css';

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

      <WorkExperience></WorkExperience>
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Agtuary Evaluation"
        description="As the mobile lead at a VC-backed tech startup, I designed and developed the Agtuary Evaluation App, a cloud-based intelligent solution for agricultural inspections and valuations"
        buttonText="View project"
        buttonLink="https://apps.apple.com/au/app/agtuary-evaluation/id1641840152"
        techstack="React Native, AWS, Postgres, Redux, Figma, TypeScript, Jest, GraphQL"
        impact="Used daily by top ASX-listed companies like Acumentis Group and Commonwealth Bank"
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
        description="I co-led the development of a critical Cloud Native Microservice that enhances developer efficiency by abstracting complex environments. It is designed to ensure scalability and high availability for handling peak insurance claim volumes"
        buttonText="View my story"
        techstack="Springboot, AWS, Java, Kubernetes, Jenkins"
        buttonLink="https://gamestack.hamishw.com"
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
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
