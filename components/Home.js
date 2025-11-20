import AuthIn from './AuthIn';
import AuthUp from './AuthUp';
function Home() {
  return (
    <div>
      <main className="">
        <section className="bg-pink-50 min-h-screen flex">
          <div className="bg-[url('https://cdn.pixabay.com/photo/2025/06/04/22/43/facade-9641925_1280.jpg')] min-h-screen w-1/2 bg-cover bg-center"></div>
          <div className="min-h-screen w-1/2 flex items-center justify-center">
            <div className="px-6 flex flex-col gap-12">
              <h1 className="font-mono text-8xl">Welcome back&nbsp;!</h1>
              <div className="flex gap-4">
                <AuthUp />
                <AuthIn />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
