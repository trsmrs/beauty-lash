

export default function Home() {
    return (
        <div id="main-container" className="border bg-pink-200 min-h-dvh mx-auto rounded-2xl mb-10">
            {/* cabeçalho */}
            <div className="fixed w-full left-0 top-0 bg-pink-700 h-16 flex
              justify-end pr-4 items-center gap-2
            ">
                <span className="text-2xl">Usuário X</span>
                <img src="/img/model.png" alt="user" className="rounded-full mr-2 bg-slate-950 w-10 h-10" />
            </div>

            <div className="bg-red-500 rounded-4xl mt-15
                flex justify-center h-40 p-2 w-[95%] mx-auto
            ">
                <h3 className="font-bold">Look Awesome & Save Some</h3>
                <img src="/img/model.png" alt="modelo-foto" className="w-40" />
            </div>

            {/* Categorias */}
            <div id="categorias" className="text-left mt-4">

                <h2 className="font-bold mt-20 ml-5 text-2xl">Categorias</h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mt-2 gap-4 p-2 ">
                    <div className="bg-red-200 rounded-md flex flex-wrap p-2">
                        <span className="text-black">Corte</span>
                        <img src="/img/model.png" alt="" />
                    </div>
                    <div className="bg-red-200 rounded-md flex flex-wrap p-2">
                        <span className="text-black">Corte</span>
                        <img src="/img/model.png" alt="" />
                    </div>
                    <div className="bg-red-200 rounded-md flex flex-wrap p-2">
                        <span className="text-black">Corte</span>
                        <img src="/img/model.png" alt="" />
                    </div>
                    <div className="bg-red-200 rounded-md flex flex-wrap p-2">
                        <span className="text-black">Corte</span>
                        <img src="/img/model.png" alt="" />
                    </div>
                    <div className="bg-red-200 rounded-md flex flex-wrap p-2">
                        <span className="text-black">Corte</span>
                        <img src="/img/model.png" alt="" />
                    </div>
                    <div className="bg-red-200 rounded-md flex flex-wrap p-2">
                        <span className="text-black">Corte</span>
                        <img src="/img/model.png" alt="" />
                    </div>
                    <div className="bg-red-200 rounded-md flex flex-wrap p-2">
                        <span className="text-black">Corte</span>
                        <img src="/img/model.png" alt="" />
                    </div>
                    <div className="bg-red-200 rounded-md flex flex-wrap p-2">
                        <span className="text-black">Corte</span>
                        <img src="/img/model.png" alt="" />
                    </div>
                </div>
            </div>

            {/* Profissionais */}

            <div id="profissionais" className="text-left">

                <h2 className="font-bold mt-20 ml-5 text-2xl">Esteticistas</h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mt-2 gap-4 p-2">

                    <div className="bg-red-200 rounded-md flex flex-wrap p-2">
                        <span className="text-black">Fulana</span>
                        <img src="/img/model.png" alt="prosissional-img" />
                        <div className="flex mt-2">
                            <img src="https://img.icons8.com/?size=100&id=85911&format=png&color=000000" alt="phone" width={28} />
                            +55 51 999999
                        </div>
                    </div>
                    <div className="bg-red-200 rounded-md flex flex-wrap p-2">
                        <span className="text-black">Fulana</span>
                        <img src="/img/model.png" alt="prosissional-img" />
                        <div className="flex mt-2">
                            <img src="https://img.icons8.com/?size=100&id=85911&format=png&color=000000" alt="phone" width={28} />
                            +55 51 999999
                        </div>
                    </div>
                    <div className="bg-red-200 rounded-md flex flex-wrap p-2">
                        <span className="text-black">Fulana</span>
                        <img src="/img/model.png" alt="prosissional-img" />
                        <div className="flex mt-2">
                            <img src="https://img.icons8.com/?size=100&id=85911&format=png&color=000000" alt="phone" width={28} />
                            +55 51 999999
                        </div>
                    </div>
                </div>

            </div>

            <div className="fixed w-full bottom-0 left-0 bg-pink-700 h-15 flex justify-evenly">
                <button>
                    <img src="https://img.icons8.com/?size=100&id=I7e8MmWNkLY0&format=png&color=000000" alt="" className="w-15" />
                </button>
                <button>
                    <img src="https://img.icons8.com/?size=100&id=10053&format=png&color=000000" alt="" className="w-15" />
                </button>
                <button>
                    <img src="https://img.icons8.com/?size=100&id=I7e8MmWNkLY0&format=png&color=000000" alt="" className="w-15" />
                </button>
                <button>
                    <img src="https://img.icons8.com/?size=100&id=I7e8MmWNkLY0&format=png&color=000000" alt="" className="w-15" />
                </button>
            </div>
        </div>
    )
}