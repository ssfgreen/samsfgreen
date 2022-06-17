import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SectionHeader from '../../components/sectionHeader';

export default function Contact(props) {
  return <div>
    <div className="space-y-10">
      <Navbar />
      <SectionHeader title="Contact Me" description="Get in touch if you'd like to chat design, product or anything else"></SectionHeader>
      <p className='flex w-full justify-center'>samsfgreen [at] gmail.com</p>
      {/* <Footer contact={false}/> */}
    </div>
  </div>
}