import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/5">
            FabDev
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-4/5">
            <a
              href="https://backend-verse.com"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Backend-Verse
            </a>
            <a
              href={`https://github.com/fabiankaraben`}
              className="mx-3 font-bold hover:underline"
            >
              GitHub
            </a>
            <a
              href={`https://www.linkedin.com/in/fabiankaraben/`}
              className="mx-3 font-bold hover:underline"
            >
              LinkedIn
            </a>            
            <a
              href={`https://www.youtube.com/channel/UCBu3Gofz6KehltM4jfmr-qA`}
              className="mx-3 font-bold hover:underline"
            >
              YouTube
            </a>
            <a
              href={`https://twitter.com/fab_k_dev`}
              className="mx-3 font-bold hover:underline"
            >
              Twitter
            </a>
            <a
              href={`https://www.instagram.com/fab.k.dev/`}
              className="mx-3 font-bold hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
