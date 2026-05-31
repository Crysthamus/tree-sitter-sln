# tree-sitter-sln
This grammar implements the [.sln](https://learn.microsoft.com/en-us/visualstudio/extensibility/internals/solution-dot-sln-file?view=visualstudio) format.

## Overview
An example sln file:
```sln
Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio 2012
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFCC}") = "github", "github.csproj", "{CA437F0B-8A21-4016-89FB-0D5BBF2AD13F}"
EndProject
Global
	GlobalSection(SolutionConfigurationPlatforms) = preSolution
	Debug|Any CPU = Debug|Any CPU
	ExportDebug|Any CPU = ExportDebug|Any CPU
	ExportRelease|Any CPU = ExportRelease|Any CPU
	EndGlobalSection
	GlobalSection(ProjectConfigurationPlatforms) = postSolution
		{BA427D0B-8A21-4014-89FB-0D5BBF2AD12F}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
		{BA427D0B-8A21-4014-89FB-0D5BBF2AD12F}.Debug|Any CPU.Build.0 = Debug|Any CPU
		{BA427D0B-8A21-4014-89FB-0D5BBF2AD12F}.ExportDebug|Any CPU.ActiveCfg = ExportDebug|Any CPU
		{BA427D0B-8A21-4014-89FB-0D5BBF2AD12F}.ExportDebug|Any CPU.Build.0 = ExportDebug|Any CPU
		{BA427D0B-8A21-4014-89FB-0D5BBF2AD12F}.ExportRelease|Any CPU.ActiveCfg = ExportRelease|Any CPU
		{BA427D0B-8A21-4014-89FB-0D5BBF2AD12F}.ExportRelease|Any CPU.Build.0 = ExportRelease|Any CPU
	EndGlobalSection
EndGlobal
```

## Reference
I could not really find a "reference" of the `sln` file format and hence it has been written based off of those of c# projects and (mostly) from
[msbuild](https://github.com/dotnet/msbuild/blob/main/src/Build/Construction/Solution/SolutionFile.cs)

## Publishing
Please have a look in the tree-sitter [documentation](https://tree-sitter.github.io/tree-sitter/creating-parsers/6-publishing.html)

