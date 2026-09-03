import React, { useState } from 'react';
import {
  Smartphone,
  Calendar,
  Clock,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Send,
  Sparkles,
  RefreshCw,
  Eye,
  ShieldCheck,
  ChevronRight,
  Info,
} from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'booking' | 'dashboard' | 'report'>('booking');

  // Booking Flow States
  const [selectedService, setSelectedService] = useState({
    name: '1:1 방문 행동교정 및 훈련 (90분)',
    price: 130000,
    deposit: 30000,
  });
  const [selectedDate, setSelectedDate] = useState('2026-09-06 (일)');
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [petInfo, setPetInfo] = useState({
    name: '단추',
    breed: '말티푸',
    age: '2살',
    weight: '3.8kg',
    bitingHabit: '귀/발 만질 때 으르렁거림',
    barkingLevel: '보통 (인기척에 반응)',
    notes: '슬개골 주의 요망, 낯선 사람 초반 간식 적응 필요',
  });
  const [bookingStep, setBookingStep] = useState<1 | 2 | 3 | 4>(1);

  // Specialist Dashboard States
  const [sentReport, setSentReport] = useState(false);
  const [selectedCustomerForModal, setSelectedCustomerForModal] = useState<string | null>(null);

  const resetBookingDemo = () => {
    setBookingStep(1);
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/80 text-amber-900 text-xs font-bold mb-3">
            <Smartphone className="w-3.5 h-3.5 text-amber-700" />
            <span>Live Interactive Demo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            백문이 불여일견,
            <br />
            <span className="text-amber-600">펫프론트의 실제 작동 화면을 체험해보세요</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            고객이 인스타그램 프로필 링크를 눌렀을 때 마주하는 30초 예약창과 전문가의 CRM 화면입니다.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap gap-1">
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'booking'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>① 고객 관점: 모바일 예약 &amp; 문진 &amp; 예약금 결제</span>
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'dashboard'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>② 전문가 관점: CRM 관리자 스케줄러</span>
            </button>
            <button
              onClick={() => setActiveTab('report')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'report'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>③ 카카오 알림장 &amp; 리마인드 뷰어</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Client Booking Flow */}
        {activeTab === 'booking' && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
            {/* Fake Mobile Status Bar & Header */}
            <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300">petfront.link/minsoo-pet</span>
              <button
                onClick={resetBookingDemo}
                className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 font-bold"
              >
                <RefreshCw className="w-3 h-3" /> 처음부터 다시 체험
              </button>
            </div>

            {/* Profile Intro Banner */}
            <div className="p-5 border-b border-slate-100 bg-amber-50/40 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=120&q=80"
                alt="이민수 훈련사"
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-300 shadow-xs"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-slate-900 text-sm">이민수 1인 방문 펫 훈련 &amp; 행동교정</h4>
                  <span className="bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded">인증됨</span>
                </div>
                <p className="text-xs text-slate-500">인스타그램 프로필 링크에서 바로 열린 예약 화면입니다.</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-slate-50 px-5 py-2.5 border-b border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span className={bookingStep >= 1 ? 'text-amber-600' : ''}>1. 코스 선택</span>
              <span>&gt;</span>
              <span className={bookingStep >= 2 ? 'text-amber-600' : ''}>2. 날짜/시간</span>
              <span>&gt;</span>
              <span className={bookingStep >= 3 ? 'text-amber-600' : ''}>3. 펫 맞춤 문진</span>
              <span>&gt;</span>
              <span className={bookingStep >= 4 ? 'text-emerald-600' : ''}>4. 예약금 결제</span>
            </div>

            {/* Step Content */}
            <div className="p-6">
              {bookingStep === 1 && (
                <div className="space-y-4">
                  <div className="text-sm font-bold text-slate-900">원하시는 서비스를 선택해주세요</div>
                  <div className="space-y-2.5">
                    {[
                      {
                        name: '1:1 방문 행동교정 및 훈련 (90분)',
                        price: 130000,
                        deposit: 30000,
                        desc: '짖음, 분리불안, 공격성 집중 가정방문 훈련',
                      },
                      {
                        name: '프리미엄 원데이 퍼피 트레이닝 (60분)',
                        price: 90000,
                        deposit: 20000,
                        desc: '생후 3~6개월 배변 및 기본 예절 교육',
                      },
                      {
                        name: '노견 케어 및 산책 스트레스 완화 (60분)',
                        price: 80000,
                        deposit: 20000,
                        desc: '관절 맞춤 노견 완화 훈련 및 마사지',
                      },
                    ].map((svc, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedService(svc)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          selectedService.name === svc.name
                            ? 'border-amber-500 bg-amber-50/50 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-bold text-sm text-slate-900">{svc.name}</div>
                            <p className="text-xs text-slate-500 mt-0.5">{svc.desc}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-slate-900 text-sm">{svc.price.toLocaleString()}원</span>
                            <div className="text-[10px] text-amber-700 font-semibold">
                              예약금 {svc.deposit.toLocaleString()}원 선납
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setBookingStep(2)}
                    className="w-full mt-4 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>날짜 및 시간 선택하기</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {bookingStep === 2 && (
                <div className="space-y-4">
                  <div className="text-sm font-bold text-slate-900">
                    전문가의 실시간 빈 시간만 열려 있습니다
                  </div>

                  {/* Date buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    {['2026-09-06 (일)', '2026-09-07 (월)', '2026-09-08 (화)'].map((d) => (
                      <button
                        key={d}
                        onClick={() => setSelectedDate(d)}
                        className={`py-2 px-2 text-center rounded-lg border text-xs font-semibold ${
                          selectedDate === d
                            ? 'border-amber-500 bg-amber-500 text-white'
                            : 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-1.5">
                    <span className="text-xs text-slate-500 font-semibold">예약 가능 시간대</span>
                    <div className="grid grid-cols-4 gap-2">
                      {['10:00', '12:00', '14:00', '16:30'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-2.5 rounded-lg border text-xs font-bold ${
                            selectedTime === t
                              ? 'border-slate-900 bg-slate-900 text-white'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                    <span>선택 일정: <strong>{selectedDate} {selectedTime}</strong></span>
                    <span className="text-amber-600 font-bold">캘린더 자동 연동</span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => setBookingStep(1)}
                      className="w-1/3 py-3 border border-slate-300 text-slate-700 font-bold rounded-xl text-xs"
                    >
                      이전
                    </button>
                    <button
                      onClick={() => setBookingStep(3)}
                      className="w-2/3 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-1"
                    >
                      <span>펫 맞춤 문진표 작성</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {bookingStep === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-slate-900">
                      반려견 사전 맞춤 문진표 (상담 시간 80% 단축)
                    </div>
                    <span className="text-[11px] text-red-600 font-bold">* 필수 입력</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">반려견 이름</label>
                        <input
                          type="text"
                          value={petInfo.name}
                          onChange={(e) => setPetInfo({ ...petInfo, name: e.target.value })}
                          className="w-full border border-slate-300 rounded-lg p-2 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">견종 / 나이 / 체중</label>
                        <input
                          type="text"
                          value={`${petInfo.breed} / ${petInfo.age} / ${petInfo.weight}`}
                          readOnly
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-600"
                        />
                      </div>
                    </div>

                    <div className="bg-red-50/80 border border-red-200 rounded-xl p-3 space-y-1.5">
                      <label className="block text-red-900 font-bold">
                        ⚠️ 입질 및 낯선 사람 공격성 여부 (안전 필수 문진)
                      </label>
                      <select
                        value={petInfo.bitingHabit}
                        onChange={(e) => setPetInfo({ ...petInfo, bitingHabit: e.target.value })}
                        className="w-full bg-white border border-red-200 rounded-lg p-2 text-xs font-semibold text-slate-800"
                      >
                        <option value="입질 없음 (온순함)">입질 없음 (온순함)</option>
                        <option value="귀/발 만질 때 으르렁거림">귀/발 만질 때 으르렁거림 (주의)</option>
                        <option value="낯선 사람 손 닿으면 즉시 묾">낯선 사람 손 닿으면 즉시 묾 (위험)</option>
                      </select>
                      <p className="text-[10px] text-red-600">
                        * 전문가가 사전 장비를 챙기고 안전사고를 방지하기 위해 필수 수집됩니다.
                      </p>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        주요 문제행동 / 기저질환 / 요청사항
                      </label>
                      <textarea
                        rows={2}
                        value={petInfo.notes}
                        onChange={(e) => setPetInfo({ ...petInfo, notes: e.target.value })}
                        className="w-full border border-slate-300 rounded-lg p-2 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => setBookingStep(2)}
                      className="w-1/3 py-3 border border-slate-300 text-slate-700 font-bold rounded-xl text-xs"
                    >
                      이전
                    </button>
                    <button
                      onClick={() => setBookingStep(4)}
                      className="w-2/3 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-1"
                    >
                      <span>예약금 {selectedService.deposit.toLocaleString()}원 결제하기</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {bookingStep === 4 && (
                <div className="space-y-4">
                  <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-5 text-center space-y-2">
                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-base font-bold text-emerald-900">예약 및 예약금 결제가 확정되었습니다!</h4>
                    <p className="text-xs text-emerald-800">
                      고객님과 훈련사님 캘린더에 동기화되었으며, 카카오톡 알림톡이 즉시 발송되었습니다.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">예약 일시</span>
                      <span className="font-bold text-slate-800">{selectedDate} {selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">신청 코스</span>
                      <span className="font-bold text-slate-800">{selectedService.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">반려견</span>
                      <span className="font-bold text-slate-800">{petInfo.name} ({petInfo.breed})</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-sm">
                      <span className="text-slate-800">선납 완료 예약금</span>
                      <span className="text-amber-600">{selectedService.deposit.toLocaleString()}원</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-500">
                      <span>현장 결제 잔금</span>
                      <span>{(selectedService.price - selectedService.deposit).toLocaleString()}원</span>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/60 text-xs text-amber-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>노쇼 위약금 보호 약관이 적용되어 당일 무단 취소 시 100% 보전됩니다.</span>
                  </div>

                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-colors"
                  >
                    전문가 CRM 관리자 화면에서 확인해보기 &rarr;
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Specialist CRM Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            {/* Header / Stats row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-amber-600">이민수 훈련사 전용 관리자 CRM</span>
                <h3 className="text-xl font-black text-slate-900">오늘의 예약 스케줄 (4건 확정)</h3>
              </div>

              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl text-xs font-bold text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>이번 달 노쇼 방어액 : 390,000원 (100% 입금 완료)</span>
              </div>
            </div>

            {/* Schedule Cards */}
            <div className="space-y-3">
              {[
                {
                  time: '10:00 - 11:30',
                  customer: '박민지 견주',
                  pet: '보리 (비숑프리제, 2세)',
                  status: '훈련 완료',
                  deposit: '30,000원 (선납완료)',
                  alertSent: true,
                  notes: '빗질 거부 및 분리불안 집중 완화 완료',
                },
                {
                  time: '14:00 - 15:30',
                  customer: '김단추 견주 (방금 고객이 신청한 건)',
                  pet: `${petInfo.name} (${petInfo.breed}, ${petInfo.age})`,
                  status: '예약 확정 (오늘 방문 예정)',
                  deposit: `${selectedService.deposit.toLocaleString()}원 (선납완료)`,
                  alertSent: sentReport,
                  notes: petInfo.bitingHabit + ' / ' + petInfo.notes,
                },
                {
                  time: '16:30 - 18:00',
                  customer: '정호진 견주',
                  pet: '맥스 (골든리트리버, 1세)',
                  status: '예약 확정',
                  deposit: '40,000원 (선납완료)',
                  alertSent: false,
                  notes: '산책 시 줄 당김 및 대형견 산책 예절',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all ${
                    idx === 1
                      ? 'border-amber-400 bg-amber-50/40 shadow-xs'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm text-slate-900">{item.time}</span>
                        <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-semibold">
                          {item.customer}
                        </span>
                        <span className="text-xs font-bold text-amber-700">{item.pet}</span>
                      </div>
                      <p className="text-xs text-slate-600 bg-white/80 p-2 rounded-lg border border-slate-200/60 max-w-xl">
                        <strong>📋 문진 요약:</strong> {item.notes}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2 shrink-0">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                        {item.deposit}
                      </span>
                      {item.alertSent ? (
                        <span className="text-[11px] text-blue-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> 알림장 발송 완료
                        </span>
                      ) : (
                        <button
                          onClick={() => {
                            setSentReport(true);
                            setActiveTab('report');
                          }}
                          className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg shadow-xs transition-colors flex items-center gap-1"
                        >
                          <Send className="w-3 h-3" /> 알림장 전송
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Banner */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>스케줄 중복 0건 &bull; 구글/네이버 캘린더 양방향 실시간 동기화 작동 중</span>
              </div>
              <button
                onClick={() => setActiveTab('report')}
                className="font-bold text-amber-300 hover:text-amber-200 underline"
              >
                전송된 디지털 알림장 확인하기 &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Digital Care Report & Retention Preview */}
        {activeTab === 'report' && (
          <div className="max-w-md mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Kakao Talk Header Bar */}
            <div className="bg-[#fee500] text-[#3c1e1e] px-5 py-3 flex items-center justify-between font-bold text-xs">
              <span>카카오 알림톡 도착</span>
              <span>PetFront 알림장</span>
            </div>

            <div className="p-5 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=100&q=80"
                  alt="반려견"
                  className="w-12 h-12 rounded-xl object-cover border border-amber-300"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{petInfo.name}의 케어 리포트</h4>
                  <p className="text-[11px] text-slate-500">2026.09.06 이민수 훈련사 작성</p>
                </div>
              </div>

              {/* Report content */}
              <div className="space-y-2.5 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-700 block">🎯 오늘 진행한 집중 훈련</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    초반 귀 만지기 거부 반응을 간식 클리커로 둔감화했습니다.
                    보호자님이 외출할 때 30초 대기 훈련 성공률 90% 달성!
                  </p>
                </div>

                <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 space-y-1">
                  <span className="font-bold text-amber-900 block">💡 숙제 및 다음 피드백</span>
                  <p className="text-amber-800 text-[11px] leading-relaxed">
                    현관 벨소리가 울릴 때 켄넬로 들어가는 연습을 하루 3회 반복해주세요.
                  </p>
                </div>

                {/* Auto retention reminder schedule box */}
                <div className="p-3 bg-slate-900 text-white rounded-xl space-y-1">
                  <div className="flex items-center justify-between text-amber-400 font-bold text-[11px]">
                    <span>📅 다음 리마인드 주기 자동 예약</span>
                    <span>D-60일 후</span>
                  </div>
                  <p className="text-slate-300 text-[10px]">
                    2개월 뒤 &ldquo;단추 재훈련 및 정기 케어 주기 안내&rdquo; 알림톡이 보호자에게 자동 발송됩니다.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('booking')}
                  className="w-full py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                >
                  &larr; 다시 고객 예약창 체험으로 이동
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
