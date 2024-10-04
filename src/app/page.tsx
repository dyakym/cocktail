import Sidebar from "./(components)/Sidebar";

export default function Home() {
  return (
    <main className=" flex w-full flex-col bg-gray-50 dark:bg-gray-600">
         <Sidebar></Sidebar>
       <div className={`flex flex-col gap-8 row-start-2 items-center sm:items-start md:pl-64`}>
      Cocktail
      </div>
    </main>
  );
}
