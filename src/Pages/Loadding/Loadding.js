import { useSelector } from 'react-redux'

export default function Loadding() {
  let { loadding } = useSelector(state => state.LoaddingReducer)
  return (
    loadding ? <div style={{ position: 'fixed', top: '0', left: '0', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,.5)', zIndex: '99' }}>
        <div className='text-6xl font-mono text-red-500 font-bold'>
          
          <i> Loading...</i>
        </div>
    </div>
      : ''
  )
}
