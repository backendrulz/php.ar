/** @jsx jsx */
import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import { jsx, Heading, useColorMode } from 'theme-ui';
import Layout from './layout';
import ItemTags from './item-tags';
import Seo from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo';
import PostFooter from '@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer';
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';
import { Disqus } from 'gatsby-plugin-disqus';

export type MBPostProps = {
  post: {
    slug: string;
    title: string;
    date: string;
    tags?: {
      name: string;
      slug: string;
    }[];
    description?: string;
    canonicalUrl?: string;
    excerpt: string;
    timeToRead?: number;
    banner?: {
      childImageSharp: {
        resize: {
          src: string;
        };
      };
    };
  };
};

const px = [`16px`, `8px`, `4px`];
const shadow = px.map((v) => `rgba(0, 0, 0, 0.1) 0px ${v} ${v} 0px`);

const Post: React.FC<React.PropsWithChildren<PageProps<MBPostProps>>> = ({
  data: { post },
  children,
}) => {
  const { siteUrl } = useSiteMetadata();
    const [colorMode, setColorMode] = useColorMode<'light' | 'dark'>();
    const isDark = colorMode === `dark`;

  return (
    <Layout>
      <Heading as='h1' variant='styles.h1'>
        {post.title}
      </Heading>
      <p
        sx={{
          color: `secondary`,
          mt: 3,
          a: { color: `secondary` },
          fontSize: [1, 1, 2],
        }}
      >
        <time>{post.date}</time>
        <span
          sx={{
            color: `secondary`,
            mt: 3,
            a: { color: `secondary` },
            fontSize: [2],
            fontStyle: `italic`,
          }}
        >
          {post.tags && (
            <React.Fragment>
              {` — `}
              <ItemTags tags={post.tags} />
            </React.Fragment>
          )}
        </span>
        {post.timeToRead && ` — `}
        {post.timeToRead && <span>{post.timeToRead} minutos de lectura</span>}
      </p>
      <section
        sx={{
          my: 5,
          '.gatsby-resp-image-wrapper': {
            my: [4, 4, 5],
            borderRadius: `4px`,
            boxShadow: shadow.join(`, `),
            '.gatsby-resp-image-image': {
              borderRadius: `4px`,
            },
          },
          variant: `layout.content`,
        }}
      >
        {children}
      </section>
      <PostFooter post={post} />
      <Disqus
        config={{
          url: `${siteUrl + post.slug}`,
          identifier: post.slug,
          title: post.title,
        }}
      />
    <style>
        {`
            h2 {
                position: relative;
            }

            h2:before {
                content: '';
                width: 100%;
                height: ${isDark ? '1px' : '2px'};
                background: #F0F5F9;
                position: absolute;
                left: 0px;
                bottom: 0;
                right: 0;
            }

            p {
                margin-left: 5px
            }
        `}
      </style>
    </Layout>
  );
};

export default Post;

export const Head: HeadFC<MBPostProps> = ({ data: { post } }) => (
  <Seo
    title={post.title}
    description={post.description ? post.description : post.excerpt}
    image={post.banner ? post.banner?.childImageSharp?.resize?.src : undefined}
    pathname={post.slug}
    canonicalUrl={post.canonicalUrl}
  />
);
