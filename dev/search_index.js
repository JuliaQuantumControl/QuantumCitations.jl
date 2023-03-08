var documenterSearchIndex = {"docs":
[{"location":"references/#References","page":"References","title":"References","text":"","category":"section"},{"location":"references/#Cited-References","page":"References","title":"Cited References","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"The following references are cited in the documentation. It is produced with","category":"page"},{"location":"references/","page":"References","title":"References","text":"```@bibliography\n```","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#Other-References","page":"References","title":"Other References","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"The following are non-cited references (everything in the .bib file), included here to show how bibliographies are rendered for various types of materials. It is produced with","category":"page"},{"location":"references/","page":"References","title":"References","text":"```@bibliography\n*\n```","category":"page"},{"location":"references/","page":"References","title":"References","text":"*","category":"page"},{"location":"styling/#CSS-Styling","page":"CSS Styling","title":"CSS Styling","text":"","category":"section"},{"location":"styling/","page":"CSS Styling","title":"CSS Styling","text":"For optimal rendering of the bibliography, place a file citations.css in the docs/src/assets folder of your project, containing e.g.","category":"page"},{"location":"styling/","page":"CSS Styling","title":"CSS Styling","text":".citation dl {\n  display: grid;\n  grid-template-columns: max-content auto; }\n.citation dt {\n  grid-column-start: 1; }\n.citation dd {\n  grid-column-start: 2;\n  margin-bottom: 0.75em; }","category":"page"},{"location":"styling/","page":"CSS Styling","title":"CSS Styling","text":"The citations.css file must be listed as an asset for Documenter.HTML in docs/make.jl:","category":"page"},{"location":"styling/","page":"CSS Styling","title":"CSS Styling","text":"makedocs(\n    bib,\n    # ...\n    format = Documenter.HTML(\n        # ...\n        assets=String[\"assets/citations.css\"],\n    ),\n    # ...\n)","category":"page"},{"location":"#QuantumCitations.jl","page":"Home","title":"QuantumCitations.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"QuantumCitations.jl is a fork of DocumenterCitations.jl adapted to the conventions of (quantum) physics. It adds support for BibTeX citations in documentation pages generated by Documenter.jl, specifically the documentation of the packages in the JuliaQuantumControl organization.","category":"page"},{"location":"","page":"Home","title":"Home","text":"By default, QuantumCitations.jl uses the numeric citation style of the APS journals, see the REVTeX author's guide. Citations are shown in-line, as a number enclosed in square brackets, e.g. \"Optimal control is a cornerstone in the development of quantum technologies [1].\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"QuantumCitations.jl by default differs from DocumenterCitations.jl in the following ways:","category":"page"},{"location":"","page":"Home","title":"Home","text":"A numeric citation style is used, with citations number that are sequential throughout the entire documentation.\nOnly cited references are included in the main bibliography by default.\nThe @bibligraphy block can have additional options to customize which references are included, see Syntax for the Bibliography Block.\nIt is possible to generate secondary bibliographies, e.g. for a specific page.\nAlternatively to [key](@cite), [text](@cite key) can be used to create citations with arbitrary text, see Syntax for Citations.","category":"page"},{"location":"#Installation-instructions","page":"Home","title":"Installation instructions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can install the latest version of QuantumCitations.jl using the built-in package manager (accessed by pressing ] in the Julia command prompt) to add the package and instantiate/build all dependencies","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia>]\npkg> add QuantumCitations","category":"page"},{"location":"#Telling-Documenter.jl-about-your-bibliography","page":"Home","title":"Telling Documenter.jl about your bibliography","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"First, place a BibTeX refs.bib file in the docs folder of your project.  Then, in docs/make.jl, instantiate the CitationBibliography plugin and pass it to makedocs:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using QuantumCitations\n\nbib = CitationBibliography(\"refs.bib\")\nmakedocs(bib, ...)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Somewhere in your documentation, like a References page, include a markdown block","category":"page"},{"location":"","page":"Home","title":"Home","text":"```@bibliography\n```","category":"page"},{"location":"","page":"Home","title":"Home","text":"to insert the bibliography for all cited references in the project. See Syntax for the Bibliography Block for more options. You will also want to add custom CSS Styling to your documentation to improve the rendering of your bibliography.","category":"page"},{"location":"#How-to-cite-references-in-your-documentation","page":"Home","title":"How to cite references in your documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can put citations anywhere in your docs, both in the markdown pages and in the docstrings of any functions that are shown as part of the API documentation: The basic syntax is e.g. [GoerzQ2022](@cite), for a BibTeX key GoerzQ2022 in refs.bib,  which will be rendered as \"[2]\".  See Syntax for Citations for more details.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Clicking on the citations takes you to the bibliography (\"References\").","category":"page"},{"location":"#Home-References","page":"Home","title":"Home References","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This page cites the following references:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"index.md\"]\nCanonical = false","category":"page"},{"location":"","page":"Home","title":"Home","text":"Also see the full bibliography for further references cited throughout this documentation.","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"CurrentModule = QuantumCitations","category":"page"},{"location":"internals/#Internals","page":"Internals","title":"Internals","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"CitationBibliography","category":"page"},{"location":"internals/#QuantumCitations.CitationBibliography","page":"Internals","title":"QuantumCitations.CitationBibliography","text":"Plugin for enabling APS style citations in Documenter.jl.\n\nbib = CitationBibliography(filename; sorting=:none)\n\ninstantiates a plugin that must be passed as an (undocumented!) positional argument to Documenter.makedocs.\n\nInternally, bib can then be accessed as doc.plugins[CitationBibliography] where doc is the Documenter.Documents.Document object.\n\nInternal Attributes\n\nfilename: name filename with which bib was instantiated\nbib: the BibTeX data, as obtained by BibParser.parse_file\ncitations: an ordered dict mapping citation keys to their numerical citation key\npage_citations: a dict mapping page file names (md files inside docs/src) to a set of citation keys that are cited on that page\n\n\n\n\n\n","category":"type"},{"location":"internals/","page":"Internals","title":"Internals","text":"The QuantumCitations.CitationBibliography plugin hooks into the Documenter.Builder.DocumentPipeline[1] between ExpandTemplates (which expands @docs blocks) and CrossReferences. The plugin adds the following three steps:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"[1]: See the documentation of Documenter.Utilities.Selectors for an explanation of Documenter's pipeline concept.","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"CollectCitations\nExpandBibliography\nExpandCitations","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"CollectCitations\nExpandBibliography\nExpandCitations","category":"page"},{"location":"internals/#QuantumCitations.CollectCitations","page":"Internals","title":"QuantumCitations.CollectCitations","text":"Pipeline step to collect citations from all pages.\n\nIt walks all pages in the order they appear in the navigation bar, looking for @cite links. It fills the citations and page_citations attributes of the internal CitationBibliography object.\n\nThus, the order in which CollectCitations encounters citations determines the numerical key that will appear in the rendered documentation (see ExpandBibliography and ExpandCitations).\n\n\n\n\n\n","category":"type"},{"location":"internals/#QuantumCitations.ExpandBibliography","page":"Internals","title":"QuantumCitations.ExpandBibliography","text":"Pipeline step to expand all @bibliography blocks.\n\nRuns after CollectCitations but before ExpandCitations.\n\nEach bibliography is rendered into HTML as a definition list. The \"term\" for each list item (the numerical citation key) is rendered via format_bibliography_key and the \"description\" (the actual bibliographic reference) is rendered via format_bibliography_entry.\n\n\n\n\n\n","category":"type"},{"location":"internals/#QuantumCitations.ExpandCitations","page":"Internals","title":"QuantumCitations.ExpandCitations","text":"Pipeline step to expand all @cite citations.\n\nThis runs after ExpandBibliography, as it relies on the link targets in the expanded @bibliography blocks.\n\nAll citations are formatted using format_citation.\n\n\n\n\n\n","category":"type"},{"location":"internals/#Customization","page":"Internals","title":"Customization","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"Even though QuantumCitations targets the APS/REVTeX numeric citation style, it is technically possible to completely customize the rendering of citations and references by overwriting the format_bibliography_key, format_bibliography_entry, and format_citation methods detailed below.","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"format_bibliography_key\nformat_bibliography_entry\nformat_citation","category":"page"},{"location":"internals/#QuantumCitations.format_bibliography_key","page":"Internals","title":"QuantumCitations.format_bibliography_key","text":"Format the key for an entry in a @bibliography block.\n\nformat_bibliography_key(entry, doc)\n\nproduces a string for the rendered key in the bibliography for the given Bibliography.Entry\n\nIt determines a numerical citation key by looking up entry.id in doc.plugins[CitationBibliography].citations. This numerical key is returned in square brackets.\n\nIf overridden, this method should generally match format_citation.\n\n\n\n\n\n","category":"function"},{"location":"internals/#QuantumCitations.format_bibliography_entry","page":"Internals","title":"QuantumCitations.format_bibliography_entry","text":"Format an entry in a @bibliography block.\n\nformat_bibliography_entry(entry)\n\nproduces an HTML string from a Bibliography.Entry that is formatted like in REVTeX and APS journals. That is, the full list of authors with initials for the first names, the italicized tile, and the journal reference (linking to the DOI, if available), ending with the publication year in parenthesis.\n\n\n\n\n\n","category":"function"},{"location":"internals/#QuantumCitations.format_citation","page":"Internals","title":"QuantumCitations.format_citation","text":"Format a @cite citation.\n\nReturns a string that replaces a [key](@cite) citation in markdown text.\n\nThis returns the same numerical key in square brackets that the default format_bibliography_key produces in the rendered bibliography.\n\n\n\n\n\n","category":"function"},{"location":"internals/#Debugging","page":"Internals","title":"Debugging","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"Set the environment variable JULIA_DEBUG=Documenter,QuantumCitations before generating the documentation.","category":"page"},{"location":"syntax/#Syntax","page":"Syntax","title":"Syntax","text":"","category":"section"},{"location":"syntax/#Syntax-for-the-Bibliography-Block","page":"Syntax","title":"Syntax for the Bibliography Block","text":"","category":"section"},{"location":"syntax/#Default-@bibliograph-block","page":"Syntax","title":"Default @bibliograph block","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"```@bibliography\n```","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"renders a bibliography for all references that are cited throughout the entire documentation, see Cited References. The bibliography will not included entries that may be present in the .bib filer but that are not cited.","category":"page"},{"location":"syntax/#Full-@bibliography","page":"Syntax","title":"Full @bibliography","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"```@bibliography\n*\n```","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Renders a bibliography for all references included in the .bib file, not just those cited in the documentation. This corresponds to the behavior of the  DocumenterCitations.jl package.","category":"page"},{"location":"syntax/#Multiple-@bibliography-blocks","page":"Syntax","title":"Multiple @bibliography blocks","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"It is possible to have multiple @bibliography blocks. However, there can only be one \"canonical\" bibliography target for any citation (the location where a citation links to). Any @bibliography block will automatically skip entries that have already been rendered in an earlier @bibliography block. Thus, for two consecutive","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"```@bibliography\n```","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"blocks, the second block will not show anything.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"On the other hand,","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"```@bibliography\n```\n\n```@bibliography\n*\n```","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"will first show the all the cited references and then the non-cited references. This exact setup is shown on the References page.","category":"page"},{"location":"syntax/#Secondary-@bibliography-blocks","page":"Syntax","title":"Secondary @bibliography blocks","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Sometimes it can be useful to render a subset of the bibliography, e.g. to show the references for a particular page. Two things are required to achieve this:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"To filter the bibliography to a specific page (or set of pages), add a Pages field to the @bibliography block.\nTo get around the caveat explained in Multiple @bibliography blocks that there can only be one canonical target for each citation, add Canonical = false to the @bibliography block. The resulting bibliography will be rendered in full, but it will not serve as a link target. This is the only way to have a reference rendered more than once.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"For example,","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"```@bibliography\nPages = [\"index.md\"]\nCanonical = false\n```","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"renders a bibliography only for the citations on the Home page:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Pages = [\"index.md\"]\nCanonical = false","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Usually, you would have this at the bottom of a page, as in Home References.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Another possibility that is appropriate for Citations in docstrings is to write out a shortened bibliography \"by hand\".","category":"page"},{"location":"syntax/#Explicit-references","page":"Syntax","title":"Explicit references","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"A non-canonical @bibliography block can also be used to render a bibliography for a few specific citations keys:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"```@bibliography\nPages = []\nCanonical = false\n\nBrifNJP2010\nGoerzDiploma2010\nGoerzPhd2015\n```","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"renders a bibliography only for the references BrifNJP2010, GoerzDiploma2010, and GoerzPhd2015:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Pages = []\nCanonical = false\n\nBrifNJP2010\nGoerzDiploma2010\nGoerzPhd2015","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"The Pages = [] is required to exclude all other cited references. Note that the numbers [1], [3], and [4] are from the main (canonical) References page.","category":"page"},{"location":"syntax/#Order-of-references","page":"Syntax","title":"Order of references","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"References in a @bibliography are rendered (and numbered) in the order in which they are cited. When there a multiple pages in the documentation, the order in which the pages appear in the navigation bar is relevant.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"For a @bibliography block that includes non-cited references (the * in a Full @bibliography), the Bibliography.sorting_rules become relevant. When instantiating the plugin, a sorting argument can be passed to CitationBibliography(),","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"bib = CitationBibliography(\"refs.bib\", sorting = :nyt)","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"which sorts otherwise non-cited references by author name, year, and title.","category":"page"},{"location":"syntax/#Syntax-for-Citations","page":"Syntax","title":"Syntax for Citations","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"The following syntax is available to create citations in any markdown text:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"[key](@cite) is the default syntax, e.g. Refs [GoerzQ2022](@cite) and [Tannor2007](@cite) which is rendered as \"Refs [2] and [5]\".\n[text](@cite key) can be used to link to a reference from arbitrary text, e.g. [the Semi-AD paper](@cite GoerzQ2022) renders as \"the Semi-AD paper\".","category":"page"},{"location":"syntax/#Citations-in-docstrings","page":"Syntax","title":"Citations in docstrings","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"In docstrings, citations can be made with the same syntax as above. However, since docstrings are also used outside the rendered documentation (e.g., in the REPL help mode), they should be more self-contained.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"The recommended approach is to use a # References section in the docstring with an abbreviated bibliography list that links to the main bibliography. For example,","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"# References\n\n* [GoerzQ2022](@cite) Goerz et al. Quantum 6, 871 (2022)","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"in the documentation of the following Example:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"QuantumCitations.Example","category":"page"},{"location":"syntax/#QuantumCitations.Example","page":"Syntax","title":"QuantumCitations.Example","text":"Example\n\nAn example object citing Ref. [2] with a \"References\" section in its docstring.\n\nReferences\n\n[2] Goerz et al. Quantum 6, 871 (2022)\n\n\n\n\n\n","category":"type"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"(cf. the source of the Example type).","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"If there was no explicit numerical citation in the main text of the docstring,","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"* [Goerz et al. Quantum 6, 871 (2022)](@cite GoerzQ2022)","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"rendering as","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Goerz et al. Quantum 6, 871 (2022)","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"would also have been an appropriate syntax.","category":"page"}]
}
