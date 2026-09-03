import React from 'react';
import { AlertTriangle, Clock, Ban, Database, MessageSquareWarning, XCircle } from 'lucide-react';
import { PROBLEMS } from '../data/content';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold tracking-wide mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Problem : 펫 긱워커의 치명적 병목</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            몸이 열 개라도 부족한 1인 펫 전문가,
            <br />
            <span className="text-red-600">왜 하루 2시간과 매출을 길바닥에 버릴까요?</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            반려동물을 돌보는 시간보다, 인스타그램 DM 답장과 노쇼 뒤처리 등 비효율적인 수기 행정에 쏟는 에너지가 더 큽니다.
          </p>
        </div>

        {/* 3 Core Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Problem 1 */}
          <div className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200/80 hover:border-red-200 hover:bg-red-50/20 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-red-100 text-red-800">
                  {PROBLEMS[0].badge}
                </span>
                <Clock className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {PROBLEMS[0].title}
              </h3>
              <p className="text-sm font-semibold text-red-600 mb-3">
                {PROBLEMS[0].subtitle}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {PROBLEMS[0].description}
              </p>
            </div>

            {/* Metric Footer */}
            <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-baseline justify-between">
              <span className="text-xs text-slate-500">{PROBLEMS[0].statLabel}</span>
              <span className="text-lg font-black text-slate-900">{PROBLEMS[0].stat}</span>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200/80 hover:border-red-200 hover:bg-red-50/20 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-red-100 text-red-800">
                  {PROBLEMS[1].badge}
                </span>
                <Ban className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {PROBLEMS[1].title}
              </h3>
              <p className="text-sm font-semibold text-red-600 mb-3">
                {PROBLEMS[1].subtitle}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {PROBLEMS[1].description}
              </p>
            </div>

            {/* Metric Footer */}
            <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-baseline justify-between">
              <span className="text-xs text-slate-500">{PROBLEMS[1].statLabel}</span>
              <span className="text-lg font-black text-red-600">{PROBLEMS[1].stat}</span>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200/80 hover:border-red-200 hover:bg-red-50/20 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-red-100 text-red-800">
                  {PROBLEMS[2].badge}
                </span>
                <Database className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {PROBLEMS[2].title}
              </h3>
              <p className="text-sm font-semibold text-red-600 mb-3">
                {PROBLEMS[2].subtitle}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {PROBLEMS[2].description}
              </p>
            </div>

            {/* Metric Footer */}
            <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-baseline justify-between">
              <span className="text-xs text-slate-500">{PROBLEMS[2].statLabel}</span>
              <span className="text-lg font-black text-slate-900">{PROBLEMS[2].stat}</span>
            </div>
          </div>
        </div>

        {/* Real Quotes Banner */}
        <div className="mt-10 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
              <MessageSquareWarning className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-400 mb-1">현장의 생생한 목소리</div>
              <p className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">
                &ldquo;운전하고 가위질하느라 DM 확인이 1시간만 늦어도 고객은 다른 곳으로 가버리고, 도착 30분 전에 당일 취소 통보받으면 그날 오후 매출 15만 원이 증발합니다. 이게 일주일만 쌓여도 월세가 날아갑니다.&rdquo;
              </p>
            </div>
          </div>
          <div className="shrink-0 text-right text-xs text-slate-400">
            <span className="text-slate-300 font-semibold block">천안/수도권 1인 펫 훈련사 &bull; 미용사 인터뷰</span>
            <span>2026 펫프론트 현장 심층 설문조사</span>
          </div>
        </div>
      </div>
    </section>
  );
};
