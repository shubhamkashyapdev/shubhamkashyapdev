export const getBlogsForHome = `
query  {
    Posts(limit:6, where: { status: {equals: published} }) {
      docs {
        id
        title
        slug
        readTime
        featuredImage {
          id
          url
        }
        views
        allTags {
          id
          title 
          icon {
            id 
            url
          }
        }
        excerpt
        publishedDate
        createdAt
      }
    }
}
`;
export const getAllBlogsForCards = `
query  {
  Posts(limit:6, where: { status: {equals: published} }) {
    docs {
      id
      title
      slug
      readTime
      featuredImage {
        id
        url
      }
      views
      allTags {
        id
        title 
        icon {
          id 
          url
        }
      }
      excerpt
      publishedDate
      createdAt
    }
  }
}
`;

export const getBlogDataForPage = `
query($slug: String!)  {
  Posts(limit:1, where:{slug: {equals: $slug}}) {
      docs {
      id
      title
      slug
      readTime
      status
      featuredImage {
        id
        url
      }
      views
      allTags {
        id
        title 
        icon {
          id 
          url
        }
      }
      excerpt
      publishedDate
      createdAt
         blocks {
      ... on SecondaryHeading {
        id
        secondaryHeading
        blockType
      }
      ...on Blockquote {
        id
        blockType
        title
      }
      ...on Featureslist {
        id
        blockType
        features {
          id
          featureText
        }
      }
      ...on Imageblock {
        id
        blockType
        image {
          id
          url
        }
      }
      ...on ImageGridBlock {
        id
        blockType
        imageGrid {
          id
          imageLabel
          image {
            id
            url
          }
        }
      }
      ...on Code {
        id
        code
        language
        showLineNumbers
        blockType
      }
      ...on PrimaryHeading {
            id
            blockType
            text
          }
      ...on Parragraph {
        id
        parragraph
        blockType
         }
        }
    }
      }
  }
`;
