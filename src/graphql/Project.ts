export const getProjectsForHome = `
query {
  Projects(limit: 3) {
    docs {
      id
      title
      tagline
      allTags {
        id
        title
        slug
        icon {
          id 
          url
        }
      }
      featuredImage {
        sizes {
          thumbnail {
            url
          }
        }
      }
    }
  }
}
`;
export const getAllProjectsForCards = `
query {
  Projects {
    docs {
      id
      title
      tagline
      allTags {
        id
        title
        slug
        icon {
          id 
          url
        }
      }
      featuredImage {
        id
        url
      }
    }
  }
}
`;

export const getProjectDataForPage = `
query($id: String!) {
  Project(id: $id) {
    id
    title
    views
    tagline
    subTagline
    createdAt
    repoURL
    liveSiteURL
    featuredImage {
      id
      url
    }
    projectType
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
      ...on Parragraph {
        id
        parragraph
        blockType
      }
    }
  }
}
`;
