// Function to format date in "Day, Month Date" format
const formatDate = (date) => {
    return date.toLocaleDateString().split("T")[0];
};

// Function to get dates for each cycle
const getDatesForCycle = (cycleCount) => {
    const startDate = new Date(2024, 3, 29); // April is 3 because months are 0-indexed
    const dates = [];

    dates.push({
        start: formatDate(startDate),
        end: formatDate(new Date(startDate.setDate(startDate.getDate() + 3))) // Monday to Thursday cycle
    });

    for (let i = 1; i < cycleCount; i++) {
        const currentDate = new Date(dates[i - 1].end);
        currentDate.setDate( new Date(dates[i - 1].end).getDate() + 1);

        const endDate = new Date(currentDate);
        if (i % 2 === 0) {
            endDate.setDate(currentDate.getDate() + 3); // Monday to Thursday cycle
        } else {
            endDate.setDate(currentDate.getDate() + 2); // Friday to Sunday cycle
        }

        dates.push({
            start: formatDate(currentDate),
            end: formatDate(endDate)
        });
    }

    return dates;
};

export default getDatesForCycle;
