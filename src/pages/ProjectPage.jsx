import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectCaseStudy from '../components/projects/ProjectCaseStudy';
import { CASE_STUDIES } from '../constants';

const ProjectPage = () => {
  const { slug } = useParams();
  const study = CASE_STUDIES[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) return <Navigate to="/" replace />;

  return (
    <div className="relative z-10">
      <ProjectCaseStudy study={study} />
    </div>
  );
};

export default ProjectPage;
