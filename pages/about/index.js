import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Image from 'next/image';

export default function About(props) {
  return <div>
    <div className="space-y-20">
      <Navbar />
        <div className='flex w-full flex-col items-center'>
          <Image className='rounded-full'
            src="/images/profile_image.jpg"
            alt="Profile Image"
            width='200'
            height='200'
          ></Image>
          <p className='mt-5'>^ this is me</p>
        </div>
        <div className='flex justify-center'>
          <div class="w-full sm:w-3/4 px-5 space-y-3">
            <p>I am a design led product builder.</p>
            <p>I learned to design studying Architecture at the University of Cambridge and how to build stuff while studying Computer Science at Imperial College London.</p>
            <p>I care about solving problems using design and engineering that have a meaningful impact in the world. I’ve spent most time doing this in the education sector where my company Turinglab has taught over 100,000 children and young adults to code.</p>
            <p>I’m equally passionate about other important issues for our time: climate and the environment, mental and physical wellbeing and equality in general.</p>
            <p>In my spare time I love travelling for outdoor sports with friends. I climb, swim, run and cycle.</p>
          </div>
        </div>
      <Footer />
      </div>
  </div>
}