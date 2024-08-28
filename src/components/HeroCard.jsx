import { heroCard } from '../constants/data'


const HeroCard = () => {
    return (
        <div className='flex justify-around max-w-[1140px] shadow-2xl shadow-black/10 bg-white h-[200px] rounded-2xl'>
            {heroCard.map((item, i) => {
                return <div key={i} className='flex items-center gap-8'>
                    <div className='bg-app_red/20 rounded-full w-fit p-4'>
                        <item.icon className='text-app_red size-5' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-black text-2xl'>{item.value + "+"}</span>
                        <span className='text-xl capitalize'>{item.name}</span>
                    </div>
                </div>
            })}
        </div>
    )
}

export default HeroCard
