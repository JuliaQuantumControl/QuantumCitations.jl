var documenterSearchIndex = {"docs":
[{"location":"references/#References","page":"References","title":"References","text":"","category":"section"},{"location":"references/#Cited-References","page":"References","title":"Cited References","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"The following references are cited in the documentation. The bibliography is produced with","category":"page"},{"location":"references/","page":"References","title":"References","text":"```@bibliography\n```","category":"page"},{"location":"references/","page":"References","title":"References","text":"","category":"page"},{"location":"references/#Other-References","page":"References","title":"Other References","text":"","category":"section"},{"location":"references/","page":"References","title":"References","text":"The following are non-cited references (everything in the .bib file), included here to show how bibliographies are rendered for various types of materials. The list of references is produced with","category":"page"},{"location":"references/","page":"References","title":"References","text":"```@bibliography\n*\n```","category":"page"},{"location":"references/","page":"References","title":"References","text":"*","category":"page"},{"location":"styling/#CSS-Styling","page":"CSS Styling","title":"CSS Styling","text":"","category":"section"},{"location":"styling/","page":"CSS Styling","title":"CSS Styling","text":"For optimal rendering of the bibliography, place a file citations.css in the docs/src/assets folder of your project, containing, e.g.,","category":"page"},{"location":"styling/","page":"CSS Styling","title":"CSS Styling","text":"using Markdown\ncss_file = joinpath(@__DIR__, \"..\", \"src\", \"assets\", \"citations.css\")\nif isfile(css_file)\n    Markdown.parse(\"\"\"\n    ```css\n    $(read(css_file, String))\n    ```\n    \"\"\")\nend","category":"page"},{"location":"styling/","page":"CSS Styling","title":"CSS Styling","text":"The HTML generated by QuantumCitations also uses CSS classes canonical and noncanonical to distinguish between canonical and non-canonical blocks. While these are not used in the above citations.css, a custom citations.css could implement different formatting for the two types of bibliographies.","category":"page"},{"location":"styling/","page":"CSS Styling","title":"CSS Styling","text":"The citations.css file must be listed as an asset for Documenter.HTML in docs/make.jl:","category":"page"},{"location":"styling/","page":"CSS Styling","title":"CSS Styling","text":"makedocs(\n    bib,\n    # ...\n    format = Documenter.HTML(\n        # ...\n        assets=String[\"assets/citations.css\"],\n    ),\n    # ...\n)","category":"page"},{"location":"gallery/#Citation-Style-Gallery","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"","category":"section"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"The citation style is determined when instantiating the CitationBibliography, via the style argument.","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"The built-in styles are:","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"style=:numeric (default): numeric style\nstyle=:authoryear: author-year style\nstyle=:alpha: alphabetic style","category":"page"},{"location":"gallery/#numeric_style","page":"Citation Style Gallery","title":"Numeric style","text":"","category":"section"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"This is the default style (style=:numeric) used throughout the other pages of this documentation, cf. the Syntax examples.","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"[GoerzQ2022](@cite) renders as \"[2]\"\n[FuerstNJP2014](@cite) renders as \"[7]\"\n[GoerzQ2022](@citet) renders as \"Goerz et al. [2]\"\n[GoerzQ2022](@citep) renders as \"[2]\" — @citep is the same as @cite for this style\n[GoerzQ2022; Eq. (1)](@cite) renders as \"[2, Eq. (1)]\"\n[GoerzQ2022; Eq. (1)](@citet) renders as \"Goerz et al. [2, Eq. (1)]\"\n[GoerzQ2022](@citet*) renders as \"Goerz, Carrasco and Malinovsky [2]\"\n[GoerzQ2022; Eq. (1)](@citet*) renders as \"Goerz, Carrasco and Malinovsky [2, Eq. (1)]\"\n[WinckelIP2008](@citet) renders as \"von Winckel and Borzì [4]\"\n[WinckelIP2008](@Citet) renders as \"Von Winckel and Borzì [4]\"\n[arbitrary text](@cite GoerzQ2022) renders as \"arbitrary text\"","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"References:","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"Pages = [\"gallery.md\"]\nStyle = :numeric\nCanonical = false","category":"page"},{"location":"gallery/#author_year_style","page":"Citation Style Gallery","title":"Author-year style","text":"","category":"section"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"The author-year style (style=:authoryear) formats citations with the author name and publication year. This is the citation style used in Rev. Mod. Phys. (rmp option in REVTeX). The bibliography is sorted alphabetically by author name. The default @cite command is parenthetical (@cite and @citep are equivalent) which is different from the authoryear style in natbib.","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"[GoerzQ2022](@cite) renders as \"(Goerz et al., 2022)\"\n[FuerstNJP2014](@cite) renders as \"(Fürst et al., 2014)\"\n[GoerzQ2022](@citet) renders as \"Goerz et al. (2022)\"\n[GoerzQ2022](@citep) renders as \"(Goerz et al., 2022)\" — @citep is the same as @cite for this style\n[GoerzQ2022; Eq. (1)](@cite) renders as \"(Goerz et al., 2022, Eq. (1))\"\n[GoerzQ2022; Eq. (1)](@citet) renders as \"Goerz et al. (2022, Eq. (1))\"\n[GoerzQ2022](@cite*) renders as \"(Goerz, Carrasco and Malinovsky, 2022)\"\n[GoerzQ2022](@citet*) renders as \"Goerz, Carrasco and Malinovsky (2022)\"\n[GoerzQ2022; Eq. (1)](@cite*) renders as \"(Goerz, Carrasco and Malinovsky, 2022, Eq. (1))\"\n[GoerzQ2022; Eq. (1)](@citet*) renders as \"Goerz, Carrasco and Malinovsky (2022, Eq. (1))\"\n[WinckelIP2008](@citet) renders as \"von Winckel and Borzì (2008)\"\n[WinckelIP2008](@Citet) renders as \"Von Winckel and Borzì (2008)\"\n[arbitrary text](@cite GoerzQ2022) renders as \"arbitrary text\"","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"References:","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"Pages = [\"gallery.md\"]\nStyle = :authoryear\nCanonical = false","category":"page"},{"location":"gallery/#alphabetic_style","page":"Citation Style Gallery","title":"Alphabetic style","text":"","category":"section"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"The style=:alpha formats citations and references like :numeric, except that it uses labels derived from the author names and publication year and sorts the references alphabetically.","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"[GoerzQ2022](@cite) renders as \"[GCM22]\"\n[FuerstNJP2014](@cite) renders as \"[FGP14]\"\n[GoerzQ2022](@citet) renders as \"Goerz et al. [GCM22]\"\n[GoerzQ2022](@citep) renders as \"[GCM22]\" — @citep is the same as @cite for this style\n[GoerzQ2022; Eq. (1)](@cite) renders as \"[GCM22, Eq. (1)]\"\n[GoerzQ2022; Eq. (1)](@citet) renders as \"Goerz et al. [GCM22, Eq. (1)]\"\n[GoerzQ2022](@citet*) renders as \"Goerz, Carrasco and Malinovsky [GCM22]\"\n[GoerzQ2022; Eq. (1)](@citet*) renders as \"Goerz, Carrasco and Malinovsky [GCM22, Eq. (1)]\"\n[WinckelIP2008](@citet) renders as \"von Winckel and Borzì [WB08]\"\n[WinckelIP2008](@Citet) renders as \"Von Winckel and Borzì [WB08]\"\n[arbitrary text](@cite GoerzQ2022) renders as \"arbitrary text\"","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"References:","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"Pages = [\"gallery.md\"]\nStyle = :alpha\nCanonical = false","category":"page"},{"location":"gallery/#custom_styles","page":"Citation Style Gallery","title":"Custom styles","text":"","category":"section"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"In the following, we show two examples for user-defined styles. See the notes on customization on how to generally define a custom style.","category":"page"},{"location":"gallery/#Custom-style:-enumerated-author-year","page":"Citation Style Gallery","title":"Custom style: enumerated author-year","text":"","category":"section"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"In this example, the :authoryear style is used, but the references are shown in an enumerated list.","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"# custom styles are included in docs/make.jl, which is how we get around\n# world-age issues.\nusing Markdown\ncustom_style = joinpath(@__DIR__, \"..\", \"custom_styles\", \"enumauthoryear.jl\")\nif isfile(custom_style)\n    Markdown.parse(\"\"\"\n    ```julia\n    $(read(custom_style, String))\n    ```\n    \"\"\")\nend","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"The important part of the definition is in the last line, indicating that the References should be shown as an enumeration (ordered list, <ol>, in HTML), see below. Meanwhile, citations render exactly as with style=:authoryear:","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"[GoerzQ2022](@cite) renders as \"(Goerz et al., 2022)\"\n[FuerstNJP2014](@cite) renders as \"(Fürst et al., 2014)\"\n[WinckelIP2008](@Citet) renders as \"Von Winckel and Borzì (2008)\"","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"References:","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"Pages = [\"gallery.md\"]\nStyle = :enumauthoryear\nCanonical = false","category":"page"},{"location":"gallery/#Custom-style:-Citation-key-labels","page":"Citation Style Gallery","title":"Custom style: Citation-key labels","text":"","category":"section"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"In this less trivial example, a style similar to :alpha is used, using the citation keys in the .bib file as labels. This would be somewhat more appropriate with citation keys that are shorter that the ones used here (keys similar to those automatically generated with the :alpha style).","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"# custom styles are included in docs/make.jl, which is how we get around\n# world-age issues.\nusing Markdown\ncustom_style = joinpath(@__DIR__, \"..\", \"custom_styles\", \"keylabels.jl\")\nif isfile(custom_style)\n    Markdown.parse(\"\"\"\n    ```julia\n    $(read(custom_style, String))\n    ```\n    \"\"\")\nend","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"[GoerzQ2022](@cite) renders as \"[GoerzQ2022]\"\n[FuerstNJP2014](@cite) renders as \"[FuerstNJP2014]\"\n[GoerzQ2022](@citet) renders as \"Goerz et al. [GoerzQ2022]\"\n[GoerzQ2022](@citep) renders as \"[GoerzQ2022]\" — @citep is the same as @cite for this style\n[GoerzQ2022; Eq. (1)](@cite) renders as \"[GoerzQ2022, Eq. (1)]\"\n[GoerzQ2022; Eq. (1)](@citet) renders as \"Goerz et al. [GoerzQ2022, Eq. (1)]\"\n[GoerzQ2022](@citet*) renders as \"Goerz, Carrasco and Malinovsky [GoerzQ2022]\"\n[GoerzQ2022; Eq. (1)](@citet*) renders as \"Goerz, Carrasco and Malinovsky [GoerzQ2022, Eq. (1)]\"\n[WinckelIP2008](@citet) renders as \"von Winckel and Borzì [WinckelIP2008]\"\n[WinckelIP2008](@Citet) renders as \"Von Winckel and Borzì [WinckelIP2008]\"\n[arbitrary text](@cite GoerzQ2022) renders as \"arbitrary text\"","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"References:","category":"page"},{"location":"gallery/","page":"Citation Style Gallery","title":"Citation Style Gallery","text":"Pages = [\"gallery.md\"]\nStyle = :keylabels\nCanonical = false","category":"page"},{"location":"#QuantumCitations.jl","page":"Home","title":"QuantumCitations.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using Markdown\nusing Pkg\n\nVERSION = Pkg.dependencies()[Base.UUID(\"259add83-af3e-4603-9706-50e341d5574e\")].version\n\ngithub_badge = \"[![Github](https://img.shields.io/badge/JuliaQuantumControl-QuantumCitations.jl-blue.svg?logo=github)](https://github.com/JuliaQuantumControl/QuantumCitations.jl)\"\n\nversion_badge = \"![v$VERSION](https://img.shields.io/badge/version-v$(replace(\"$VERSION\", \"-\" => \"--\"))-green.svg)\"\n\nMarkdown.parse(\"$github_badge $version_badge\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"QuantumCitations.jl is a fork of DocumenterCitations.jl adapted primarily to the conventions of (quantum) physics. It adds support for BibTeX citations in documentation pages generated by Documenter.jl, especially the documentation of the packages in the JuliaQuantumControl organization.","category":"page"},{"location":"","page":"Home","title":"Home","text":"By default, QuantumCitations.jl uses the numeric citation style common in APS journals, see the REVTeX author's guide. Citations are shown in-line, as a number enclosed in square brackets, e.g., \"Optimal control is a cornerstone in the development of quantum technologies [1].\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"QuantumCitations.jl by default differs from DocumenterCitations.jl in the following ways:","category":"page"},{"location":"","page":"Home","title":"Home","text":"A numeric citation style is used by default, with citation numbers that are sequential throughout the entire documentation.\nOnly cited references are included in the main bibliography by default.","category":"page"},{"location":"","page":"Home","title":"Home","text":"QuantumCitations.jl furthermore has several additional features:","category":"page"},{"location":"","page":"Home","title":"Home","text":"The @bibligraphy block can have additional options to customize which references are included, see Syntax for the Bibliography Block.\nIt is possible to generate secondary bibliographies, e.g., for a specific page.\nThere is Syntax to create links to bibliographic references, with arbitrary text.\nThe following variations of the @cite command are supported: @citet, @citep, @cite*, @citet*, @citep*, @Citet, @Citep, @Cite*, @Citet*, @Citep*.  See Syntax for Citations for details.\nCitations can include notes, e.g., \"Eq. (1)\".","category":"page"},{"location":"","page":"Home","title":"Home","text":"In addition to the default numeric style, built-in author-year and alphabetic styles are available. It is possible to extend these by defining arbitrary custom styles.","category":"page"},{"location":"#Installation-instructions","page":"Home","title":"Installation instructions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can install the latest version of QuantumCitations.jl using the built-in package manager (accessed by pressing ] in the Julia command prompt) to add the package and instantiate/build all dependencies","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia>]\npkg> add QuantumCitations","category":"page"},{"location":"#Telling-Documenter.jl-about-your-bibliography","page":"Home","title":"Telling Documenter.jl about your bibliography","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"First, place a BibTeX refs.bib file in the docs/src folder of your project.  Then, in docs/make.jl, instantiate the CitationBibliography plugin and pass it to makedocs:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using QuantumCitations\n\nbib = CitationBibliography(\n    joinpath(@__DIR__, \"src\", \"refs.bib\");\n    style=:numeric\n)\nmakedocs(bib, ...)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Somewhere in your documentation, like a References page, include a markdown block","category":"page"},{"location":"","page":"Home","title":"Home","text":"```@bibliography\n```","category":"page"},{"location":"","page":"Home","title":"Home","text":"to insert the bibliography for all cited references in the project. See Syntax for the Bibliography Block for more options. You will also want to add custom CSS Styling to your documentation to improve the rendering of your bibliography.","category":"page"},{"location":"#How-to-cite-references-in-your-documentation","page":"Home","title":"How to cite references in your documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can put citations anywhere in your docs, both in the markdown pages and in the docstrings of any functions that are shown as part of the API documentation: The basic syntax is, e.g., [GoerzQ2022](@cite), for a BibTeX key GoerzQ2022 in refs.bib,  which will be rendered in the default numeric style as \"[2]\".  See Syntax for Citations for more details.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Clicking on the citations takes you to the bibliography (\"References\").","category":"page"},{"location":"#Home-References","page":"Home","title":"Home References","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This page cites the following references:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"index.md\"]\nCanonical = false","category":"page"},{"location":"","page":"Home","title":"Home","text":"Also see the full bibliography for further references cited throughout this documentation.","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"CurrentModule = QuantumCitations","category":"page"},{"location":"internals/#Internals","page":"Internals","title":"Internals","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"CitationBibliography","category":"page"},{"location":"internals/#QuantumCitations.CitationBibliography","page":"Internals","title":"QuantumCitations.CitationBibliography","text":"Plugin for enabling bibliographic citations in Documenter.jl.\n\nbib = CitationBibliography(bibfile; style=:numeric)\n\ninstantiates a plugin that must be passed as an (undocumented!) positional argument to Documenter.makedocs.\n\nArguments\n\nbibfile: the name of the BibTeX file from which to read the data.\nstyle: the style to use for the bibliography and all citations. The available built-in styles are :numeric (default), :authoryear, and :alpha. With user-defined styles, this may be an arbitrary name of object.\n\nInternal fields\n\nThe following internal fields are used by the citation pipeline steps. These should not be considered part of the stable API.\n\nentries: dict of citation keys to entries in bibfile\ncitations: ordered dict of citation key to citation number\npage_citations: dict of page file name to set of citation keys cited on page.\n\n\n\n\n\n","category":"type"},{"location":"internals/#Citation-Pipeline","page":"Internals","title":"Citation Pipeline","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"The QuantumCitations.CitationBibliography plugin hooks into the Documenter.Builder.DocumentPipeline[1] between ExpandTemplates (which expands @docs blocks) and CrossReferences. The plugin adds the following three steps:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"[1]: See the documentation of Documenter.Utilities.Selectors for an explanation of Documenter's pipeline concept.","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"CollectCitations\nExpandBibliography\nExpandCitations","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"CollectCitations\nExpandBibliography\nExpandCitations","category":"page"},{"location":"internals/#QuantumCitations.CollectCitations","page":"Internals","title":"QuantumCitations.CollectCitations","text":"Pipeline step to collect citations from all pages.\n\nIt walks all pages in the order they appear in the navigation bar, looking for @cite links. It fills the citations and page_citations attributes of the internal CitationBibliography object.\n\nThus, the order in which CollectCitations encounters citations determines the numerical key that will appear in the rendered documentation (see ExpandBibliography and ExpandCitations).\n\n\n\n\n\n","category":"type"},{"location":"internals/#QuantumCitations.ExpandBibliography","page":"Internals","title":"QuantumCitations.ExpandBibliography","text":"Pipeline step to expand all @bibliography blocks.\n\nRuns after CollectCitations but before ExpandCitations.\n\nEach bibliography is rendered into HTML as a a definition list, a bullet list, or an enumeration depending on bib_html_list_style. For a definition list, the label for each list item is rendered via format_bibliography_label and the full bibliographic reference is rendered via format_bibliography_reference. For bullet lists of enumerations, format_bibliography_label is not used and format_bibliography_reference fully determines the entry.\n\nThe order of the entries in the bibliography is determined by the bib_sorting method for the chosen citation style.\n\n\n\n\n\n","category":"type"},{"location":"internals/#QuantumCitations.ExpandCitations","page":"Internals","title":"QuantumCitations.ExpandCitations","text":"Pipeline step to expand all @cite citations.\n\nThis runs after ExpandBibliography, as it relies on the link targets in the expanded @bibliography blocks.\n\nAll citations are formatted using format_citation.\n\n\n\n\n\n","category":"type"},{"location":"internals/#customization","page":"Internals","title":"Customization","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"A custom style can be created by defining methods for functions listed below that specialize for a user-defined style argument to CitationBibliography. If the style is identified by a simple name, e.g. :mystyle, the method should specialize on Val{:mystyle}, see the examples for custom styles. Beyond that, e.g., if the style needs to implement options or needs to maintain internal state to manage unique citation labels, style can be an object of a custom type.","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"bib_html_list_style\nbib_sorting\nformat_bibliography_label\nformat_bibliography_reference\nformat_citation","category":"page"},{"location":"internals/#QuantumCitations.bib_html_list_style","page":"Internals","title":"QuantumCitations.bib_html_list_style","text":"Identify the type of HTML list associated with a bibliographic style.\n\nbib_html_list_style(style)\n\nmust return one of\n\n:dl (definition list),\n:ul (unordered / bullet list), or\n:ol (ordered list / enumeration),\n\nfor any style that CitationBibliography is instantiated with.\n\n\n\n\n\n","category":"function"},{"location":"internals/#QuantumCitations.bib_sorting","page":"Internals","title":"QuantumCitations.bib_sorting","text":"Identify the sorting associated with a bibliographic style.\n\nbib_sorting(style)\n\nmust return :citation or any of the sorting_rules accepted by Bibliography.sort_bibliography!, e.g. :nyt.\n\n\n\n\n\n","category":"function"},{"location":"internals/#QuantumCitations.format_bibliography_label","page":"Internals","title":"QuantumCitations.format_bibliography_label","text":"Format the label for an entry in a @bibliography block.\n\nformat_bibliography_label(style, entry, citations)\n\nproduces a string for the label in the bibliography for the given Bibliography.Entry. The citations argument is a dict that maps citation keys (entry.id) to the order in which citations appear in the documentation, i.e., a numeric citation key.\n\nFor the default style=:numeric, this returns a label that is the numeric citation key in square brackets, cf. format_citation. In general, this function is used only if bib_html_list_style returns :dl for the given style.\n\n\n\n\n\n","category":"function"},{"location":"internals/#QuantumCitations.format_bibliography_reference","page":"Internals","title":"QuantumCitations.format_bibliography_reference","text":"Format the full reference for an entry in a @bibliography block.\n\nformat_bibliography_reference(style, entry)\n\nproduces an HTML string for the full reference of a Bibliography.Entry. For the default style=:numeric, the result is formatted like in REVTeX and APS journals. That is, the full list of authors with initials for the first names, the italicized tile, and the journal reference (linking to the DOI, if available), ending with the publication year in parenthesis.\n\n\n\n\n\n","category":"function"},{"location":"internals/#QuantumCitations.format_citation","page":"Internals","title":"QuantumCitations.format_citation","text":"Format a @cite citation.\n\ntext = format_citation(\n    style,\n    entry,\n    citations;\n    note=nothing,\n    cite_cmd=:cite,\n    capitalize=false,\n    starred=false\n)\n\nreturns a string that replaces the link text for a markdown citation ([key](@cite) and its variations, see Syntax for Citations and the Citation Style Gallery).\n\nFor the default style=:numeric and [key](@cite), this returns a label that is the numeric citation key in square brackets, cf. format_bibliography_label.\n\nArgument\n\nstyle: The style  to render the citation in, as passed to CitationBibliography\nentry: The Bibliography.Entry that is being cited\ncitations: A dict that maps citation keys (entry.id) to the order in which citations appear in the documentation, i.e., a numeric citation index\nnote: A citation note, e.g. \"Eq. (1)\" in [GoerzQ2022; Eq. (1)](@cite)\ncite_cmd: The citation command, one of :cite, :citet, :citep. Note that, e.g., [Goerz@2022](@Citet*) results in cite_cmd=:citet\ncapitalize: Whether the citation should be formatted to appear at the start of a sentence, as indicated by a capitalized @Cite... command, e.g., [GoerzQ2022](@Citet*)\nstarred: Whether the citation should be rendered in \"extended\" form, i.e., with the full list of authors, as indicated by a * in the citation, e.g., [Goerz@2022](@Citet*)\n\n\n\n\n\n","category":"function"},{"location":"internals/#Debugging","page":"Internals","title":"Debugging","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"Set the environment variable JULIA_DEBUG=Documenter,QuantumCitations before generating the documentation.","category":"page"},{"location":"syntax/#Syntax","page":"Syntax","title":"Syntax","text":"","category":"section"},{"location":"syntax/#Syntax-for-Citations","page":"Syntax","title":"Syntax for Citations","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"The following syntax is available to create citations in any markdown text:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"[key](@cite) is the basic syntax, e.g., Refs. [GoerzQ2022](@cite) and [Tannor2007](@cite) which is rendered in the default numeric style as \"Refs. [2] and [3]\".\n[key; note](@cite) allows to include a note in the citation, e.g., See Ref. [GoerzQ2022; Eq. (1)](@cite) which is rendered as \"See Ref. [2, Eq. (1)]\".\n[text](@cite key) can be used to link to a reference from arbitrary text, e.g., [the Semi-AD paper](@cite GoerzQ2022) renders as \"the Semi-AD paper\".","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"In […](@cite), the following variations can be used instead of @cite:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"@citet: Text-style citation. This embeds the citation in the text flow, e.g., \"As shown by Goerz et al. [2]…\". For the default numeric citations, this is an alternative to \"As shown in Ref. [2]\"\n@citep: Parenthetical citation. For the built-in styles, this is equivalent to just @cite.\n@citet*: Like @citet, but with the full list of authors, e.g., Goerz, Carrasco and Malinovsky [2].\n@cite*/@citep*: Like @cite/@citep, but with the full list of authors (for non-numeric styles where this makes sense).","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Lastly, capitalizing the c in @citet or @citet* ensures that the first letter of the citation is capitalized so that it can be used at the beginning of a sentence, e.g., Von Winckel and Borzì [4] ([WinckelIP2008](@Citet)) versus von Winckel and Borzì [4] ([WinckelIP2008](@citet)).","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"The natbib commands @citealt, @citealp, and @citenum commands are also recognized. They are not supported by any of the built-in style, but  may be handled by custom styles.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"See the Citation Style Gallery for examples for all the possible combinations.","category":"page"},{"location":"syntax/#Citations-in-docstrings","page":"Syntax","title":"Citations in docstrings","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"In docstrings, citations can be made with the same syntax as above. However, since docstrings are also used outside of the rendered documentation (e.g., in the REPL help mode), they should be more self-contained.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"The recommended approach is to use a # References section in the docstring with an abbreviated bibliography list that links to the main bibliography. For example,","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"# References\n\n* [GoerzQ2022](@cite) Goerz et al. Quantum 6, 871 (2022)","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"in the documentation of the following Example:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"QuantumCitations.Example","category":"page"},{"location":"syntax/#QuantumCitations.Example","page":"Syntax","title":"QuantumCitations.Example","text":"Example\n\nAn example object citing Ref. [2] with a \"References\" section in its docstring.\n\nReferences\n\n[2] Goerz et al. Quantum 6, 871 (2022)\n\n\n\n\n\n","category":"type"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"(cf. the source of the Example type).","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"If there was no explicit numerical citation in the main text of the docstring,","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"* [Goerz et al. Quantum 6, 871 (2022)](@cite GoerzQ2022)","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"rendering as","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Goerz et al. Quantum 6, 871 (2022)","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"would also have been an appropriate syntax.","category":"page"},{"location":"syntax/#Syntax-for-the-Bibliography-Block","page":"Syntax","title":"Syntax for the Bibliography Block","text":"","category":"section"},{"location":"syntax/#Default-@bibliograph-block","page":"Syntax","title":"Default @bibliograph block","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"```@bibliography\n```","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"renders a bibliography for all references that are cited throughout the entire documentation, see Cited References. The bibliography will not include entries that may be present in the .bib file, but that are not cited.","category":"page"},{"location":"syntax/#full_bibliography","page":"Syntax","title":"Full @bibliography","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"```@bibliography\n*\n```","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Renders a bibliography for all references included in the .bib file, not just those cited in the documentation. This corresponds to the behavior of the  DocumenterCitations.jl package.","category":"page"},{"location":"syntax/#canonical","page":"Syntax","title":"Multiple @bibliography blocks","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"It is possible to have multiple @bibliography blocks. However, there can only be one \"canonical\" bibliography target for any citation (the location where a citation links to). Any @bibliography block will automatically skip entries that have already been rendered in an earlier @bibliography block. Thus, for two consecutive","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"```@bibliography\n```","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"blocks, the second block will not show anything.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"On the other hand,","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"```@bibliography\n```\n\n```@bibliography\n*\n```","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"will first show all the cited references and then all the non-cited references. This exact setup is shown on the References page.","category":"page"},{"location":"syntax/#noncanonical","page":"Syntax","title":"Secondary @bibliography blocks","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Sometimes it can be useful to render a subset of the bibliography, e.g., to show the references for a particular page. Two things are required to achieve this:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"To filter the bibliography to a specific page (or set of pages), add a Pages field to the @bibliography block.\nTo get around the caveat with multiple @bibliography blocks that there can only be one canonical target for each citation, add Canonical = false to the @bibliography block. The resulting bibliography will be rendered in full, but it will not serve as a link target. This is the only way to have a reference rendered more than once.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"For example,","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"```@bibliography\nPages = [\"index.md\"]\nCanonical = false\n```","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"renders a bibliography only for the citations on the Home page:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Pages = [\"index.md\"]\nCanonical = false","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Usually, you would have this at the bottom of a page, as in Home References.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Another possibility that is appropriate for Citations in docstrings is to write out a shortened bibliography \"by hand\".","category":"page"},{"location":"syntax/#Explicit-references","page":"Syntax","title":"Explicit references","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"A non-canonical @bibliography block can also be used to render a bibliography for a few specific citations keys:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"```@bibliography\nPages = []\nCanonical = false\n\nBrifNJP2010\nGoerzDiploma2010\nGoerzPhd2015\n```","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"renders a bibliography only for the references BrifNJP2010, GoerzDiploma2010, and GoerzPhd2015:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Pages = []\nCanonical = false\n\nBrifNJP2010\nGoerzDiploma2010\nGoerzPhd2015","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"The Pages = [] is required to exclude all other cited references. Note that the numbers [1], [5], and [6] are from the main (canonical) References page.","category":"page"},{"location":"syntax/#Order-of-references","page":"Syntax","title":"Order of references","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"In the default numeric style, references in a @bibliography are rendered (and numbered) in the order in which they are cited. When there are multiple pages in the documentation, the order in which the pages appear in the navigation bar is relevant.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Non-cited references (* in a full bibliography) will appear in the order they are listed in the underlying .bib file. That order may be changed by sorting it explicitly:","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"bib = CitationBibliography(\"refs.bib\")\n\nusing Bibliography\nsort_bibliography!(bib.bib, :nyt)  # name-year-title","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"In general, the citation style determines the order of the references, see the Citation Style Gallery.","category":"page"},{"location":"syntax/#Syntax-for-the-.bib-file","page":"Syntax","title":"Syntax for the .bib file","text":"","category":"section"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"The refs.bib file is in the standard BibTeX format. It must be parsable by BibParser.jl.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"The use of @string macros for abbreviated journal names is encouraged, with the caveat of #31 and #32 in the BibParser.jl issues.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"Also, even though QuantumCitations has limited support for escaped symbols, the full use of unicode is both supported and strongly encouraged.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"All entries should have a Doi field, or a Url field if no DOI is available.","category":"page"},{"location":"syntax/","page":"Syntax","title":"Syntax","text":"You may be interested in using the getbibtex script to generate consistent .bib files.","category":"page"}]
}
