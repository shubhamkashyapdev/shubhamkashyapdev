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

export const getSnippetDataForPage = `query($id: String!) {
  Library(id: $id) {
    id
    title
    views
    tagline
    subTagline
    tags {
      id
      title
      icon
    }
    blocks {
      ...on PrimaryHeading {
        id
        text
        blockType
      }
      ... on SecondaryHeading {
        id
        secondaryHeading
        blockType
      }
      ...on Parragraph {
        id
        parragraph
        blockType
      }
     ...on Code {
      id
      code
      language
      showLineNumbers
      blockType
    }
    }
  }
}`;
