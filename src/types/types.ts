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

export type JobPosition = {
  location: string;
  title: string;
  type: string;
  link?: string;
};

export type DepartmentType = {
  department: string;
  available: JobPosition[];
};

export type JobBoard = DepartmentType[];

export type PricingPlan = {
  benefits: string[];
  cta: {
    link: string;
    title: string;
  };
  desc: string;
  plan: string;
  price: string;
  recommended: boolean | null;
  time: string;
};
