/** @jsx jsx */
import { jsx } from 'theme-ui';
import { HeadFC, Link } from 'gatsby';
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import Title from '@lekoarts/gatsby-theme-minimal-blog/src/components/title';
import Listing from '@lekoarts/gatsby-theme-minimal-blog/src/components/listing';
import List from '@lekoarts/gatsby-theme-minimal-blog/src/components/list';
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config';
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes';
import { visuallyHidden } from '@lekoarts/gatsby-theme-minimal-blog/src/styles/utils';
import Seo from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo';
import Hero from '@lekoarts/gatsby-theme-minimal-blog/src/texts/hero.mdx';
import Bottom from '@lekoarts/gatsby-theme-minimal-blog/src/texts/bottom.mdx';

export type MBHomepageProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
};

const Homepage = ({ posts }: MBHomepageProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();
  const { siteTitle } = useSiteMetadata();

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section
        sx={{
          mb: [4, 5, 5],
          p: { fontSize: [1, 2, 3], mt: 2 },
          variant: `section_hero`,
        }}
      >
        <Hero />
      </section>
      <Title text='Últimas publicaciones'>
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Ver todas las publicaciones
        </Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List>
        <Bottom />
      </List>
    </Layout>
  );
};

export default Homepage;

export const Head: HeadFC = () => <Seo />;
