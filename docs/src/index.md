# QuantumCitations.jl

```@eval
using Markdown
using Pkg

VERSION = Pkg.dependencies()[Base.UUID("259add83-af3e-4603-9706-50e341d5574e")].version

github_badge = "[![Github](https://img.shields.io/badge/JuliaQuantumControl-QuantumCitations.jl-blue.svg?logo=github)](https://github.com/JuliaQuantumControl/QuantumCitations.jl)"

version_badge = "![v$VERSION](https://img.shields.io/badge/version-v$(replace("$VERSION", "-" => "--"))-green.svg)"

Markdown.parse("$github_badge $version_badge")
```

[QuantumCitations.jl](https://github.com/JuliaQuantumControl/QuantumCitations.jl) is a fork of [DocumenterCitations.jl](https://github.com/ali-ramadhan/DocumenterCitations.jl) adapted primarily to the conventions of (quantum) physics. It adds support for BibTeX citations in documentation pages generated by [Documenter.jl](https://github.com/JuliaDocs/Documenter.jl), especially the documentation of the packages in the [JuliaQuantumControl organization](https://github.com/JuliaQuantumControl).

By default, [QuantumCitations.jl](https://github.com/JuliaQuantumControl/QuantumCitations.jl) uses the numeric citation style common in [APS journals](https://journals.aps.org), see the [REVTeX author's guide](https://www.ctan.org/tex-archive/macros/latex/contrib/revtex/auguide). Citations are shown in-line, as a number enclosed in square brackets, e.g., "Optimal control is a cornerstone in the development of quantum technologies [BrifNJP2010](@cite)."

[QuantumCitations.jl](https://github.com/JuliaQuantumControl/QuantumCitations.jl) by default differs from [DocumenterCitations.jl](https://github.com/ali-ramadhan/DocumenterCitations.jl) in the following ways:

* A numeric citation style is used by default, with citation numbers that are sequential throughout the entire documentation.
* Only cited references are included in the main bibliography by default.

[QuantumCitations.jl](https://github.com/JuliaQuantumControl/QuantumCitations.jl) furthermore has several additional features:

* The `@bibligraphy` block can have additional options to customize which references are included, see [Syntax for the Bibliography Block](@ref).
* It is possible to generate [secondary bibliographies](@ref noncanonical), e.g., for a specific page.
* There is [Syntax](@ref) to create links to bibliographic references, with arbitrary text.
* The following variations of the `@cite` command are supported: `@citet`, `@citep`, `@cite*`, `@citet*`, `@citep*`, `@Citet`, `@Citep`, `@Cite*`, `@Citet*`, `@Citep*`.  See [Syntax for Citations](@ref) for details.
* Citations can include notes, e.g., "Eq. (1)".

In addition to the default [numeric style](@ref numeric_style), built-in [author-year](@ref author_year_style) and [alphabetic](@ref alphabetic_style) styles are available. It is possible to extend these by defining arbitrary [custom styles](@ref custom_styles).


## Installation instructions

You can install the latest version of [QuantumCitations.jl](https://github.com/JuliaQuantumControl/QuantumCitations.jl) using the [built-in package manager](https://docs.julialang.org/en/v1/stdlib/Pkg/)

```julia
pkg> add QuantumCitations
```

In most cases, you will just want to have `QuantumCitations` in the project that builds your documentation (e.g. [`test/Project.toml`](https://github.com/JuliaQuantumControl/QuantumCitations.jl/blob/master/test/Project.toml)). Thus, you can also simply add

```
QuantumCitations = "259add83-af3e-4603-9706-50e341d5574e"
```

to the `[deps]` section of the relevant `Project.toml` file.


## Telling Documenter.jl about your bibliography

First, place a BibTeX [`refs.bib`](./refs.bib) file in the `docs/src` folder of your project.  Then, in [`docs/make.jl`](https://github.com/JuliaQuantumControl/QuantumCitations.jl/blob/master/docs/make.jl), instantiate the [`CitationBibliography`](@ref) plugin and pass it to [`makedocs`](https://documenter.juliadocs.org/stable/lib/public/#Documenter.makedocs):

```julia
using QuantumCitations

bib = CitationBibliography(
    joinpath(@__DIR__, "src", "refs.bib");
    style=:numeric
)
makedocs(bib, ...)
```

Somewhere in your documentation, like a [References](@ref) page, include a markdown block

~~~markdown
# References

```@bibliography
```
~~~

to insert the bibliography for all cited references in the project. See [Syntax for the Bibliography Block](@ref) for more options.

You will also want to add custom [CSS Styling](@ref) to your documentation to improve the rendering of your bibliography.

Thus, a [full `docs/make.jl` file](https://github.com/JuliaQuantumControl/QuantumCitations.jl/blob/master/docs/make.jl) might look something like this:

```julia
using QuantumCitations
using Documenter
using Pkg

PROJECT_TOML = Pkg.TOML.parsefile(joinpath(@__DIR__, "..", "Project.toml"))
VERSION = PROJECT_TOML["version"]
NAME = PROJECT_TOML["name"]
AUTHORS = join(PROJECT_TOML["authors"], ", ") * " and contributors"
GITHUB = "https://github.com/JuliaQuantumControl/QuantumCitations.jl"

bib = CitationBibliography(joinpath(@__DIR__, "src", "refs.bib"))

makedocs(
    bib,
    authors=AUTHORS,
    sitename="QuantumCitations.jl",
    strict=true,
    format=Documenter.HTML(
        prettyurls=true,
        canonical="https://juliaquantumcontrol.github.io/QuantumCitations.jl",
        assets=String["assets/citations.css"],
        footer="[$NAME.jl]($GITHUB) v$VERSION docs powered by [Documenter.jl](https://github.com/JuliaDocs/Documenter.jl)."
    ),
    pages=[
        "Home"                   => "index.md",
        "Syntax"                 => "syntax.md",
        "Citation Style Gallery" => "gallery.md",
        "CSS Styling"            => "styling.md",
        "Internals"              => "internals.md",
        "References"             => "references.md",
    ]
)
deploydocs(; repo="github.com/JuliaQuantumControl/QuantumCitations.jl.git")
```


## How to cite references in your documentation

You can put citations anywhere in your docs, both in the markdown pages and in the docstrings of any functions that are shown as part of the API documentation: The basic syntax is, e.g., `[GoerzQ2022](@cite)`, for a BibTeX key [GoerzQ2022](@cite GoerzQ2022) in [`refs.bib`](./refs.bib),  which will be rendered in the default numeric style as "[GoerzQ2022](@cite)".  See [Syntax for Citations](@ref) for more details.

Clicking on the citations takes you to the bibliography ("[References](@ref)").

## Examples

The following is a list of some projects that use `QuantumCitations`:

* [QuantumPropagators](https://juliaquantumcontrol.github.io/QuantumPropagators.jl)
* [QuantumControl](https://juliaquantumcontrol.github.io/QuantumControl.jl/)
* [TwoQubitWeylChamber](https://juliaquantumcontrol.github.io/TwoQubitWeylChamber.jl)

## Home References

This page cites the following references:

```@bibliography
Pages = ["index.md"]
Canonical = false
```

Also see the [full bibliography](@ref References) for further references cited throughout this documentation.
