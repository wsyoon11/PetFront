import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  CreditCard,
  MessageCircle,
  FileText,
  Smartphone,
  Star,
  Zap,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroSectionProps {
  onOpenConsultation: (source?: string) => void;
  onScrollToDemo: () => void;
  onScrollToCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onScrollToDemo,
  onScrollToCalculator,
}) => {
  const [activeTab, setActiveTab] = useState<'client' | 'trainer'>('client');
  const [demoConfirmed, setDemoConfirmed] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-amber-50/60 via-white to-slate-50/50">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-200/25 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
              1인 펫 전문가(미용·훈련·시팅) 전용 예약 &amp; CRM
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-slate-900 leading-[1.25]">
              &ldquo;DM 예약과 노쇼의 늪에서
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
                하루 2시간과 소중한 매출
              </span>
              을 구출합니다&rdquo;
            </h1>

            {/* One-liner Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {COMPANY_INFO.oneLiner}
            </p>

            {/* 3 Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="bg-white/80 backdrop-blur-xs border border-amber-200/60 rounded-xl p-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-1">
                  <CreditCard className="w-4 h-4 text-amber-600" />
                  <span>100% 예약금 선납</span>
                </div>
                <p className="text-xs text-slate-500">당일 노쇼 발생 시 10~15만 원 전액 보호</p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs border border-amber-200/60 rounded-xl p-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-1">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span>펫 맞춤 사전 문진</span>
                </div>
                <p className="text-xs text-slate-500">입질·병력 사전 파악으로 상담 시간 80% 단축</p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs border border-amber-200/60 rounded-xl p-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-1">
                  <MessageCircle className="w-4 h-4 text-amber-600" />
                  <span>원클릭 알림장</span>
                </div>
                <p className="text-xs text-slate-500">시술 후 알림톡 &amp; 2~3개월 뒤 재예약 자동 유도</p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={() => onOpenConsultation('히어로 메인 CTA')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-base shadow-lg shadow-amber-600/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>3분 만에 무료 예약 링크 만들기</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToDemo}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white border border-slate-300 hover:border-amber-400 hover:bg-amber-50/50 text-slate-700 hover:text-amber-800 font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-amber-600" />
                <span>실제 예약 화면 체험하기</span>
              </button>
            </div>

            {/* Social Proof / ROI Quote */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-700">&ldquo;한 달에 노쇼 딱 1건만 방어해도 구독료의 3~5배를 뽑습니다&rdquo;</span>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-white rounded-3xl p-3 border-4 border-slate-800 shadow-2xl shadow-slate-900/15 relative">
              {/* Phone Speaker Notch */}
              <div className="w-28 h-4 bg-slate-800 rounded-b-xl mx-auto -mt-3 mb-2 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* View Switcher inside phone */}
              <div className="flex bg-slate-100 p-1 rounded-xl mb-3 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('client')}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${
                    activeTab === 'client'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  고객 예약창 (인스타 링크)
                </button>
                <button
                  onClick={() => setActiveTab('trainer')}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${
                    activeTab === 'trainer'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  전문가 CRM 화면
                </button>
              </div>

              {/* Screen Content */}
              {activeTab === 'client' ? (
                <div className="space-y-3 text-left">
                  {/* Shop Profile Header */}
                  <div className="flex items-center gap-3 p-2.5 bg-amber-50/70 border border-amber-200/50 rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=120&q=80"
                      alt="이민수 훈련사"
                      className="w-11 h-11 rounded-full object-cover border border-amber-300"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-xs text-slate-900">이민수 반려견 행동클리닉</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-50" />
                      </div>
                      <p className="text-[11px] text-slate-500">방문 훈련 &bull; 행동교정 &bull; 천안/아산 전지역</p>
                    </div>
                  </div>

                  {/* Booking Step Simulator */}
                  <div className="border border-slate-200 rounded-xl p-3 bg-slate-50/50 space-y-2.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-700">선택 코스: 맞춤 1:1 방문 훈련</span>
                      <span className="font-bold text-amber-600">130,000원</span>
                    </div>

                    <div className="text-[11px] bg-white p-2 rounded-lg border border-slate-200 space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        <span>2026년 9월 6일(일) 오후 2:00</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>소요시간 90분 (단독 방문)</span>
                      </div>
                    </div>

                    {/* Pre-intake questionnaire pill */}
                    <div className="bg-amber-100/70 border border-amber-200 rounded-lg p-2 text-[11px] space-y-0.5">
                      <span className="font-bold text-amber-900">📋 필수 문진표 작성 완료</span>
                      <p className="text-amber-800 text-[10px]">
                        푸들(4세/6kg) &bull; 낯선 사람 입질 약간 있음 &bull; 벨소리 짖음
                      </p>
                    </div>

                    {/* Deposit info */}
                    <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-xs">
                      <span className="text-slate-600">선납 예약금 (노쇼 방지)</span>
                      <span className="font-bold text-slate-900">30,000원</span>
                    </div>

                    {demoConfirmed ? (
                      <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-lg p-2.5 text-center text-xs font-bold animate-in fade-in">
                        🎉 예약 및 결제 완료! 캘린더에 동기화되었습니다.
                      </div>
                    ) : (
                      <button
                        onClick={() => setDemoConfirmed(true)}
                        className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Zap className="w-3.5 h-3.5 fill-current" />
                        예약금 결제하고 확정하기 (모의 클릭)
                      </button>
                    )}
                  </div>
                  <p className="text-[10px] text-center text-slate-400">
                    인스타 프로필 링크를 누르면 위 화면이 바로 열립니다
                  </p>
                </div>
              ) : (
                /* Trainer CRM View */
                <div className="space-y-2.5 text-left">
                  <div className="bg-slate-900 text-white p-3 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] text-slate-300">오늘의 일정 (4건 확정)</span>
                      <span className="text-[10px] bg-emerald-500 text-white font-bold px-1.5 py-0.5 rounded-full">
                        노쇼 0건
                      </span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-xl font-bold">520,000원</span>
                      <span className="text-[11px] text-emerald-400">예약금 전액 안전 확보</span>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-2.5 space-y-2 bg-slate-50">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800">14:00 김*정 견주 (초코)</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                        예약금 입금완료
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 bg-white p-1.5 rounded-md border border-slate-100">
                      ⚠️ <strong>사전 문진 메모:</strong> 배달원 벨소리 흥분 심함. 낯선 사람 접근 시 간식 유도 필요.
                    </p>
                    <div className="flex gap-1.5 pt-1">
                      <button
                        onClick={onScrollToDemo}
                        className="flex-1 py-1.5 bg-slate-800 text-white text-[11px] font-bold rounded-md hover:bg-slate-700 transition-colors"
                      >
                        문진표 상세
                      </button>
                      <button
                        onClick={onScrollToDemo}
                        className="flex-1 py-1.5 bg-amber-600 text-white text-[11px] font-bold rounded-md hover:bg-amber-700 transition-colors"
                      >
                        알림장 전송
                      </button>
                    </div>
                  </div>

                  <div className="p-2 bg-amber-50 rounded-lg border border-amber-200/60 text-[11px] text-amber-900 flex items-center justify-between">
                    <span>💡 이번 달 노쇼 방어액</span>
                    <strong className="text-amber-700 font-bold">390,000원 (3건)</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
