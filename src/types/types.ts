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
  link: string;
  image: string;
  tagline: string;
  heading: string;
};
