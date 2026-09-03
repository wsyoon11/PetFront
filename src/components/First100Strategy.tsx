import React from 'react';
import { Instagram, Briefcase, GraduationCap, ArrowRight, Users, CheckCircle } from 'lucide-react';
import { GTM_CHANNELS } from '../data/content';

interface First100StrategyProps {
  onOpenConsultation: (channel?: string) => void;
}

export const First100Strategy: React.FC<First100StrategyProps> = ({ onOpenConsultation }) => {
  const icons = [Instagram, Briefcase, GraduationCap];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>Go-To-Market : 첫 100명 고객 확보 채널 3가지</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            가장 빠르게 1인 펫 전문가를 만나고,
            <br />
            <span className="text-amber-600">진짜 단골로 만드는 3대 침투 전략</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            책상 위 마케팅이 아닌, 인스타 DM・긱 플랫폼 수수료・전문 학원 현장으로 직접 찾아갑니다.
          </p>
        </div>

        {/* 3 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {GTM_CHANNELS.map((ch, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md">
                      {ch.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {ch.title}
                  </h3>

                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs space-y-0.5">
                    <span className="font-bold text-slate-500 block">공략 대상</span>
                    <p className="text-slate-800 font-semibold">{ch.target}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ch.action}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenConsultation(`${ch.title} 제휴 및 프로모션`)}
                    className="w-full py-2.5 text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100/70 rounded-xl transition-colors flex items-center justify-center gap-1"
                  >
                    <span>제휴 및 프로모션 신청</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
