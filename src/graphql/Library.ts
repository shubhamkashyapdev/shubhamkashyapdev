export const getSnippetsForHome = `{
  Libraries(limit: 8) {
    docs {
      id
     title
      views
      tagline
      tags {
        id
        icon
        title
      }
    }
  }
}`;

export const getSnippetsForLibrary = `{
  Libraries {
    docs {
      id
     title
      views
      tagline
      tags {
        id
        icon
        title
      }
    }
  }
}`;
