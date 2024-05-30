import { getCycles } from "@/lib/getCycles";

const ViewCycles = async () => {
    const cycles = await getCycles();

    return ( 
        <div>
            <h1>La liste des pharmacies de garde</h1>
            <ul className="border border-primary rounded-lg shadow"> 
                {
                    cycles.map((cycle, index) => {
                        return (
                            <li className="flex lg:border border-primary" key={index}>
                                <span className={`p-2 flex justify-center items-center border-r ${index !== cycles.length - 1 && "max-lg:border-b"} border-primary w-[50px]`}>{index + 1}</span>
                                <div  className="w-full lg:flex  lg:p-2">
                                    <div className="flex lg:hidden">
                                        <div className="flex-col w-1/2 border-r border-primary">
                                            <h2 className="p-2 border-b border-primary">{cycle.south.name}</h2>
                                            <h2 className="p-2">{cycle.north.name}</h2>
                                        </div>
                                        <div className="flex-col justify-end w-1/2">
                                            <h2 className="p-2 border-b border-primary">{cycle.east.name}</h2>
                                            <h2 className="p-2">{cycle.west.name}</h2>
                                        </div>
                                    </div>
                                    <h2 className="max-lg:hidden flex items-center justify-center w-1/6 ">{cycle.south.name}</h2>
                                    <h2 className="max-lg:hidden flex items-center justify-center border-x border-primary w-1/6 ">{cycle.north.name}</h2>
                                    <h2 className="max-lg:hidden flex items-center justify-center w-1/6 ">{cycle.west.name}</h2>
                                    <h2 className="max-lg:hidden flex items-center justify-center border-x border-primary w-1/6 ">{cycle.east.name}</h2>
                                    <h2 className="max-lg:hidden flex items-center justify-center w-1/6  ">{cycle.middle.name}</h2>
                                    <h2 className="max-lg:hidden w-1/6 text-center border-l border-primary">{cycle.start}<br/>{cycle.end}</h2>
                                    <h2 className={`lg:hidden p-2 w-full flex justify-center border-y border-primary`}>{cycle.middle.name}</h2>
                                    <h2 className={`lg:hidden p-2 w-full flex justify-center ${index !== cycles.length - 1 && "max-lg:border-b"} border-primary`}>{cycle.start} - {cycle.end}</h2>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
     );
}
 
export default ViewCycles;
