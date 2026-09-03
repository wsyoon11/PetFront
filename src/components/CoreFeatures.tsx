import React, { useState } from 'react';
import {
  CreditCard,
  ClipboardList,
  MessageSquareShare,
  CalendarCheck,
  CheckCircle2,
  Shield,
  Clock,
  Sparkles,
  ArrowUpRight,
  Send,
  BellRing,
} from 'lucide-react';
import { CORE_FEATURES } from '../data/content';

export const CoreFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <section id="features" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Core Solution : 핵심 기능 3가지</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.3]">
            1인 펫 전문가가 꼭 필요로 하는
            <br className="hidden sm:inline" />
            <span className="text-amber-600"> 3가지 핵심 엔진에 집중했습니다</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            불필요한 복잡함을 걷어내고, 예약금 결제・사전 문진・알림장 리텐션이라는
            <br className="hidden md:inline" />
            3대 본질에만 집중하여 실질적인 운영 효율을 극대화합니다.
          </p>
        </div>

        {/* Feature Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CORE_FEATURES.map((feat, index) => {
            const shortTitles = ['노쇼 방지 예약금', '펫 맞춤형 문진', '원클릭 알림장'];
            return (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeFeature === index
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-black ${
                  activeFeature === index ? 'bg-amber-500 text-slate-900' : 'bg-slate-200 text-slate-700'
                }`}>
                  {feat.priority}
                </span>
                <span>{shortTitles[index]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Feature Deep Dive Showcase */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Feature Description (Col 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-800 text-xs font-black">
                <span>우선순위 {CORE_FEATURES[activeFeature].priority}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                {CORE_FEATURES[activeFeature].title}
              </h3>

              <p className="text-base sm:text-lg font-semibold text-amber-700">
                {CORE_FEATURES[activeFeature].headline}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {CORE_FEATURES[activeFeature].description}
              </p>

              {/* Key point check list */}
              <div className="space-y-2.5 pt-2">
                {CORE_FEATURES[activeFeature].keyPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Visual Mockup (Col 6) */}
            <div className="lg:col-span-6">
              {activeFeature === 0 && (
                /* Feature 1: No-Show Prevention Deposit UI */
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                      <CreditCard className="w-4 h-4 text-amber-600" />
                      <span>예약금 선납 및 캘린더 동기화 시스템</span>
                    </div>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                      실시간 연동
                    </span>
                  </div>

                  <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-200/50 space-y-2">
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>1:1 방문 행동교정 훈련 코스</span>
                      <span className="font-bold text-slate-800">120,000원</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-slate-900 pt-1 border-t border-amber-200/40">
                      <span className="text-amber-800">노쇼 방지 예약금 (선결제)</span>
                      <span className="text-amber-600 text-base">30,000원</span>
                    </div>
                    <p className="text-[11px] text-slate-500 pt-1">
                      * 예약일 24시간 이전 취소 시 전액 환불 / 당일 노쇼 시 위약금 자동 보호
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                    <div className="border border-slate-200 rounded-lg p-2.5 text-center bg-slate-50">
                      <span className="text-slate-500 block text-[10px]">결제 완료 시점</span>
                      <span className="text-slate-800 font-bold">캘린더 즉시 자동 확정</span>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-2.5 text-center bg-slate-50">
                      <span className="text-slate-500 block text-[10px]">노쇼 방어율</span>
                      <span className="text-emerald-600 font-bold">100% 원천 차단</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900 text-white rounded-xl text-xs flex items-center justify-between">
                    <span>💳 카드 &bull; 카카오페이 &bull; 토스페이 지원</span>
                    <span className="text-amber-400 font-bold">수수료 0% (PG표준)</span>
                  </div>
                </div>
              )}

              {activeFeature === 1 && (
                /* Feature 2: Custom Pet Intake Form UI */
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3.5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                      <ClipboardList className="w-4 h-4 text-amber-600" />
                      <span>펫 맞춤형 사전 문진표 (원클릭 확인)</span>
                    </div>
                    <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                      상담 시간 80% 단축
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
                      <span className="text-slate-500 font-medium">반려견 기본정보</span>
                      <span className="font-bold text-slate-800">초코 (토이푸들, 3세, 4.2kg, 중성화 O)</span>
                    </div>

                    <div className="p-2.5 bg-red-50/70 rounded-lg border border-red-200 space-y-1">
                      <div className="flex justify-between items-center text-red-900 font-bold">
                        <span>⚠️ 입질 및 공격성 주의 여부</span>
                        <span className="bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded">
                          귀 청소 시 입질 주의
                        </span>
                      </div>
                      <p className="text-[11px] text-red-700">
                        보호자 메모: 귀 쪽에 손을 대면 으르렁거리는 경향이 있어 각별한 주의가 필요합니다.
                      </p>
                    </div>

                    <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
                      <span className="text-slate-500 font-medium">짖음 및 분리불안</span>
                      <span className="font-bold text-slate-800">벨소리 반응 심함 / 실외배변 선호</span>
                    </div>

                    <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
                      <span className="text-slate-500 font-medium">기저 질환 및 병력</span>
                      <span className="font-bold text-slate-800">슬개골 탈구 1기 (과격한 점프 금지)</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-1">
                    전문가가 원하는 문진 질문 항목을 자유롭게 추가하고 수정할 수 있습니다.
                  </p>
                </div>
              )}

              {activeFeature === 2 && (
                /* Feature 3: Notification Card & Retention Engine UI */
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                      <MessageSquareShare className="w-4 h-4 text-amber-600" />
                      <span>카카오 알림톡 디지털 알림장 &amp; 리텐션</span>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 font-bold px-2 py-0.5 rounded-full">
                      재방문율 +35%
                    </span>
                  </div>

                  {/* Kakao Talk Card Mockup */}
                  <div className="bg-amber-50/50 border border-amber-200/70 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-yellow-400 flex items-center justify-center text-xs font-bold">
                        💬
                      </div>
                      <span className="text-xs font-bold text-slate-800">[알림톡] 오늘의 훈련 &amp; 케어 리포트</span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs space-y-1.5">
                      <p className="font-bold text-slate-800">초코 보호자님, 오늘 훈련이 잘 마무리되었습니다!</p>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        &bull; 오늘 중점 훈련: 벨소리 둔감화 &amp; 켄넬 안정 교육 성공
                        <br />
                        &bull; 홈트레이닝 과제: 하루 5분 벨 누른 후 간식 투척 3세트
                      </p>
                      <div className="pt-2 flex items-center justify-between text-[11px] text-amber-800 font-semibold border-t border-slate-100">
                        <span>📸 시술 전후 사진 3장 첨부됨</span>
                        <span className="underline">리포트 전체보기 &gt;</span>
                      </div>
                    </div>

                    {/* Auto retention reminder notice */}
                    <div className="bg-slate-900 text-white rounded-lg p-3 text-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BellRing className="w-4 h-4 text-amber-400" />
                        <div>
                          <div className="font-bold text-[11px]">2개월 후 재예약 자동 리마인드</div>
                          <div className="text-[10px] text-slate-300">정기 미용 주기 도래 시 보호자에게 자동 알림</div>
                        </div>
                      </div>
                      <span className="text-amber-400 font-black text-xs">ON</span>
                    </div>
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
