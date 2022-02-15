
import Header from './components/Header';
import Container from './components/Container';
import Banner from './components/Banner';

import {useState} from 'react'
import ReactDOM from 'react-dom'

import AddCostModal from './modals/AddCostModal';
import { useSelector, useDispatch } from 'react-redux'
import Cost from './models/Cost';
import {costsActions} from './store/costs-slice';

function App() {
  const costs = [...useSelector<{costs:Cost[]}, Cost[]>(state => state.costs)]
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch()

  const toggleModal = ()=>{
    setIsModalOpen(prev => !prev)
  }

  const removeCost = (id:string)=>{
    dispatch(costsActions.remove(id))
  }
  return (
    <div className="w-screen h-screen bg-tertiary top-0 left-0 absolute overflow-y-auto">

      {
      isModalOpen 
      && 
      // <AddCostModal toggleModal={toggleModal}/>
      ReactDOM.createPortal(<AddCostModal toggleModal={toggleModal}/>, document.getElementById('modal') as HTMLElement)
      
      }
      


      <Header toggleModal={toggleModal}/>

      <Container>
        <Banner/>
        {costs.length > 0 &&
          costs.map((cost:Cost) => (
            <div onClick={()=>{removeCost(cost.id)}}className='cursor-pointer w-full bg-black/10 my-3 rounded-xl p-3 flex flex-wrap items-center content-center gap-5 hover:bg-red-300' key={cost.id}>
              <h1 className='p-4 bg-primary text-light font-bold text-xl rounded-xl'>${new Intl.NumberFormat().format(cost.costAmount) }</h1>
              <h1 className=' text-primary capitalize grow font-bold text-xl rounded-xl'>{cost.title}</h1>
              <h1>{cost.date}</h1>
            </div>
          ))
        }

      </Container>
    </div>
  );
}

export default App;
