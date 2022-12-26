export const getDataForHomePage = `
query {
  Libraries(limit: 8) {
    docs {
      id
     title
      views
      tagline
      tags {
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
      tags {
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
     tags {
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
