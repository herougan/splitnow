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
export class AccountingFormatPipe implements PipeTransform {
  transform(value: number): string {
	if (value > 0)
		return `${value}`
	else
		return `(${value})`
  }
}

/*

1) Formats currency symbol
2) Formats decimal places based on symbol
3) Formats , or .
4) Formats based on size of number. e.g. 100000 -> 100k or 100000 -> 100rb

*/