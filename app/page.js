import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-5'>
      <div>
        <h2 className='text-2xl'>Men</h2>
        <div className="py-4">
          <div className="w-64">
            <div className="bg-blue-100 p-5 rounded-xl">
              <Image
                src="/products/greenShirt.png"
                alt="Green shirt"
                width={800}
                height={500}
              />
            </div>
            <div className='mt-2'>
              <h3 className='font-bold text-lg'>Green Shirt</h3>
            </div>
            <p className='text-sm mt-1 leading-4'>lorem</p>
            <div className='flex mt-1'>
              <div className='text-2xl font-bold grow'>$299.99</div>
              <button className='bg-emerald-400 text-white py-1 px-3 rounded'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
