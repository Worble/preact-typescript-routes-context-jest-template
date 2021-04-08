module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				corejs: { version: "3.10" },
				useBuiltIns: "usage",
			},
		],
		["@babel/preset-react", { runtime: "automatic", importSource: "preact" }],
		["@babel/preset-typescript", { jsxPragma: "h" }],
	],
};
