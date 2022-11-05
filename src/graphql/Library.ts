export const getSnippetsForHome = `{
  Libraries(limit: 8) {
    docs {
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
