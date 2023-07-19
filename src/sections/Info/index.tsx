import lake from '../../assets/photos/cly.webp'
import tedx from '../../assets/photos/TEDx-2.webp'
import Title from '../../components/Title'

const Info = () => {
  return ( 
    <div className='z-40 about mt-[calc(100dvh-83px)]' id='event-info'>
      <div className='h-8 bg-[#c20025] opacity-90'></div>
      <div className='h-8 bg-[#c20025] opacity-70'></div>
      <div className='h-8 bg-[#c20025] opacity-50'></div>
      <div className='h-8 bg-[#c20025] opacity-20'></div>
      <div className='section typography mt-16'>
        <div className='section-wrapper'>
          <h2>What is <Title />?</h2>
          <p>
            It's where innovation, inspiration, and education collide. Situated in the heart of Waterloo Region, TED<sup>x</sup>Columbia Lake Youth is the celebration of young minds shaping the future. TED<sup>x</sup>Columbia Lake Youth's mission is to motivate, inspire, and encourage the next generation of changemakers and leaders to unleash their passions, carve their own paths of learning, and become catalysts for positive change. TED<sup>x</sup>Columbia Lake Youth is working to pave the way to reinventing education.<br/><br/>
            TED<sup>x</sup>Columbia Lake Youth's theme is reinventing education, aiming to inspire a young audience to seek learning outside the classroom. With experts and inspiring speakers from across the region, TED<sup>x</sup>Columbia Lake Youth is looking to share recent case studies and strategies spanning the personal, societal and physical branches of learning.
          </p>
        </div>
        <img src={lake} alt='lake'></img>
      </div>
      <div className='section typography mt-8 pb-16'>
        <img src={tedx} alt='tedx'></img>
        <div className='section-wrapper'>
          <h2>What is <a href='https://www.ted.com/about/programs-initiatives/tedx-program'>TED<sup>x</sup></a>?</h2>
          <p>In the spirit of ideas worth spreading, TED has created a program called TED<sup>x</sup>. TED<sup>x</sup> is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TED<sup>x</sup>Columbia Lake Youth, where x = independently organized TED event. At TED<sup>x</sup>Columbia Lake Youth, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TED<sup>x</sup> program, but individual TED<sup>x</sup> events, including ours, are self-organized.</p>
        </div>
      </div>
      <div className='section typography'>
        <div className='section-wrapper'>
          <h2><a href='https://attend.tedxcolumbialakeyouth.com' target='_blank' rel='noreferrer'>Applications</a> Open Now!</h2>
          <p>Want to get inspired or make an impact on the youth innovators of the future? <a href='https://attend.tedxcolumbialakeyouth.com' target='_blank' rel='noreferrer'>Participate in the event</a> as a speaker or attendee and keep in touch through our <a href='https://www.instagram.com/ted<sup>x</sup>columbialakeyouth/'>Instagram</a>. Apply <a href='https://attend.tedxcolumbialakeyouth.com' target='_blank' rel='noreferrer'>here</a>!<br/><br/>Have questions? Reach out to us <a href='mailto:questions@tedxcolumbialakeyouth.com'>here</a> or at any of these emails:</p>
          <p className='font-bold'>Business Opportunities</p>
          <a href='mailto:business@tedxcolumbialakeyouth.com'>business@tedxcolumbialakeyouth.com</a>
          <br/><br/>
          <p className='font-bold'>Questions and Inquiries</p>
          <a href='mailto:questions@tedxcolumbialakeyouth.com'>questions@tedxcolumbialakeyouth.com</a>
          <br/><br/>
          <p className='font-bold'>Marketing Opportunities</p>
          <a href='mailto:marketing@tedxcolumbialakeyouth.com'>marketing@tedxcolumbialakeyouth.com</a>
          <br/><br/>
          <p className='font-bold'>Community Involvement</p>
          <a href='mailto:community@tedxcolumbialakeyouth.com'>community@tedxcolumbialakeyouth.com</a>
        </div>
      </div>
    </div>
  )
}

export default Info