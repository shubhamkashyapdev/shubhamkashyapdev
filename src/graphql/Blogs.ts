export const getBlogsForHome = `
query  {
    Posts(limit:6) {
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
        tags {
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
  Posts(limit:6) {
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
      tags {
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
query($id: String!)  {
  Post(id: $id) {
        id
      title
      slug
      readTime
      featuredImage {
        id
        url
      }
      views
      tags {
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
`;
