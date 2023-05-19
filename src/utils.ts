export const capitalize = (value: string) =>
	value.charAt(0).toUpperCase() + value.slice(1);

export const iterateNumerical = <T>(
	value: number,
	callbackfn: (value: number) => T
) => Array.from({ length: value }, (_, i) => callbackfn(i + 1));
