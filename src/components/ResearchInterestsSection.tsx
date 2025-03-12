// src/components/ResearchInterestsSection.tsx
import { researchInterests } from '../../content/research-interests';
import ResearchInterestTag from './ResearchInterestTag';
import SectionHeading from './SectionHeading/SectionHeading';

const ResearchInterestsSection = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden" id="research">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="_research_interests"
          subtitle="Areas of technology that I'm particularly interested in exploring"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {researchInterests.map((interest, index) => (
            <ResearchInterestTag key={index} interest={interest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterestsSection;