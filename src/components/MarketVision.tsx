import React from 'react';
import { Target, TrendingUp, Layers, Compass, Building2, Landmark, CheckCircle2 } from 'lucide-react';

export const MarketVision: React.FC = () => {
  return (
    <section id="vision" className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-bold mb-3 border border-white/10">
            <Compass className="w-3.5 h-3.5" />
            <span>Market &amp; Business Model : 시장과 비전</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.3]">
            5.9조 원 펫 시장의 파편화된 2만 명,
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              {' '}펫 산업 창업자의 가장 확실한 &lsquo;인프라(곡괭이)&rsquo;
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            예약・CRM SaaS 락인을 시작으로 B2B 도매 커머스와 선정산 핀테크까지,
            <br className="hidden md:inline" />
            1인 펫 비즈니스의 평생 파트너로 지속 확장합니다.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1: Target Market */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-amber-400/40 transition-colors space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-xs text-amber-400 font-bold block uppercase">타겟 시장 (SOM)</span>
            <h3 className="text-xl font-bold">5.9조 원 펫 시장 내 2만 명 1인 사업자</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              방문 훈련사, 1인 펫 미용실, 전문 펫시터 등 독자적으로 활동하는 2만여 긱워커를 선점하여 독점적 수직 SaaS 지위를 확보합니다.
            </p>
            <div className="pt-2 border-t border-white/10 flex items-baseline justify-between text-xs">
              <span className="text-slate-400">국내 펫 서비스 시장</span>
              <span className="font-bold text-amber-400 text-sm">5.9조 원 규모</span>
            </div>
          </div>

          {/* Pillar 2: SaaS Lock-in */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-amber-400/40 transition-colors space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-xs text-emerald-400 font-bold block uppercase">수익 모델 (SaaS)</span>
            <h3 className="text-xl font-bold">월 29,000원 정기 구독 &amp; 높은 전환율</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              월 20건 무료 체험으로 초기 진입 장벽을 무너뜨리고, &lsquo;노쇼 1건만 막아도 본전&rsquo;이라는 명확한 ROI로 유료 전환을 극대화합니다.
            </p>
            <div className="pt-2 border-t border-white/10 flex items-baseline justify-between text-xs">
              <span className="text-slate-400">고객 설득 논리</span>
              <span className="font-bold text-emerald-400 text-sm">노쇼 1건으로 5배 회수</span>
            </div>
          </div>

          {/* Pillar 3: Scale-up Expansion */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-amber-400/40 transition-colors space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-xs text-blue-400 font-bold block uppercase">스케일업 전략</span>
            <h3 className="text-xl font-bold">B2B 도매 커머스 &amp; 선정산 핀테크</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              고객 데이터가 쌓인 후 훈련 도구·미용 소모품 공동구매 B2B 도매 커머스와 매출 기반 당일 선정산 핀테크를 연동하여 LTV를 10배 확장합니다.
            </p>
            <div className="pt-2 border-t border-white/10 flex items-baseline justify-between text-xs">
              <span className="text-slate-400">고객 생애 가치</span>
              <span className="font-bold text-blue-400 text-sm">LTV 10배 확장</span>
            </div>
          </div>
        </div>

        {/* Roadmap Steps */}
        <div className="bg-slate-800/60 rounded-3xl p-6 sm:p-8 border border-white/10">
          <h4 className="text-base font-bold text-white mb-6 text-center sm:text-left flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            PetFront의 단계별 스케일업 로드맵
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-1.5">
              <span className="text-[11px] font-bold text-amber-400">Phase 1 : 2026 현재</span>
              <h5 className="font-bold text-sm text-white">올인원 예약・CRM SaaS</h5>
              <p className="text-xs text-slate-400">
                100% 예약금 선납 스케줄러 &amp; 맞춤 문진표로 1인 펫 전문가 2만 명 락인
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-1.5">
              <span className="text-[11px] font-bold text-emerald-400">Phase 2 : 스케일업</span>
              <h5 className="font-bold text-sm text-white">B2B 전용 펫 도매 커머스</h5>
              <p className="text-xs text-slate-400">
                1인 샵을 위한 미용 샴푸, 클리퍼, 훈련 보조 도구 대량 사입 및 최저가 공동구매
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-1.5">
              <span className="text-[11px] font-bold text-blue-400">Phase 3 : 핀테크 완성</span>
              <h5 className="font-bold text-sm text-white">선정산 &amp; 샵 파이낸싱</h5>
              <p className="text-xs text-slate-400">
                예약 데이터를 기반으로 안전한 당일 즉시 선정산 및 1인 창업 자금 마이크로 파이낸싱
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
