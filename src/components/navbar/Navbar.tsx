import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
        <div className="container flex justify-between text-lg mx-8">
          Projeto GenerationFarm
          <div className="flex">
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <span className="ml-8"></span>
            <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar categoria</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
