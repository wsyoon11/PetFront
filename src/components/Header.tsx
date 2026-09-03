import React, { useState } from 'react';
import { Sparkles, Calendar, Menu, X, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeaderProps {
  onOpenConsultation: (intent?: string) => void;
  onScrollToDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onScrollToDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: '치명적 병목', href: '#problem' },
    { name: '1인 전문가의 하루', href: '#persona' },
    { name: '핵심 기능 3가지', href: '#features' },
    { name: '직접 체험하기', href: '#demo' },
    { name: '노쇼 손실 계산기', href: '#calculator' },
    { name: '요금 안내', href: '#pricing' },
    { name: '사업 비전', href: '#vision' },
    { name: '자주 묻는 질문', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* Top Promotion Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white px-4 py-2 text-xs md:text-sm font-medium text-center flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold">
          <Sparkles className="w-3.5 h-3.5" /> 런칭 프로모션
        </span>
        <span>지금 신청 시 Pro 플랜 3개월 무료 + 1:1 전담 예약 링크 무료 세팅 지원!</span>
        <button
          onClick={() => onOpenConsultation('상단 배너 3개월 무료 혜택 신청')}
          className="hidden sm:inline-flex items-center gap-0.5 underline font-bold ml-1 hover:text-amber-100 transition-colors"
        >
          신청하기 <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <span className="font-black text-xl tracking-tighter">P</span>
              <span className="text-amber-200 text-xs font-bold">🐾</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  Pet<span className="text-amber-600">Front</span>
                </span>
                <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-md">
                  1인 펫 CRM
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                DM 예약 & 노쇼 방지 솔루션
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-600 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onScrollToDemo}
              className="text-xs md:text-sm font-semibold text-slate-700 hover:text-amber-600 px-3 py-2 transition-colors flex items-center gap-1"
            >
              <Calendar className="w-4 h-4 text-amber-500" />
              체험하기
            </button>
            <button
              onClick={() => onOpenConsultation('상단 무료 시작하기 버튼')}
              className="text-xs md:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2.5 rounded-xl shadow-sm transition-all hover:shadow-md flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              무료 시작하기 (월 20건 무료)
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsultation('모바일 헤더 신청')}
              className="text-xs font-bold text-white bg-slate-900 px-3 py-1.5 rounded-lg"
            >
              무료 시작
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-hidden"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-700 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToDemo();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold border border-slate-200 text-slate-700 rounded-xl"
            >
              예약 & 대시보드 직접 체험하기
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation('모바일 드로어 3개월 무료 신청');
              }}
              className="w-full py-3 text-center text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-sm"
            >
              무료 시작하기 (3개월 프로 혜택)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
