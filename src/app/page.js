import ClosestLocation from "@/components/closest-location.component";
import PharmaciesList from "@/components/pharmacies-list.component";
import UserLocationProvider from "@/context/user-location.context";
import { getCycles } from "@/lib/getCycles";
import { getPharmacies } from "@/lib/getPharmacies";
import Link from "next/link";

export default async function Home() {
  const pharmacies = await getPharmacies()
  return (
      <div className="lg:mx-20 lg:mt-10">
        <header className="w-full flex justify-between">
          <h1 className="text-primary text-xl mb-6">Pharmacie de garde</h1>
          <span>{new Date().toLocaleDateString().split("T")[0]}</span>
        </header>
        <div className="w-full flex justify-center mb-5">
          <Link href="/view-cycles" className="bg-primary rounded-lg shadow text-white px-3 py-2 border transtion duration-300 border-primary hover:text-primary hover:bg-transparent">
            Voir la liste des pharmacies de garde
          </Link>
        </div>
        <UserLocationProvider >
          <ClosestLocation pharmacies={pharmacies}/>
          <PharmaciesList pharmacies={pharmacies}/>
        </UserLocationProvider>

      </div>
  );
}
