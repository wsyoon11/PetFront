import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, AlertCircle, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenConsultation: (reason?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenConsultation }) => {
  const [servicePrice, setServicePrice] = useState<number>(120000);
  const [noShowsPerMonth, setNoShowsPerMonth] = useState<number>(2);
  const [csHoursPerDay, setCsHoursPerDay] = useState<number>(2);

  const monthlyNoShowLoss = servicePrice * noShowsPerMonth;
  const annualNoShowLoss = monthlyNoShowLoss * 12;
  const annualSavedHours = csHoursPerDay * 365;

  const proMonthlyFee = 29000;
  const roiMultiplier = (monthlyNoShowLoss / proMonthlyFee).toFixed(1);
  const annualNetBenefit = annualNoShowLoss - proMonthlyFee * 12;

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>ROI Calculator : 노쇼 방지 및 수익 계산기</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.3]">
            &ldquo;한 달에 노쇼 딱 1건만 방어해도
            <br className="hidden sm:inline" />
            <span className="text-emerald-600"> 월 구독료의 3~5배 이상을 회수합니다&rdquo;</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            원장님의 1회 평균 시술・훈련 단가와 겪고 계신 노쇼 횟수를 입력하고
            <br className="hidden md:inline" />
            실제 지켜낼 수 있는 연간 순수익을 직접 확인해보세요.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Controls Column (Col 6) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              원장님의 현재 비즈니스 현황을 설정해주세요
            </h3>

            {/* Slider 1: 1회 평균 단가 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-700">1회 시술/훈련 평균 단가</span>
                <span className="font-black text-amber-600 text-base">{servicePrice.toLocaleString()}원</span>
              </div>
              <input
                type="range"
                min={50000}
                max={250000}
                step={10000}
                value={servicePrice}
                onChange={(e) => setServicePrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>5만 원 (위생/목욕)</span>
                <span>13만 원 (방문훈련)</span>
                <span>25만 원 (고급 풀코스)</span>
              </div>
            </div>

            {/* Slider 2: 월 평균 노쇼 횟수 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-700">월 평균 노쇼 및 당일 취소 건수</span>
                <span className="font-black text-red-600 text-base">월 {noShowsPerMonth}건</span>
              </div>
              <input
                type="range"
                min={1}
                max={8}
                step={1}
                value={noShowsPerMonth}
                onChange={(e) => setNoShowsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>1건</span>
                <span>3건</span>
                <span>5건</span>
                <span>8건</span>
              </div>
            </div>

            {/* Slider 3: 하루 CS 소요 시간 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-700">하루 DM/카톡 예약 조율에 쓰는 시간</span>
                <span className="font-black text-slate-900 text-base">하루 {csHoursPerDay}시간</span>
              </div>
              <input
                type="range"
                min={1}
                max={5}
                step={0.5}
                value={csHoursPerDay}
                onChange={(e) => setCsHoursPerDay(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>1시간</span>
                <span>2시간 (평균)</span>
                <span>4시간+</span>
              </div>
            </div>
          </div>

          {/* Result Column (Col 6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl" />

              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-400 tracking-wide uppercase">
                  PetFront Pro 도입 예상 회수 효과
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  한 달에 <span className="text-emerald-400">{monthlyNoShowLoss.toLocaleString()}원</span>의 노쇼 손실을 방어합니다
                </h4>
              </div>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                  <span className="text-xs text-slate-300 block mb-1">연간 순 보호 매출</span>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">
                    +{annualNoShowLoss.toLocaleString()}원
                  </div>
                  <span className="text-[10px] text-slate-400">당일 취소 100% 선납 방어</span>
                </div>

                <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                  <span className="text-xs text-slate-300 block mb-1">연간 구출하는 시간</span>
                  <div className="text-xl sm:text-2xl font-black text-amber-400">
                    +{annualSavedHours}시간
                  </div>
                  <span className="text-[10px] text-slate-400">DM 예약 조율・수기 정리 완벽 해방</span>
                </div>
              </div>

              {/* ROI Multiplier Highlight */}
              <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-emerald-200">월 구독료(29,000원) 대비 투자 수익률</div>
                  <div className="text-lg font-black text-white">
                    구독료의 <span className="text-amber-400 text-2xl font-extrabold">{roiMultiplier}배</span> 회수!
                  </div>
                </div>
                <div className="bg-emerald-500 text-slate-950 font-black text-xs px-3 py-1.5 rounded-xl shadow-xs">
                  압도적 ROI
                </div>
              </div>

              {/* CTA Inside Result Box */}
              <button
                onClick={() => onOpenConsultation('ROI 계산기 결과 확인 후')}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>3개월 무료 혜택 받고 노쇼 손실 방어하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
