// src/components/ExtracurricularCard.tsx
import { Extracurricular } from '@/lib/types';

interface ExtracurricularCardProps {
  extracurricular: Extracurricular;
}

const ExtracurricularCard = ({ extracurricular }: ExtracurricularCardProps) => {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden border border-[#1E2D3D] p-6 hover:shadow-lg transition-shadow duration-300 h-full animate-fade-in">
      <h3 className="text-white text-xl font-medium mb-3">{extracurricular.title}</h3>
      <p className="text-primary">{extracurricular.description}</p>
    </div>
  );
};

export default ExtracurricularCard;