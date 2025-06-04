import React from 'react';

// These icons are kept as they are used in the Header, 
// though the PDF for some contacts uses text symbols like '+'
// Using SVGs provides more styling flexibility if needed.
// If a strict text-symbol match is preferred, these can be removed from Header.tsx usage.

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-4 h-4"}>
    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
  </svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-4 h-4"}>
    <path d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.002a1.5 1.5 0 01-.353 1.511l-1.518 1.518a11.038 11.038 0 005.106 5.106l1.518-1.517a1.5 1.5 0 011.511-.353l3.002.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5h-.058a14.502 14.502 0 01-12.69-12.69A1.5 1.5 0 013.5 2H5a1.5 1.5 0 011.5 1.5v.093a13.023 13.023 0 00-1.01.435c-.36.193-.64.47-.88.795a13.17 13.17 0 00-.755 1.018A1.5 1.5 0 012 5.5v-2zM3.5 3A.5.5 0 003 3.5V5c0 .168.045.327.126.468q.015.027.032.052c.195.312.45.583.736.81a11.51 11.51 0 001.007.757A.5.5 0 005.5 7H7a.5.5 0 00.5-.5 11.5 11.5 0 00-1.43-2.39.5.5 0 00-.43-.287H3.5z" />
  </svg>
);

export const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-4 h-4"}>
    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.145l.005-.002.007-.003.017-.009a5.712 5.712 0 002.96-2.575C15.439 13.332 16 11.91 16 10c0-3.866-3.582-7-8-7S0 6.134 0 10c0 1.91.561 3.332 2.143 4.612a5.712 5.712 0 002.961 2.575l.017.009.007.003.005.002a5.741 5.741 0 00.28.145l.019.008.006.003zM10 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
  </svg>
);

// Removed CheckCircleIcon, BriefcaseIcon, AcademicCapIcon, LightBulbIcon, CogIcon, ChartBarIcon
// These are either not present in the PDF design or handled differently (e.g., text checkmark, or no icon for sections).
