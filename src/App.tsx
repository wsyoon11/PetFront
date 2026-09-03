import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { PersonaTimeline } from './components/PersonaTimeline';
import { CoreFeatures } from './components/CoreFeatures';
import { InteractiveDemo } from './components/InteractiveDemo';
import { RoiCalculator } from './components/RoiCalculator';
import { EaseOfUseSection } from './components/EaseOfUseSection';
import { PricingSection } from './components/PricingSection';
import { MarketVision } from './components/MarketVision';
import { First100Strategy } from './components/First100Strategy';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIntent, setModalIntent] = useState<string | undefined>();

  const handleOpenConsultation = (intent?: string) => {
    setModalIntent(intent);
    setModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* Sticky Header */}
      <Header
        onOpenConsultation={handleOpenConsultation}
        onScrollToDemo={() => handleScrollToSection('demo')}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenConsultation={handleOpenConsultation}
          onScrollToDemo={() => handleScrollToSection('demo')}
          onScrollToCalculator={() => handleScrollToSection('calculator')}
        />

        {/* 2. Problem Section (펫 긱워커의 치명적 병목 3가지) */}
        <ProblemSection />

        {/* 3. Persona Story (32세 1인 방문 훈련사 이민수의 하루 Before vs After) */}
        <PersonaTimeline />

        {/* 4. Core Features (핵심 기능 3가지 우선순위별) */}
        <CoreFeatures />

        {/* 5. Live Interactive Demo (고객 예약 & 맞춤문진 & CRM & 알림장 체험) */}
        <InteractiveDemo />

        {/* 6. ROI Calculator (노쇼 방지 수익 및 절약 시간 계산기) */}
        <RoiCalculator onOpenConsultation={handleOpenConsultation} />

        {/* 7. Ease of Use (낮은 IT 리터러시 극복 및 1:1 무료 세팅 컨시어지) */}
        <EaseOfUseSection onOpenConsultation={handleOpenConsultation} />

        {/* 8. Pricing Section (Freemium 0원 vs Pro 29,000원) */}
        <PricingSection onOpenConsultation={handleOpenConsultation} />

        {/* 9. Market & Scale-up Vision (5.9조 펫 시장, B2B 도매 & 핀테크) */}
        <MarketVision />

        {/* 10. Go-To-Market First 100 Strategy (인스타 아웃바운드, 숨고/크몽, 아카데미) */}
        <First100Strategy onOpenConsultation={handleOpenConsultation} />

        {/* 11. FAQ Section */}
        <FaqSection />
      </main>

      {/* Official Company Footer */}
      <Footer />

      {/* Interactive Consultation / Free Trial Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialSource={modalIntent}
      />
    </div>
  );
}
