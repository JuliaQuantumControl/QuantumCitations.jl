using QuantumCitations
using Documenter
using Pkg

PROJECT_TOML = Pkg.TOML.parsefile(joinpath(@__DIR__, "..", "Project.toml"))
VERSION = PROJECT_TOML["version"]
NAME = PROJECT_TOML["name"]
AUTHORS = join(PROJECT_TOML["authors"], ", ") * " and contributors"
GITHUB = "https://github.com/JuliaQuantumControl/QuantumCitations.jl"

bib = CitationBibliography(joinpath(@__DIR__, "src", "refs.bib"), sorting=:nyt)

println("Starting makedocs")

makedocs(
    bib,
    sitename="QuantumCitations.jl",
    strict=true,
    format=Documenter.HTML(
        prettyurls=true,
        canonical="https://juliaquantumcontrol.github.io/QuantumCitations.jl",
        assets=String["assets/citations.css"],
        footer="[$NAME.jl]($GITHUB) v$VERSION docs powered by [Documenter.jl](https://github.com/JuliaDocs/Documenter.jl)."
    ),
    pages=[
        "Home"        => "index.md",
        "Syntax"      => "syntax.md",
        "CSS Styling" => "styling.md",
        "Internals"   => "internals.md",
        "References"  => "references.md",
    ]
)

println("Finished makedocs")

deploydocs(; repo="github.com/JuliaQuantumControl/QuantumCitations.jl.git")