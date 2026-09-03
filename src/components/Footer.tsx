import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { MapPin, Phone, Mail, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white font-black text-lg">
                P🐾
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Pet<span className="text-amber-500">Front</span>
              </span>
              <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                1인 펫 전문가 전용 SaaS
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
              {COMPANY_INFO.oneLiner}
              <br />
              DM 예약의 번거로움과 노쇼 리스크에서 하루 2시간과 소중한 매출을 구출합니다.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-white font-medium">{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              고객지원 &amp; 온보딩
            </span>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>대표번호: {COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>이메일: {COMPANY_INFO.email}</span>
              </li>
              <li className="text-slate-400 text-[11px] pt-1">
                상담시간: 평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              파트너십 &amp; 프로젝트
            </span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              본 서비스는 1인 펫 긱워커(미용/훈련/시팅)의 IT 리터러시 극복 및 노쇼 방지를 위해 고안된 수직 B2B SaaS 인프라입니다.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[10px] text-slate-400">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">호서대학교</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">산학협력 사업계획 모델</span>
            </div>
          </div>
        </div>

        {/* Business details and Address */}
        <div className="space-y-2 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong>상호명:</strong> {COMPANY_INFO.name} &nbsp;|&nbsp; <strong>대표자:</strong> {COMPANY_INFO.representative} &nbsp;|&nbsp; <strong>사업장 주소:</strong> {COMPANY_INFO.address}
          </p>
          <p>
            <strong>사업자등록번호:</strong> {COMPANY_INFO.businessNumber} &nbsp;|&nbsp; <strong>통신판매업신고:</strong> {COMPANY_INFO.mailOrderNumber} &nbsp;|&nbsp; <strong>개인정보보호책임자:</strong> {COMPANY_INFO.representative}
          </p>
          <p className="text-[10px] text-slate-400 pt-3">
            &copy; {new Date().getFullYear()} PetFront (펫프론트). All rights reserved. 펫프론트는 통신판매중개자로서 거래 당사자가 아니며, 입점 전문가와 보호자 간의 용역 계약 및 시술 책임은 해당 당사자에게 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
};
