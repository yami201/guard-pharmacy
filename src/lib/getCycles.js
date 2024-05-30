import pharmacies from "./locations.json";
import getDatesForCycle from "@/utils/getDatesForCycle";

export const getCycles = () => {
    const dates = getDatesForCycle(12); // Alternating Monday to Thursday and Friday to Sunday cycles
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                pharmacies.map(
                    (comb,index) => {
                        return {
                            south : comb[0],
                            north : comb[1],
                            east : comb[2],
                            west : comb[3],
                            middle : comb[4],
                            start : dates[index].start,
                            end : dates[index].end

                        }
                    }
                )
            );
        }, 2000);
    })
}
