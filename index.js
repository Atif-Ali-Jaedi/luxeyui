import chalk from "chalk";
import terminalLink from "terminal-link";

const log = console.log;
const asciiLogo = `
 _                       _ _  _ 
| |   _ _ __   ___  _ _ | | || |
| |_ | | |\ \// ._>| | || ' || |
|___|\`___|/\_\\___.\`_. |\`___'|_|
                   <___'        
`;

log(asciiLogo);
log(
	chalk.yellow(
		"Thank you for installing my library. For comprehensive documentation please visit"
	),
	chalk.blue.bold(
		terminalLink("LuxeyUI documentaion", "https://luxeyui.vercel.app/docs\n")
	)
);
