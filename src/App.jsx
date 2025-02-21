import './App.css'
import TextUnderline from './TextUnderline.jsx'
import { Profile } from './Profile.jsx';
import { SearchBar } from './SearchBar.jsx';
import { Button } from './Button.jsx';
import { Footer } from './Footer.jsx';

function App() {

  return (
    <>
      <header className='flex flex-row justify-end p-1.5'>
        <div className='flex flex-row pr-1 pl-8 items-center'>
          <TextUnderline
            nameDirection="Gmail"
            urlDirection='https://workspace.google.com/intl/es-419/gmail/' />
          <TextUnderline
            nameDirection="Imágenes"
            urlDirection='https://www.google.com/imghp?hl=es-419&authuser=0&ogbl' />
          <img src="https://ssl.gstatic.com/gb/images/bar/al-icon.png" ></img>
          <Profile linkIamge="https://github.com/nicotoscano.png" />
        </div>
      </header>

      <nav className='flex flex-col items-center min-h-24 h-80'>
        <div className='max-h-24 relative mt-auto h-full'>
          <img
            className='max-h-full max-w-full'
            alt="Google"
            height="92"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png">
          </img>
        </div>
      </nav>


      <main className='flex flex-col items-center mt-4'>
        <SearchBar />
        <div className='flex flex-row items-center mt-8'>
          <Button
            nameButton="Buscar con Google"
            urlButton="https://www.google.com/search?q=" />
          <Button
            nameButton="Voy a tener suerte"
            urlButton="https://www.google.com/doodles" />

        </div>
      </main>

      <footer>
        <Footer />
      </footer>



    </>
  )
}

export default App