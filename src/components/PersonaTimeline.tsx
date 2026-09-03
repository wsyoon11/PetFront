import React, { useState } from 'react';
import { UserCheck, Clock, CheckCircle, XCircle, ArrowRight, Shield, Award } from 'lucide-react';
import { PERSONA_STORY } from '../data/content';

export const PersonaTimeline: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'both' | 'after' | 'before'>('both');

  return (
    <section id="persona" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
            <UserCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Target Persona Story</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            1인 방문 훈련사 이민수 님(32세)의
            <br />
            <span className="text-amber-600">하루 일과는 어떻게 바뀌었을까요?</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            DM 상담과 노쇼에 갇혀 밤 10시까지 엑셀과 씨름하던 이민수 훈련사님의 실화 기반 페르소나 비교
          </p>
        </div>

        {/* Persona Profile Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 mb-10 shadow-xs">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <img
                src={PERSONA_STORY.profileImg}
                alt={PERSONA_STORY.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-amber-300 shadow-sm"
              />
              <span className="absolute -bottom-2 -right-2 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                경력 5년차
              </span>
            </div>

            <div className="flex-1 text-center md:text-left space-y-2">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <h3 className="text-xl font-bold text-slate-900">{PERSONA_STORY.name} ({PERSONA_STORY.age})</h3>
                <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md">
                  {PERSONA_STORY.role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                &ldquo;몸으로 뛰는 직업인데도 예약 조율, 문진, 결제 독촉, 정산 같은 행정 업무에 하루 2시간 이상을 뺏겼습니다.
                특히 당일 노쇼가 나면 1회 13만 원이 그대로 증발해 멘탈이 흔들렸는데, 펫프론트 도입 후 노쇼율 0%와 정시 퇴근을 되찾았습니다.&rdquo;
              </p>
            </div>

            {/* View filter toggles */}
            <div className="flex sm:flex-col gap-1.5 shrink-0 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setSelectedView('both')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedView === 'both' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                전체 비교 보기
              </button>
              <button
                onClick={() => setSelectedView('after')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedView === 'after' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-500 hover:text-emerald-700'
                }`}
              >
                펫프론트 도입 후 (After)
              </button>
              <button
                onClick={() => setSelectedView('before')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedView === 'before' ? 'bg-red-600 text-white shadow-xs' : 'text-slate-500 hover:text-red-700'
                }`}
              >
                기존 방식 (Before)
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Comparison Cards */}
        <div className="space-y-4">
          {PERSONA_STORY.dailyRoutine.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Timeline Header */}
              <div className="bg-slate-100/70 px-5 py-3 border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-amber-700 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4 text-amber-600" />
                    {item.time}
                  </span>
                  <span className="text-slate-400 text-xs">|</span>
                  <span className="font-bold text-slate-800 text-xs sm:text-sm">{item.activity}</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
                  Step {idx + 1}
                </span>
              </div>

              {/* Comparison Content */}
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Before Box */}
                {(selectedView === 'both' || selectedView === 'before') && (
                  <div className={`p-4 rounded-xl border border-red-200/80 bg-red-50/40 space-y-1.5 ${
                    selectedView === 'before' ? 'col-span-2' : ''
                  }`}>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-red-700">
                      <XCircle className="w-4 h-4 text-red-500" />
                      <span>기존 (Before) : 극심한 병목과 스트레스</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5">
                      {item.before}
                    </p>
                  </div>
                )}

                {/* After Box */}
                {(selectedView === 'both' || selectedView === 'after') && (
                  <div className={`p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-1.5 ${
                    selectedView === 'after' ? 'col-span-2' : ''
                  }`}>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>펫프론트 도입 후 (After) : 100% 자동화 &amp; 노쇼 차단</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed pl-5">
                      {item.after}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
