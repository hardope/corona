// Real content gathered from coronaschools.org (homepage, /about/, /our-schools/,
// /contact-us/, /admissions/, /careers/, /corona-ceo-message/, /corona-school-de-message/).
// Kept in one place so every page cites the same facts.

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/schools", label: "Our Schools" },
  { href: "/admissions", label: "Admissions" },
  { href: "/techhub", label: "TechHub" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export const CENTRAL_OFFICE = {
  name: "Central Office",
  address: "No. 72 Raymond Njoku, Ikoyi, Lagos, Nigeria",
  phones: ["+234-903-111-0555", "+234-906-000-4651"],
  email: "info@coronaschools.org",
  hours: "Weekdays, 8:00am – 4:00pm",
};

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com/coronastc", icon: "fb" },
  { label: "Instagram", href: "https://instagram.com/coronaschoolstrustcouncil", icon: "ig" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/corona-schools-trust/", icon: "li" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCzwiTdAF_8m8EprrRFFvCFg", icon: "yt" },
  { label: "Twitter / X", href: "https://twitter.com/corona_schools", icon: "x" },
] as const;

export type Stage = "Nursery" | "Primary" | "Secondary" | "Boarding" | "Tertiary";

export interface School {
  name: string;
  stage: Stage;
  founded?: string;
  address: string;
  phones: string[];
  email: string;
}

export const SCHOOLS: School[] = [
  {
    name: "Corona Day Nursery, Ikoyi",
    stage: "Nursery",
    address: "35 Mobolaji Johnson Avenue, Ikoyi, Lagos",
    phones: ["+234-816-715-0366"],
    email: "idn@coronaschools.org",
  },
  {
    name: "Corona School, Gbagada",
    stage: "Primary",
    founded: "1960",
    address: "2/10 Olujobi Crescent, Anthony/Gbagada, Lagos",
    phones: ["+234-903-111-0444"],
    email: "gbs@coronaschools.org",
  },
  {
    name: "Corona School, Ikoyi",
    stage: "Primary",
    address: "6 Mekunwen Road, Ikoyi, Lagos",
    phones: ["+234-809-056-5468"],
    email: "iks@coronaschools.org",
  },
  {
    name: "Corona School, Lekki",
    stage: "Primary",
    address: "Block 35, Corona Drive, Abijo GRA Scheme 2, Ibeju-Lekki, Lagos",
    phones: ["+234-707-271-3342"],
    email: "lks@coronaschools.org",
  },
  {
    name: "Corona School, Victoria Island",
    stage: "Primary",
    address: "Waziri Ibrahim Crescent, Victoria Island, Lagos",
    phones: ["+234-810-435-5603"],
    email: "vis@coronaschools.org",
  },
  {
    name: "Corona Day Secondary School, Lekki",
    stage: "Secondary",
    address: "Block 36, Corona Drive, Abijo GRA Scheme 2, Ibeju-Lekki, Lagos",
    phones: ["+234-704-845-6701"],
    email: "cdssinfo@coronaschools.org",
  },
  {
    name: "Corona Secondary School, Agbara",
    stage: "Boarding",
    address: "Yenagoa Road, Agbara Estate, Ogun State",
    phones: ["+234-707-245-8394"],
    email: "cssinfo@coronaschools.org",
  },
  {
    name: "Corona College of Education, Apapa",
    stage: "Tertiary",
    address: "Apapa, Lagos",
    phones: CENTRAL_OFFICE.phones,
    email: CENTRAL_OFFICE.email,
  },
];

export const BOARD_OF_TRUSTEES = [
  { name: "Dr. Myma Belo-Osagie", role: "President" },
  { name: "Mr. Adedotun Sulaiman", role: "Trustee" },
  { name: "Mrs. Bridget Itsueli", role: "Trustee" },
  { name: "Chief Odunayo Olagundoye", role: "Trustee" },
  { name: "Prof. Oyinade Elebute", role: "Trustee" },
  { name: "Mrs. Demi Ibare-Akinsan", role: "Trustee" },
];

export const GOVERNING_BOARD = [
  { name: "Mr. Olaniyi Yusuf", role: "Chairman" },
  { name: "Mrs. Adeyoyin Adesina", role: "CEO / Member" },
  { name: "Mr. Adebayo Adeyemi", role: "Treasurer" },
  { name: "Justice R.I.B Adebiyi", role: "Member" },
  { name: "Engr. Kunle Adebajo", role: "Member" },
  { name: "Arc. Fred Coker", role: "Member" },
];

export const EXECUTIVE_MANAGEMENT = [
  { name: "Mrs. Adeyoyin Adesina", role: "Chief Executive Officer" },
  { name: "Mrs. Adetokunbo Matilukuro", role: "Director of Education" },
  { name: "Mr. Adewale Soremi", role: "Financial Controller" },
  { name: "Ms. Ngozi Ebo", role: "Head, Corporate Services" },
  { name: "Ms. Christie Yellowe", role: "HR Manager" },
  { name: "Mrs. Kike Adewolu", role: "Infrastructure & Development Manager" },
];

export const CAREER_ROLES = [
  "Class Teacher",
  "Subject Teacher",
  "Nursery Teacher",
  "Associate Nursery Teacher",
  "Physical & Health Education Teacher",
  "Language Teacher",
  "Additional Needs Teacher",
  "School Counselor",
  "School Nurse",
  "Enterprise Coordinator",
  "Facility Manager",
  "Logistics Officer",
  "Store Officer",
];
