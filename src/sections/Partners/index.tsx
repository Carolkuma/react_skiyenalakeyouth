import './Partners.scss'
import uw from '../../assets/partners/uw.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { partnerData } from '../../data/Partners.data';
import ycf from '../../assets/partners/ycf.png'
import wrdsb from '../../assets/partners/wrdsb.png'
import swril from '../../assets/partners/swril.jpg'

const contactData = [
  {
    title: "Business Opportunities",
    email: "business@tedxcolumbialakeyouth.com"
  },
  {
    title: "Questions and Inquiries",
    email: "questions@tedxcolumbialakeyouth.com"
  }, 
  {
    title: "Marketing Opportunities",
    email: "marketing@tedxcolumbialakeyouth.com"
  },
  {
    title: "Community Involvement",
    email: "community@tedxcolumbialakeyouth.com"
  }
]

const Partners = () => {
  return (
    <>
    <div className='typography mt-16 flex-col mx-auto scroll-m-28' id='partners'>
      <h2 className='text-center'>Our Partners</h2>
      <LazyLoadImage key='-3' src={uw} alt='sponsor' onClick={() => window.open('https://uwaterloo.ca')} effect='blur' wrapperClassName='partner-logo p-4 w-3/4 md:!w-1/2 mx-auto !grid place-items-center' />
      <LazyLoadImage key='-2' src={wrdsb} alt='sponsor' onClick={() => window.open('https://www.wrdsb.ca')} effect='blur' wrapperClassName='mt-4 partner-logo p-4 w-3/4 md:!w-1/2 mx-auto !grid place-items-center' />
      <LazyLoadImage key='-4' src={swril} alt='sponsor' onClick={() => window.open('https://www.swril.ca')} effect='blur' wrapperClassName='mt-4 partner-logo p-4 w-3/4 md:!w-1/2 mx-auto !grid place-items-center' />
      <LazyLoadImage key='-1' src={ycf} alt='sponsor' className='partner-logo min-w-0 bg-black' onClick={() => window.open('https://youthcreativityfund.ca')} effect='blur' wrapperClassName='mt-4 partner-logo p-4 w-3/4 md:!w-1/2 mx-auto !grid place-items-center bg-black border-2 border-white' />
      <div className='flex justify-center flex-wrap gap-4 mt-8'>
        {partnerData.map((partner, index) => {
          return (
            <LazyLoadImage key={index} effect='blur' wrapperClassName='partner-logo' className={`partner-logo p-4 ${partner.class}`} src={partner.logo} alt='sponsor' onClick={() => window.open(partner.href)} />
          )
        })}
      </div>
      <p className='text-center mt-8'>Want to support us? Check out our <a href='https://bank.hackclub.com/donations/start/tedxcolumbialakeyouth'>donation page</a> or contact us <a href='mailto:business@tedxcolumbialakeyouth.com'>here</a>.</p>
    </div>
    <div className='section typography !max-w-[70rem] mt-[10rem]'>
        <div className='section-wrapper text-center w-full'>
          <h2>Contact Us</h2>
          <p>Have questions? Want to explore a partnership opportunity? Use the links below to shoot us an email!</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
            {contactData.map((contact) => {
              return (
                <div className='contact-container' onClick={() => {window.open(`mailto:${contact.email}`)}}>
                  <h3>{contact.title}</h3>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    {/* <div className='section typography mt-[10rem] !max-w-[60rem] mb-[8rem]'>
      <div className='section-wrapper'>
        <h2 className='text-center'><a href='https://attend.tedxcolumbialakeyouth.com' target='_blank' rel='noreferrer'>Registrations</a> Open Now!</h2>
        <p className='text-center'>Want to get inspired or make an impact on the youth innovators of the future? <a href='https://attend.tedxcolumbialakeyouth.com' target='_blank' rel='noreferrer'>Participate in the event</a> as a speaker or attendee and keep in touch through our <a href='https://www.instagram.com/ted<sup>x</sup>columbialakeyouth/'>Instagram</a>. Register <a href='https://attend.tedxcolumbialakeyouth.com' target='_blank' rel='noreferrer'>here</a>!</p>
      </div>
    </div> */}
    </>
  )
}

export default Partners