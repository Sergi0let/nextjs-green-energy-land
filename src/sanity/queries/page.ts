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
