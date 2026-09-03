import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, Heart } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSource?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialSource,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    phone: '',
    businessType: '방문 훈련/행동교정',
    instagramOrBlog: '',
    preferredContact: 'phone',
    inquiry: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('성함과 연락처를 입력해주세요.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>3개월 무료 이용 + 1:1 세팅 지원</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
              무료 예약 링크 세팅 신청하기
            </h3>
            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              바쁘신 원장님을 위해 펫프론트 전문 매니저가 24시간 내에 인스타그램 프로필 전용 예약 링크를 무료로 세팅해 드립니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  원장님 성함 또는 상호명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 이민수 훈련사 / 도그살롱 천안점"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  휴대폰 번호 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="예: 010-1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">전문 분야</label>
                  <select
                    value={formData.businessType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        businessType: e.target.value as ConsultationFormData['businessType'],
                      })
                    }
                    className="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm bg-white font-medium focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  >
                    <option value="방문 훈련/행동교정">방문 훈련/행동교정</option>
                    <option value="1인 펫 미용실">1인 펫 미용실</option>
                    <option value="전문 펫시터">전문 펫시터</option>
                    <option value="창업 준비 중">창업 준비 중</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">인스타그램 계정 (선택)</label>
                  <input
                    type="text"
                    placeholder="@trainer_minsoo"
                    value={formData.instagramOrBlog}
                    onChange={(e) => setFormData({ ...formData, instagramOrBlog: e.target.value })}
                    className="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  남기실 말씀 또는 궁금한 점 (선택)
                </label>
                <textarea
                  rows={2}
                  placeholder="예: 노쇼 방지 예약금 기준을 어떻게 정해야 할지 상담받고 싶습니다."
                  value={formData.inquiry}
                  onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-[11px] text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>개인정보는 1:1 상담 및 예약 링크 무료 개설 안내 목적으로만 안전하게 사용됩니다.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>3개월 무료 체험 &amp; 링크 세팅 신청하기</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-slate-900">신청이 정상 접수되었습니다!</h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
              <strong>{formData.name}</strong> 원장님, 펫프론트 전담 온보딩 매니저가 연락처(
              <strong>{formData.phone}</strong>)로 24시간 이내에 카카오톡 안내 및 1:1 예약 링크 맞춤 세팅을 진행해 드립니다.
            </p>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 text-left space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>신청 완료 혜택 요약</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-amber-800">
                <li>PetFront Pro 플랜 3개월 무료 이용권 부여</li>
                <li>인스타 프로필 예약 링크 1:1 맞춤 무료 제작</li>
                <li>원장님 전용 카카오 알림장 템플릿 무료 제공</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
            >
              확인 및 홈페이지 둘러보기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
