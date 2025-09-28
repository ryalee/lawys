import React from 'react'

import { services } from './data/services';
import { diferenciais } from './data/diferenciais';

import logo from './assets/images/logo.png';
import hero from './assets/images/main/hero.png';
import about from './assets/images/main/about.png';
import diferencial from './assets/images/main/diferenciais.png';

function App() {
  return (
    <>
      <header className='flex items-center px-[10px] py-[20px]'>
        <img 
          src={logo}
          className='w-[100px] md:w-[80px]'
        />
        <h1 className='logo'>Lawys Advocacia</h1>
      </header>

      <main className='mt-[80px] flex flex-col gap-[150px] md:mt-[-50px]'>
        <section className='flex flex-col items-center p-[20px] md:flex-row md:justify-around md:px-[100px]'>
          <div className='flex flex-col gap-10'>
            <h1 className='hero_title'>Cuidamos dos seus direitos como se fossem nossos.</h1>
            <p className='font-medium text-[20pt] md:w-[90%] md:text-[18pt]'>Aqui, cada cliente é ouvido, orientado e acompanhado com clareza, ética e dedicação em cada etapa do processo.</p>
          </div>

          <img 
            src={hero} 
            className='w-[500px] mt-[40px] md:w-[400px]'
          />

          <button className='bg-accent text-light w-[230px] h-[70px] rounded-[10px] text-[15pt] mt-[20px] md:absolute md:mt-[550px] md:ml-[-20px]'>Agende sua consulta</button>
        </section>

        <section className='p-[20px] md:px-[100px]'>
          <div>
            <h1 className='title'>Quem somos?</h1>
          </div>

          <div className='mt-[20px] md:flex md:items-center md:gap-4'>
            <img 
              src={about}
              className='md:w-[500px] '
            />

            <p className='font-medium text-[17pt] text-justify mt-[20px]'>
              Na Lawys, acreditamos que a advocacia vai além dos processos e papéis.<br />Nosso papel é estar ao lado de quem confia em nós, oferecendo não só conhecimento jurídico, mas também segurança e tranquilidade.<br />Trabalhamos de forma transparente, falando a sua língua, para que entenda cada detalhe do seu caso e tome sempre as melhores decisões.
            </p>
          </div>
        </section>

        <section className='p-[20px] md:px-[100px]'>
          <h1 className='title'>Nossas Atuações</h1>

          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row justify-center gap-6 mt-6'>
            {
              services.slice(0, 3).map((service) => (
                <div 
                  key={service.id} 
                  className='flex flex-col border-6 border-accent py-[30px] px-[20px] rounded-[10px] md:w-[400px] md:hover:bg-accent md:hover:text-light cursor-default transition-all duration-300'
                >
                  <div className='flex items-center gap-[10px]'>
                    <img 
                      src={service.icon} 
                      className='w-[80px]' 
                    />

                    <h2 className='text-[20pt] font-semibold w-[35%]'>{service.title}</h2>
                  </div>

                  <p className='text-[15pt] mt-[20px] font-medium'>{service.description}</p>
                </div>
              ))
            }
          </div>

          <div className='flex flex-col md:flex-row justify-center gap-6 mt-6'>
            {
              services.slice(3).map((service) => (
                <div 
                  key={service.id} 
                  className='flex flex-col border-6 border-accent py-[30px] px-[20px] rounded-[10px] md:w-[400px] md:hover:bg-accent md:hover:text-light cursor-default transition-all duration-300'
                >
                  <div className='flex items-center gap-[10px]'>
                    <img 
                      src={service.icon} 
                      className='w-[80px]' 
                    />

                    <h2 className='text-[20pt] font-semibold w-[35%]'>{service.title}</h2>
                  </div>

                  <p className='text-[15pt] mt-[20px] font-medium'>{service.description}</p>
                </div>
              ))
            }
          </div>
          </div>
          
        </section>

        <section className='p-[20px] md:px-[100px]'>
          <div>
            <h1 className='title'>O que nos diferencia?</h1>
            <h3 className='text-[18pt]'>Nos definimos em 5 conceitos</h3>
          </div>

          <div className='md:flex md:items-center md:gap-10'>
            <img 
              src={diferencial}
              className='mt-[20px] hidden md:flex'
            />

            <div className='flex flex-col gap-[30px] mt-[20px] md:gap-[20px]'>
              {
                diferenciais.map((diferencial) => (
                  <div className='flex flex-col'>
                    <h1 className='text-[22pt] font-bold'>{diferencial.title}</h1>

                    <div className='flex items-center gap-2 text-[13pt]'>
                      <img src={diferencial.icon}/>
                      <p className='font-medium md:text-[16pt]'>{diferencial.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <section className='bg-accent px-[20px] py-[30px] flex flex-col md:flex-row md:items-center gap-[20px] md:h-[350px]'>
          <p className='cta_text'>Quer conversar sobre seu caso?<br/>Estamos prontos para ouvir você.</p>
          <button className='bg-secondary text-light w-[55%] h-[80px] rounded-[10px] text-[15pt] font-semibold md:w-[40%] shadow-[0_0_10px_#a15336] ml-[180px]'>Agende uma consulta</button>
        </section>
      </main>

      <footer className='flex flex-col mt-[80px]'>
        <div className='flex'>
          <img 
            src={logo}
            className='w-[70px]'
          />
          <h1 className='logo'>Lawys Advocacia</h1>
        </div>

        <p className='w-[100%] flex justify-center text-[13pt] mt-[20px]'>&copy; 2025 Lawys Advocacia.</p>
      </footer>
    </>
  )
}

export default App;