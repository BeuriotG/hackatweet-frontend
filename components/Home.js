import AuthUp from './AuthUp';
function Home() {
  return (
    <div>
      <main className="">
        <section className="bg-pink-50 min-h-screen flex">
          <div className="bg-[url('https://cdn.pixabay.com/photo/2025/06/04/22/43/facade-9641925_1280.jpg')] min-h-screen w-1/2 bg-cover bg-center"></div>
          <div className="min-h-screen w-1/2">
            <h1 className="font-mono text-8xl">See what's happening</h1>
            <AuthUp />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
