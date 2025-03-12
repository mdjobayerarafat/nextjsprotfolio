// src/components/ExtracurricularsSection.tsx
import { extracurriculars } from '../../content/extracurriculars';
import ExtracurricularCard from './ExtracurricularCard';
import SectionHeading from './SectionHeading/SectionHeading';

const ExtracurricularsSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden" id="extracurriculars">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="_extracurriculars"
          subtitle="Activities and organizations I'm involved with outside of my technical work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {extracurriculars.map((extracurricular, index) => (
            <ExtracurricularCard key={index} extracurricular={extracurricular} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularsSection;