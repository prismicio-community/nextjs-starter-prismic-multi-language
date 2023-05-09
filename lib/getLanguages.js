import * as prismicH from "@prismicio/helpers";

const findLanguageName = (languages, langID) => {
  return languages.find((lang) => lang.id === langID)?.name;
};

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
  const repository = await client.getRepository();

  if (doc.alternate_languages.length < 1) {
    return [
      {
        ...doc,
        lang_name: findLanguageName(repository.languages, doc.lang),
      },
    ];
  }

  const alternateLanguageDocumentIDs = doc.alternate_languages.map(
    (alternateLanguage) => alternateLanguage.id
  );

  const alternateLanguageDocuments = await client.getAllByIDs(
    alternateLanguageDocumentIDs,
    {
      lang: "*",
      // Exclude all fields to speed up the query.
      fetch: `${doc.type}.__nonexistent-field__`,
    }
  );

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
        lang_name: findLanguageName(
          repository.languages,
          alternateLanguage.lang
        ),
      };
    }
  );

  return [
    {
      ...doc,
      lang_name: findLanguageName(repository.languages, doc.lang),
    },
    ...alternate_languages,
  ];
}
