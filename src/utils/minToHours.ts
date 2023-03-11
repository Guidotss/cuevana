export const minTohours = (min?: number) => {
    
    if (!min) return null;

    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours}h ${minutes}m`;
} 