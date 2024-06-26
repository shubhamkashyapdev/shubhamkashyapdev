export const getDataForHomePage = `
query {
  Libraries(limit: 8) {
    docs {
      id
     title
      views
      tagline
      allTags {
        id
        title
        icon {
          id
          url
				}
      }
    }
  }
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
        id 
        url
        sizes {
          thumbnail {
            url
          }
        }
      }
    }
  }
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
  Boilerplates {
    docs {
     id
     title
     slug
     views 
     tagline 
     githubURL 
     description
     image {
       id 
       url
     }
     allTags {
       id 
       title
       icon {
         id 
         url 
       }
     }
   }
 }
}

`;

export const getLibrariesForHomePage = `
query {
  Libraries(limit: 8) {
    docs {
      id
      slug
      title
      views
      tagline
      allTags {
        id
        title
        icon {
          id
          url
        }
      }
    }
  }
}
`;

export const getProjectsForHomePage = `
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
        id
        url
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
export const getPostsForHomePage = `
query {
  Posts(limit: 6, where: { status: {equals: published} }) {
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
export const getBoilerplatesForHomePage = `
query {
  Boilerplates {
    docs {
      id
      title
      slug
      views
      tagline
      githubURL
      description
      image {
        id
        url
      }
      allTags {
        id
        title
        icon {
          id
          url
        }
      }
    }
  }
}
`;

export const getAllTags = `
query {
  Tags(limit:100) {
    docs {
      id 
      slug 
      title 
      icon {
        id 
        url
      }
    }
  }
}
`;
