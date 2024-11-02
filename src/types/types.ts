export type MetricType = {
  icon: string;
  heading: string;
  tagline: string;
  experts?: string;
};

export type TestimonialType = {
  heading: string;
  expert?: string;
  tagline: string;
  cta?: null | { [key: string]: string };
  solutions: SolutionType[];
};

export type SolutionType = {
  heading: string;
  tagline: string;
  experts: string;
  image?: string;
};

export type ItemType = {
  heading: string;
  link?: string;
  image?: string;
  tagline?: string;
  experts?: string;
  exports?: string;
};

// Тип для окремої вакансії
export type JobPosition = {
  location: string;
  title: string;
  type: "Full-Time" | "Part-Time" | "Remote" | "On-site"; // Вказані приклади типів зайнятості
  link?: string;
};

// Тип для відділу з вакансіями
export type DepartmentType = {
  department: string;
  available: JobPosition[];
};

// Тип для масиву відділів на сторінці кар'єри
export type JobBoard = DepartmentType[];
