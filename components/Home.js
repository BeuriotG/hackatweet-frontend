import AuthIn from './AuthPage/AuthIn';
import AuthUp from './AuthPage/AuthUp';
function Home() {
	return (
		<div>
			<main>
				<section className="flex min-h-screen bg-gradient-to-tr from-pink-50 to-gray-50">
					<div className="min-h-screen w-1/2 bg-[url('https://cdn.pixabay.com/photo/2025/06/04/22/43/facade-9641925_1280.jpg')] bg-cover bg-center"></div>
					<div className="flex min-h-screen w-1/2 items-center justify-center">
						<div className="flex flex-col gap-12 px-6">
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
