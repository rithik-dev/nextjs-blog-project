export const formatDate = (date: string): string => new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: "long",
    year: "numeric",
});
