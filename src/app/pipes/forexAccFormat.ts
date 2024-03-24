import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({
  standalone: true,
  name: 'forexAccFormat'
})
export class ForexAccountingFormatPipe implements PipeTransform {
  transform(value: number, currency_id: number): string {
	if (value > 0)
		return `${value} ${currencyDict[currency_id]}`
	else
		return `(${value * -1}) ${currencyDict[currency_id]}`
  }
}
const currencyDict: { [key: number]: string } = {
	0: "$",
	1: "SGD",
	2: "$"
}

/*

1) Formats currency symbol
2) Formats decimal places based on symbol
3) Formats , or .
4) Formats based on size of number. e.g. 100000 -> 100k or 100000 -> 100rb

*/