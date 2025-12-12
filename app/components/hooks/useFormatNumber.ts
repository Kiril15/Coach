export const useFormatNumber = (num: number | null | undefined) => {
    if (num === null || num === undefined) {
        return '0';
    }

    if (num < 1000) return num;

    const value = num / 1000

    const formatted = value.toFixed(1).replace(/\.0$/, '')

    return formatted + 'k'
}