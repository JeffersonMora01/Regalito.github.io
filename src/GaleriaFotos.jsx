import React from 'react'
import DataGaleria from './Data/DataGaleria';

const GaleriaFotos = () => {

    const galery = DataGaleria();

    
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 min-h-screen">
  
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {galery.map((foto) => (
                        <div key={foto.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden 
                            rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                                <img
                                    src={foto.imageSrc}
                                    alt={foto.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-700">
                                        <a href={foto.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {foto.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{foto.history}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GaleriaFotos