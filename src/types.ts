export type ServiceCategory = 'training' | 'grooming' | 'sitting';

export interface BookingDemoState {
  category: ServiceCategory;
  serviceName: string;
  price: number;
  depositAmount: number;
  date: string;
  time: string;
  petName: string;
  breed: string;
  age: string;
  weight: string;
  hasBitingHabit: 'yes' | 'no' | 'slight';
  barkingLevel: 'low' | 'medium' | 'high';
  separationAnxiety: boolean;
  specialNotes: string;
  ownerName: string;
  ownerPhone: string;
  step: 'service' | 'datetime' | 'survey' | 'payment' | 'confirmed';
}

export interface RoiCalculatorState {
  servicePrice: number; // e.g. 120,000 KRW
  noShowsPerMonth: number; // e.g. 2
  csHoursPerDay: number; // e.g. 2 hours
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  businessType: '방문 훈련/행동교정' | '1인 펫 미용실' | '전문 펫시터' | '창업 준비 중' | '기타';
  instagramOrBlog: string;
  preferredContact: 'phone' | 'kakao' | 'email';
  inquiry: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: '예약/결제' | '문진표/기능' | '요금/설정';
}
