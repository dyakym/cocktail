import CocktailList from "./(components)/CocktailList";
import Sidebar from "./(components)/Sidebar";

export default function Home() {
  return (
    <main className=" flex w-full bg-gray-50 dark:bg-gray-600">
      <aside className="w-1/4 max-w-[280px] bg-white dark:bg-gray-700">
      <Sidebar></Sidebar>
       </aside>
       
       <section className="w-3/4 p-8">
        <div className="flex flex-col  gap-8">
          <h2 className="text-xl font-bold">Cocktail List</h2>
          <CocktailList></CocktailList>
          </div>
      </section>
    </main>
  );
}
