export interface MediaItem {
  id: string;
  titleKey: string;
  tagKey: string;
  descriptionKey?: string;
  src?: string;
  poster: string;
  wide?: boolean;
}

export interface MomentItem {
  id: string;
  tagKey: string;
  captionKey: string;
  img: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  titleKey: string;
  descriptionKey: string;
}

export interface TestimonialItem {
  id: string;
  labelKey: string;
  noteKey: string;
  src: string;
  poster: string;
}

export const ACADEMIC_VIDEOS: MediaItem[] = [
  {
    id: "a1",
    titleKey: "gallery.a1.title",
    tagKey: "gallery.a1.tag",
    descriptionKey: "gallery.a1.description",
    src: "/assets/academics/teacher_exploring_interesting_question.mp4",
    poster: "/assets/academics/teacher_exploring_interesting_question.jpg"
  },
  {
    id: "a2",
    titleKey: "gallery.a2.title",
    tagKey: "gallery.a2.tag",
    descriptionKey: "gallery.a2.description",
    src: "/assets/academics/teacher_blood_types_explanation.mp4",
    poster: "/assets/academics/teacher_blood_types_explanation.jpg"
  },
  {
    id: "a3",
    titleKey: "gallery.a3.title",
    tagKey: "gallery.a3.tag",
    descriptionKey: "gallery.a3.description",
    src: "/assets/academics/teacher_deja_vu_explanation.mp4",
    poster: "/assets/academics/teacher_deja_vu_explanation.jpg"
  },
  {
    id: "a4",
    titleKey: "gallery.a4.title",
    tagKey: "gallery.a4.tag",
    descriptionKey: "gallery.a4.description",
    src: "/assets/academics/teacher_life_lesson_discussion.mp4",
    poster: "/assets/academics/teacher_life_lesson_discussion.jpg"
  }
];

export const STUDENT_LIFE_GAMES: MediaItem[] = [
  {
    id: "s1",
    titleKey: "gallery.s1.title",
    tagKey: "gallery.s1.tag",
    descriptionKey: "gallery.s1.description",
    src: "/assets/student-life/teacher_student_circle_challenge.mp4",
    poster: "/assets/student-life/teacher_student_circle_challenge.jpg"
  },
  {
    id: "s2",
    titleKey: "gallery.s2.title",
    tagKey: "gallery.s2.tag",
    descriptionKey: "gallery.s2.description",
    src: "/assets/student-life/teacher_student_hand_matching.mp4",
    poster: "/assets/student-life/teacher_student_hand_matching.jpg"
  },
  {
    id: "s3",
    titleKey: "gallery.s3.title",
    tagKey: "gallery.s3.tag",
    descriptionKey: "gallery.s3.description",
    src: "/assets/student-life/stability_movement_game.mp4",
    poster: "/assets/student-life/stability_movement_game.jpg"
  }
];

export const STUDENT_LIFE_CAMPUS: MediaItem[] = [
  {
    id: "s4",
    titleKey: "gallery.s4.title",
    tagKey: "gallery.s4.tag",
    descriptionKey: "gallery.s4.description",
    src: "/assets/student-life/classroom_lesson.mp4",
    poster: "/assets/student-life/classroom_lesson.jpg"
  },
  ...ACADEMIC_VIDEOS
];

export const ACHIEVEMENTS_MEDIA: MediaItem[] = [
  {
    id: "ach1",
    titleKey: "gallery.ach1.title",
    tagKey: "gallery.ach1.tag",
    descriptionKey: "achievements.feature1.description",
    src: "/assets/achievements/student_scholarship_award.mp4",
    poster: "/assets/achievements/student_scholarship_award.jpg",
    wide: true
  },
  {
    id: "ach2",
    titleKey: "gallery.ach2.title",
    tagKey: "gallery.ach2.tag",
    descriptionKey: "achievements.feature2.description",
    src: "/assets/achievements/student_achievement_recognition.mp4",
    poster: "/assets/achievements/student_achievement_recognition.jpg"
  }
];

