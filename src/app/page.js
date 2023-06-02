import Image from 'next/image'
import Link from 'next/link'
import "../Script/script.js";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col">
  <nav class="relative px-4 py-4 flex justify-between items-center bg-sky-900 h-16">
          <div class="lg:hidden">
            <button class="navbar-burger flex items-center text-blue-600 p-3">
                <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
        </div>
        
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <Link href={""}><li class="text-sm text-blue-600 hover:text-gray-500 font-bold">Home</li></Link>
          <Link href={""}><li><a class="text-sm text-white" href="./src/about.html">About</a></li></Link>
          <Link href={""}><li><a class="text-sm text-white hover:text-gray-500" href="./src/internetplan.html">Services</a></li></Link>
          <Link href={""}><li><a class="text-sm text-white hover:text-gray-500" href="./src/Projects.html">Projects</a></li></Link>
          <Link href={""}><li><a class="text-sm text-white hover:text-gray-500" href="./src/contact.html">Contact</a></li></Link>
        </ul>
    </nav>
      

      <div className='w-screen bg-sky-600 text-white'>
        <div className='lg:flex h-auto lg:m-20 sm:block sm:m-5'>
          <Image
          src={"/Picture.png"}
          width={200}
          height={200}
          alt='Profile_pic'
          >
          </Image>
            <div className='block p-10 leading-6'>
              <h5>Hi, my name is</h5>
              <h1>John Mark Contreras</h1>
              <p>I am an Information and Technology Student from The Philippines. I am currently learning new Technologies stacks to gain the necessary skills to be a developer.
                I started to learn to code when i was in my high school year where i learned the basics of HTML, CSS, and JavaScript and created small <Link href={"./dashboard"}><span className='text-sky-950 font-bold'>projects.</span></Link> 
              </p>
            </div>
          </div>
        </div>

        <div className='grid lg:grid-cols-3 lg:grid-rows-2 w-screen sm:grid-cols-1 sm:grid-rows-4'>
            <div className='block lg:col-span-3 text-center p-10'>
                <h1 className='text-blue-950 font-semibold'>Skill summary</h1>
                    <p className='leading-6'>I have a hands-on experience using JavaScript with react where i created some projects with the use of API.
                      I also have a particular experience in using Java and MySql where i created a CRUD application for our school activity.
                    </p>
            </div>
            
            <div className='text-center p-10'>
              <h2 className='font-semibold'>Frontend</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div className='text-center p-10'>
              <h2 className='font-semibold'>Backend</h2>
              <ul>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Test</li>
                <li>Test</li>
              </ul>
            </div>
            <div className='text-center p-10'>
              <h2 className='font-semibold'>Others</h2>
              <ul>
                <li>Wordpress</li>
                <li>Git</li>
                <li>Github</li>
                <li>Netlify</li>
              </ul>
            </div>
        </div>
    </main>
  )
}
