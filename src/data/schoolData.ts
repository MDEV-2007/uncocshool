export interface Teacher {
  id: string;
  nameKey?: string;
  name?: string;
  subjectKey: string;
  bioKey?: string;
  bio?: string;
  image?: string;
  category: 'exact' | 'natural' | 'humanities' | 'languages';
}

export const TEACHERS_LIST: Teacher[] = [
  { id: "t1", name: "Azizbek Rahimov", subjectKey: "subject.math", bioKey: "teacher.bioPlaceholder", category: "exact" },
  { id: "t2", name: "Dilnoza Olimova", subjectKey: "subject.physics", bioKey: "teacher.bioPlaceholder", category: "exact" },
  { id: "t3", name: "Jasur Qodirov", subjectKey: "subject.chemistry", bioKey: "teacher.bioPlaceholder", category: "natural" },
  { id: "t4", name: "Gulnoza Usmonova", subjectKey: "subject.biology", bioKey: "teacher.bioPlaceholder", category: "natural" },
  { id: "t5", name: "Sardorbek Aliyev", subjectKey: "subject.history", bioKey: "teacher.bioPlaceholder", category: "humanities" },
  { id: "t6", name: "Malika Karimova", subjectKey: "subject.english", bioKey: "teacher.bioPlaceholder", category: "languages" },
  { id: "t7", name: "Nodirbek Yusupov", subjectKey: "subject.native", bioKey: "teacher.bioPlaceholder", category: "humanities" },
  { id: "t8", name: "Bekzod Toirov", subjectKey: "subject.it", bioKey: "teacher.bioPlaceholder", category: "exact" }
];

export const SCHOOL_DATA = {
  name: "UNCO School",
  type: "Xususiy maktab",
  operatingSince: "Sentabr 2024",
  grades: "5–11",
  location: {
    district: "Buvayda tumani",
    town: "Ibrat shaharchasi",
    street: "Obod Yurt ko'chasi",
    houseNumber: "870-uy",
    full: "Farg'ona viloyati, Buvayda tumani, Ibrat shaharchasi, Obod Yurt ko'chasi, 870-uy"
  },
  stats: {
    students: 193,
    teachers: 22,
    gradesLabel: "5–11",
    gradAdmitted: "5 / 6",
    busCount: 2,
    busModel: "Isuzu"
  },
  tuition: {
    minUZS: "600 000",
    maxUZS: "1 700 000",
    currency: "UZS",
    hardshipNote: "Boquvchisini yo'qotgan bolalar uchun 600 000 so'm imtiyozli to'lov amal qiladi.",
    scholarship: {
      minUZS: "100 000",
      maxUZS: "500 000",
      note: "A'lochi va faol o'quvchilar har oylik monitoring natijalariga ko'ra stipendiya oladilar."
    }
  },
  social: {
    telegram: "https://t.me/unco_school",
    instagram: "https://instagram.com/unco_school",
    phone: "+998 93 649 59 79",
    email: "info@uncoschool.uz"
  },
  facilities: [
    { title: "Zamonaviy o'quv korpusi", desc: "Keng, yorug' va shinam sinfxonalar" },
    { title: "Zamonaviy kompyuter xonalari", desc: "Tezkor internet va zamonaviy kompyuterlar" },
    { title: "Interaktiv / elektron doskalar", desc: "Har bir darsni qiziqarli vizual o'tish imkoniyati" },
    { title: "Konditsioner va isitish tizimlari", desc: "Yil bo'yi qulay harorat muhiti" },
    { title: "Sport maydonchalari", desc: "Ochiq voleybol maydoni va yopiq sport zali" },
    { title: "Virtual laboratoriya", desc: "Kimyo va biologiya bo'yicha amaliy tajribalar" }
  ]
};
