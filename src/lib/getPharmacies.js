import { getCycles } from "./getCycles";

export const getPharmacies = async () => {
    const cycles = await getCycles()
    const date = new Date();
    const comb = cycles.find(
        (cycle) => {
            const startDate = new Date(cycle.start);
            const endDate = new Date(cycle.end);
            return date >= startDate && date <= endDate;
        }
    );

    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve(Object.values(comb).slice(0,5));
        }, 2000);
    })
};
