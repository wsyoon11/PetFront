import React, { useState } from 'react';
import { Check, Sparkles, Shield, ArrowRight, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface PricingSectionProps {
  onOpenConsultation: (planName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenConsultation }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
            <span>Transparent Pricing : 투명한 요금제</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.3]">
            월 20건 무료로 가볍게 시작하고,
            <br className="hidden sm:inline" />
            <span className="text-amber-600"> 노쇼 1건 방어로 구독료의 3~5배를 회수하세요</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            숨은 수수료나 위약금 없이,
            <br className="hidden md:inline" />
            1인 펫 전문가의 성장에 발맞추는 투명하고 정직한 요금제
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-6 inline-flex items-center gap-3 bg-slate-100 p-1.5 rounded-2xl text-xs font-bold">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-xl transition-all ${
                !isAnnual ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
              }`}
            >
              월 결제
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                isAnnual ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-500'
              }`}
            >
              <span>연 결제</span>
              <span className="bg-amber-200 text-amber-900 text-[10px] font-black px-1.5 py-0.5 rounded-full">
                20% 할인
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Freemium Plan */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-9 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  {PRICING_PLANS[0].badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{PRICING_PLANS[0].name}</h3>
                <p className="text-xs text-slate-500">{PRICING_PLANS[0].description}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">0원</span>
                <span className="text-xs font-bold text-slate-400">/ 평생 무료 (월 20건 한도)</span>
              </div>

              {/* Feature List */}
              <div className="space-y-3 pt-2">
                {PRICING_PLANS[0].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <button
                onClick={() => onOpenConsultation('무료 플랜 시작')}
                className="w-full py-3.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-sm transition-colors"
              >
                월 20건 무료로 시작하기
              </button>
            </div>
          </div>

          {/* Pro Tier Plan (Recommended) */}
          <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl border-2 border-amber-500 p-7 sm:p-9 shadow-xl relative flex flex-col justify-between">
            {/* Top Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs px-4 py-1 rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>가장 많은 원장님의 선택 (추천)</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-md">
                  {PRICING_PLANS[1].badge}
                </span>
                <h3 className="text-xl font-bold text-white">{PRICING_PLANS[1].name}</h3>
                <p className="text-xs text-slate-300">{PRICING_PLANS[1].description}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-amber-400">
                  {isAnnual ? '23,200원' : '29,000원'}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  / 월 {isAnnual ? '(연 결제 기준)' : '(부가세 포함)'}
                </span>
              </div>

              {/* Feature List */}
              <div className="space-y-3 pt-2">
                {PRICING_PLANS[1].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 space-y-3">
              <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center text-xs text-amber-300 font-semibold">
                💡 노쇼 1건(13만 원) 방어 시 5달 구독료 자동 회수!
              </div>

              <button
                onClick={() => onOpenConsultation('프로 플랜 30일 무료 체험')}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                <span>30일 무료 체험 후 시작하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
