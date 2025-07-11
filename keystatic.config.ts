import { config, fields, collection } from "@keystatic/core";

// https://keystatic.com/docs/local-mode
// Set storage mode: "local" or "github"
// Use environment variables for storage mode and GitHub repo details
const KEYSTATIC_STORAGE_MODE = process.env.KEYSTATIC_STORAGE_MODE || "local";
const GITHUB_REPO_OWNER = process.env.KEYSTATIC_GITHUB_REPO_OWNER || "REPO_OWNER";
const GITHUB_REPO_NAME = process.env.KEYSTATIC_GITHUB_REPO_NAME || "REPO_NAME";

export default config({
  storage:
    KEYSTATIC_STORAGE_MODE === "github"
      ? {
          kind: "github",
          repo: `${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}`,
        }
      : {
          kind: "local",
        },

  collections: {
    articles: collection({
      label: "Articles",
      slugField: "title",
      path: "src/content/articles/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images/articles",
              publicPath: "@images/articles/",
            },
          },
        }),
        date: fields.date({
          label: "Publication date",
          description: "The date of the publication",
        }),
      },
    }),
    reference: collection({
      label: "Reference",
      slugField: "title",
      path: "src/content/reference/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images/reference",
              publicPath: "@images/reference/",
            },
          },
        }),
        date: fields.date({
          label: "Publication date",
          description: "The date of the publication",
        }),
      },
    }),
    caseStudies: collection({
      label: "caseStudies",
      slugField: "title",
      path: "src/content/case-studies/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images/case-studies",
              publicPath: "@images/case-studies/",
            },
          },
        }),
        industry: fields.text({
          label: "Industry",
          description: "The industry of the case study",
        }),
        date: fields.date({
          label: "Publication date",
          description: "The date of the publication",
        }),
      },
    }),
    researchPapers: collection({
      label: "researchPapers",
      slugField: "title",
      path: "src/data/researchPapers/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Research Papers Name" } }),
        description: fields.text({ label: "Description" }),
        readLink: fields.url({ label: "Read Link" }),
        btnTitle: fields.text({ label: "Button Title" }),
        btnLink: fields.url({ label: "Button Link" }),
      },
    }),
  },
});
