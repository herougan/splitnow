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
  name: 'accountingFormat'
})
export class AccountingFormatPipe implements PipeTransform {
  transform(value: number): string {
	if (value > 0)
		return `${value}`
	else
		return `(${value})`
  }
}