export const ACHIEVEMENT_MOMENTS: MomentItem[] = [
  { id: "m1", tagKey: "moment.scholarship1.tag", captionKey: "moment.scholarship1.caption", img: "/assets/achievements/moments/moment_scholarship_speech.jpg" },
  { id: "m2", tagKey: "moment.scholarship2.tag", captionKey: "moment.scholarship2.caption", img: "/assets/achievements/moments/moment_scholarship_handover.jpg" },
  { id: "m3", tagKey: "moment.scholarship3.tag", captionKey: "moment.scholarship3.caption", img: "/assets/achievements/moments/moment_scholarship_group.jpg" },
  { id: "m4", tagKey: "moment.certificate1.tag", captionKey: "moment.certificate1.caption", img: "/assets/achievements/moments/moment_certificate_closeup.jpg" },
  { id: "m5", tagKey: "moment.certificate2.tag", captionKey: "moment.certificate2.caption", img: "/assets/achievements/moments/moment_student_portrait.jpg" },
  { id: "m6", tagKey: "moment.certificate3.tag", captionKey: "moment.certificate3.caption", img: "/assets/achievements/moments/moment_certificate_presentation.jpg" }
];

export const ACHIEVEMENTS_TIMELINE: TimelineMilestone[] = [
  {
    id: "ms1",
    year: "2025",
    titleKey: "achievement.ms1.title",
    descriptionKey: "achievement.ms1.description"
  },
  {
    id: "ms2",
    year: "2024–2025",
    titleKey: "achievement.ms2.title",
    descriptionKey: "achievement.ms2.description"
  },
  {
    id: "ms3",
    year: "2024",
    titleKey: "achievement.ms3.title",
    descriptionKey: "achievement.ms3.description"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "p3",
    labelKey: "testimonial.p3.label",
    noteKey: "testimonial.p3.note",
    src: "/assets/testimonials/parent_testimonial_03_doctor.mp4",
    poster: "/assets/testimonials/parent_testimonial_03_doctor.jpg"
  },
  {
    id: "p1",
    labelKey: "testimonial.p1.label",
    noteKey: "testimonial.p1.note",
    src: "/assets/testimonials/parent_testimonial_01.mp4",
    poster: "/assets/testimonials/parent_testimonial_01.jpg"
  },
  {
    id: "p2",
    labelKey: "testimonial.p2.label",
    noteKey: "testimonial.p2.note",
    src: "/assets/testimonials/parent_testimonial_02.mp4",
    poster: "/assets/testimonials/parent_testimonial_02.jpg"
  }
];

export interface CertificateItem {
  id: string;
  studentName: string;
  subject: string;
  score: string;
  level: string;
  points: string;
  date: string;
  image: string;
  agency: string;
  badgeBg: string;
}

export const STUDENT_CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-abdurahim",
    studentName: "Shuxratjonov Abdurahim",
    subject: "Ona tili va adabiyot",
    score: "85.48%",
    level: "B",
    points: "55.56 ball",
    date: "15.06.2026",
    image: "/assets/achievements/certificate_shuxratjonov_abdurahim.jpg",
    agency: "Bilim va malakalarni baholash agentligi",
    badgeBg: "#059669"
  },
  {
    id: "cert-mubina",
    studentName: "Yaqubova Mubina",
    subject: "Ona tili va adabiyot",
    score: "82.00%",
    level: "C+",
    points: "53.3 ball",
    date: "15.06.2026",
    image: "/assets/achievements/certificate_yaqubova_mubina.jpg",
    agency: "Bilim va malakalarni baholash agentligi",
    badgeBg: "#2563EB"
  },
  {
    id: "cert-karimjon",
    studentName: "Ma'murjonov Karimjon",
    subject: "Ona tili va adabiyot",
    score: "81.15%",
    level: "C+",
    points: "52.75 ball",
    date: "15.06.2026",
    image: "/assets/achievements/certificate_mamurjonov_karimjon.jpg",
    agency: "Bilim va malakalarni baholash agentligi",
    badgeBg: "#2563EB"
  }
];

export const MULTILEVEL_SHOWCASE = {
  image: "/assets/achievements/unco_multilevel_students.png",
  titleKey: "UNCO Academy · Multilevel & Milliy Sertifikatlar",
  tag: "12+ Tasdiqlangan Sertifikat",
  desc: "O'quvchilarimiz maktab davridayoq xorijiy va ona tili fanlaridan milliy sertifikatlarni qo'lga kiritib, davlat imtihonlarida maksimal 100% ball imtiyoziga ega bo'lmoqdalar."
};

