import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getHomePageData() {
  const getPageQuery = groq`
		*[_type == 'page'][slug == 'home'][0]{
			slug,
			'hero':pageBuilder[][_type == 'hero'][0]{
				'heroImage':image.asset->url,
				heading,
				tagline,
			},
			'promotion':pageBuilder[][_type == 'promotion'][0]{
				link,
				title
			},
			'solutions':pageBuilder[][_type == 'solutions'][0] {
				heading,
				tagline,
				cta,
				solutions
			},
			'metrics':pageBuilder[][_type =='metrics'][0] {
				heading,
				tagline,
				Metrics,
			},
			'about':pageBuilder[][_type == 'aboutUs'][0] {
				heading,
				tagline,
				excerpt,
				solutions,
				'slider':slider.images[].asset->{
					'url':url
				},
			},
			'testimonials':pageBuilder[][_type == 'testimonials'][0]{
				heading,
				excerpt,
				tagline,
				cta,
				solutions[]{
					experts,
					heading,
					tagline,
					'image':image.asset->url,
				},
			},
			'ourExpert':pageBuilder[][_type == 'ourExpert'][0]{
				heading,
				excerpt,
				tagline,
				'ourExperts':ourExperts[]{
					'link': cta.link,
					'image': image.asset->url,
					tagline,
					heading,
					experts,
				},
			},
			'gallery':pageBuilder[][_type == 'imageGallary'][0] {
				_type,
        'imageUrls': images[].asset->{
          'url': url
        },
			
		}
	}
`;
  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}

export async function getAboutPage() {
  const getPageQuery = groq`
    *[_type == 'page'][slug == 'about-us'][0]{
      slug,
      'hero': pageBuilder[][_type == 'hero'][0]{
        heading,
        tagline,
        'heroImage': image.asset->url,
      },
      'promotion': pageBuilder[][_type == 'promotion'][0]{
        link,
        title,
      },
      'ourPhilosophy': pageBuilder[][_type == 'ourPhilosophy'][0]{
        heading,
        cta,
        philosophys[] {
          heading,
          tagline,
          experts,
        },
      },
      'ourExpert': pageBuilder[][_type == 'ourExpert'][0]{
        heading,
        tagline,
        excerpt,
        'ourExperts': ourExperts[] {
          'link': cta.link,
          'image': image.asset->url,
          tagline,
          heading,
					experts,
        },
      },
    }
  `;
  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}

export async function getCareersPage() {
  const getPageQuery = groq`
    *[_type == 'page'][slug == 'careers'][0]{
      slug,
      'hero': pageBuilder[][_type == 'hero'][0]{
        heading,
        tagline,
      },
      'jobBoard': pageBuilder[][_type == 'job'][]{
        department,
        available[] {
          location,
          title,
          type,
          link,
        },
      },
    }
  `;
  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}

export async function getPricePage() {
  const getPageQuery = groq`
    *[_type == 'page'][slug == 'pricing'][0]{
      'hero': pageBuilder[][_type == 'hero'][0]{
        heading,
        tagline,
      },
      'pricing': pageBuilder[][_type == 'price'][0]{
        availablePlan[]{
          benefits,
          cta {
            link,
            title,
          },
          desc,
          plan,
          price,
          recommended,
          time,
        },
      },
      'consultation':pageBuilder[][_type == 'textWithIllustration'][0]{
        cta{
          link,
          title,  
        },
        experts,
        heading,
        icon,
      },
    }
  `;
  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}
