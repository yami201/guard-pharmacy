import ClosestLocation from "@/components/closest-location.component";
import PharmaciesList from "@/components/pharmacies-list.component";
import UserLocationProvider from "@/context/user-location.context";
import { getPharmacies } from "@/lib/getPharmacies";

export default async function Home() {
  const pharmacies = await getPharmacies()
  const date = new Date()
  return (
      <div className="lg:mx-20 lg:mt-10">
        <header className="w-full flex justify-between">
          <h1 className="text-primary text-xl mb-6">Pharmacie de garde</h1>
          <span>{new Date().toLocaleDateString().split("T")[0]}</span>
        </header>
        <UserLocationProvider >
          <ClosestLocation pharmacies={pharmacies}/>
          <PharmaciesList pharmacies={pharmacies}/>
        </UserLocationProvider>
      </div>
  );
}
