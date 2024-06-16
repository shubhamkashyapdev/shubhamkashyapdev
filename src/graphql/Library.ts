export const getSnippetsForHome = `{
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
}`;

export const getSnippetsForLibrary = `{
  Libraries {
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
}`;

export const getSnippetDataForPage = `query($id: String!) {
  Library(id: $id) {
    id
    title
    views
    tagline
    subTagline
    allTags {
      id
      title
      icon {
        id
        url
      }
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
