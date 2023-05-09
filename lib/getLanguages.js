import * as prismicH from "@prismicio/helpers";

/**
 * Adds a `url` and `lang_name` property to each Prismic document's
 * `alternate_language` element.
 *
 * This is useful when you need to link to a document written in a different
 * language.
 *
 * @param {import("@prismicio/types").PrismicDocument} doc
 * @param {import("@prismicio/client").Client} client
 *
 * @typedef {{ alternate_languages: { url: string | null; lang_name: string }[] } } AlternateLanguagesMeta
 *
 * @returns {Promise<(import("@prismicio/types").AlternateLanguage & AlternateLanguagesMeta)[]>}
 */
export async function getLanguages(doc, client) {
  if (doc.alternate_languages.length < 1) {
    return [doc];
  }

  const alternateLanguageDocumentIDs = doc.alternate_languages.map(
    (alternateLanguage) => alternateLanguage.id
  );

  const [repository, alternateLanguageDocuments] = await Promise.all([
    await client.getRepository(),
    await client.getAllByIDs(alternateLanguageDocumentIDs, {
      lang: "*",
      // Exclude all fields to speed up the query.
      fetch: `${doc.type}.__nonexistent-field__`,
    }),
  ]);

  const alternate_languages = doc.alternate_languages.map(
    (alternateLanguage) => {
      const alternateLanguageDocument = alternateLanguageDocuments.find(
        (alternateLanguageDocument) =>
          alternateLanguageDocument.id === alternateLanguage.id
      );

      return {
        ...alternateLanguage,
        url: alternateLanguageDocument
          ? prismicH.asLink(alternateLanguageDocument)
          : null,
        lang_name: repository.languages.find(
          (lang) => lang.id === alternateLanguage.lang
        ).name,
      };
    }
  );

  return [
    {
      ...doc,
      lang_name: repository.languages.find((lang) => lang.id === doc.lang).name,
    },
    ...alternate_languages,
  ];
}
