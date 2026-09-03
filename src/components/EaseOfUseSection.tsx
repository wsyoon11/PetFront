import React from 'react';
import { Smartphone, Headphones, Gift, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface EaseOfUseSectionProps {
  onOpenConsultation: (intent?: string) => void;
}

export const EaseOfUseSection: React.FC<EaseOfUseSectionProps> = ({ onOpenConsultation }) => {
  const points = [
    {
      icon: Smartphone,
      title: '앱 설치 제로, 3분 세팅 완료',
      desc: '복잡한 PC 프로그램이나 무거운 어플을 깔 필요가 없습니다. 모바일에서 카카오톡 하듯 링크 하나만 인스타 프로필에 걸면 즉시 세팅이 끝납니다.',
      badge: '학습 비용 0원',
    },
    {
      icon: Headphones,
      title: '1:1 전담 매니저 무료 세팅 대행',
      desc: '기계 조작이 서툰 어르신 원장님도 괜찮습니다. 기존 인스타 계정과 가격표, 휴무일만 알려주시면 펫프론트 매니저가 1:1로 직접 링크를 만들어 드립니다.',
      badge: '화이트글러브 온보딩',
    },
    {
      icon: Gift,
      title: '초기 지불 저항감 없는 무료 플랜',
      desc: '월 20건까지 평생 무료! 시스템의 편리함을 충분히 경험하고 노쇼 방지 효과를 눈으로 직접 확인하신 후에 유료 전환하셔도 충분합니다.',
      badge: '월 20건 평생 0원',
    },
    {
      icon: ShieldCheck,
      title: '고정비가 아닌 "월 30만 원"을 지켜주는 방패',
      desc: '월 29,000원은 단순 지출이 아닙니다. 한 달에 노쇼 딱 1건(12~15만 원)만 막아도 구독료의 수배 이상이 내 통장에 그대로 남습니다.',
      badge: '압도적 회수율',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>IT가 낯선 1인 원장님을 위한 배려</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            &ldquo;컴퓨터를 잘 모르고 수기 장부가 익숙한데,
            <br />
            <span className="text-amber-600">제가 정말 혼자 쓸 수 있을까요?&rdquo;</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            새로운 시스템을 배우는 피로감과 월 비용 부담을 0으로 만들기 위해, 펫프론트는 처음부터 다르게 설계되었습니다.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md">
                      {pt.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>설정 부담 100% 해소</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Setup Concierge Box */}
        <div className="mt-12 bg-amber-500 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-amber-500/20">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-black bg-white/20 px-2.5 py-1 rounded-full uppercase">
              1:1 무료 세팅 컨시어지
            </span>
            <h4 className="text-xl sm:text-2xl font-black">
              &ldquo;바쁘신 원장님은 시술과 훈련에만 집중하세요.&rdquo;
            </h4>
            <p className="text-xs sm:text-sm text-amber-100 max-w-xl">
              원하시는 예약 질문과 가격표만 전달해주시면 펫프론트 팀이 24시간 내에 완성된 예약 링크를 카톡으로 보내드립니다.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('1:1 무료 세팅 컨시어지 배너')}
            className="shrink-0 px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all"
          >
            1:1 무료 링크 세팅 신청하기
          </button>
        </div>
      </div>
    </section>
  );
};
