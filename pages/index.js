import Header from '../components/header'
import Layout from '../components/layout'

export default function Home() {

  const benefitData = [
    {
      header: 'PRODUK',
      content: [
        {
          number: '01',
          title: 'Netmonk Basic',
          desc: 'Aplikasi monitoring jaringan yang mengakuisisi data dari perangkat jaringan secara otomatis dan divisualisasikan dalam bentuk dashboard analitik yang mudah dipahami.'
        },
      ]
    },
    {
      header: 'SOLUSI',
      content: [
        {
          number: '02',
          title: 'Netmonk Basic + Custom Built',
          desc: 'Solusi yang dibuat dengan pendekatan custom dari fitur utama Netmonk Basic untuk disesuaikan dengan budaya organisasi/perusahaan Anda.'
        },
        {
          number: '03',
          title: 'Full Custom Build',
          desc: 'Solusi yang kami sediakan untuk menyelesaikan masalah organisasi/perusahaan Anda yang masih berkaitan dengan monitoring dan analisa infrastuktur jaringan.'
        }
      ]
   }
  ]

  const reasonData = [
    {
      pict: '/reason_1.png',
      title: 'Tidak Terikat Pada Vendor',
      desc: 'Netmonk tidak memiliki ikatan pada vendor/ merk perangkat tertentu, kami mampu menyediakan solusi yang didukung oleh berbagai perangkat network dari berbagai vendor.'
    },
    {
      pict: '/reason_2.png',
      title: 'Kustomisasi Aplikasi dan Alur Kerja',
      desc: 'Kami menyediakan solusi kustom untuk memaksimalkan kualitas penyelesaian masalah pengguna yang berbeda antara 1 dengan lainnya.'
    },
    {
      pict: '/reason_3.png',
      title: 'Kolaborasi Intensif dengan Pengembang Lokal',
      desc: 'Solusi kami dibuat oleh para developer handal dalam negeri yang mampu menyelesaikan berbagai permasalahan pada monitoring jaringan Anda.'
    },
    {
      pict: '/reason_4.png',
      title: 'Menyediakan Opsi Skema Kontrak',
      desc: 'Kami memberikan pilihan opsi kontrak yaitu skema “Fixed (Clear Requirement Upfront)” dan skema “Flexible (Agile Per-Sprint)”'
    }
  ]

  const customerData = [
    {
      pict: '/customer_1.png'
    },
    {
      pict: '/customer_2.png'
    },
    {
      pict: '/customer_3.png'
    },
    {
      pict: '/customer_4.png'
    },
    {
      pict: '/customer_5.png'
    },
    {
      pict: '/customer_6.png'
    },
    {
      pict: '/customer_7.png'
    }
  ]

  const customerReviewData = [
    {
      review: 'Netmonk Basic sangat cocok sebagai solusi network monitoring karena tidak hanya dapat memonitor kualitas jaringan tetapi juga dapat digunakan untuk monitoring status perangkat jaringan secara real-time.',
      person: 'Ega Paundra',
      job: 'Presale',
      department: 'Sigma Cipta Caraka',
    },
    {
      review: 'Produk dan Solusi Netmonk sangat berguna untuk monitoring resource perangkat baik router maupun server.',
      person: 'Zakir Husain',
      job: 'Analis Jaringan',
      department: 'Diskominfo Bontang',
    },
    {
      review: 'Netmonk Basic, aplikasi monitoring jaringan, yang affordable tetapi berkualitas. Fitur-fiturnya bagus dan detail untuk reporting. Supportnya Netmonk sangat memudahkan kita dan juga bisa custom sesuai kebutuhan kita.',
      person: 'Asif Maulana',
      job: 'DevOps Manager',
      department: 'TrueMoney Indonesia',
    },
  ]

  const BenefitPart = ({ data }) => {
    return (
      <div className="flex flex-col gap-5">
        <p className="tracking-widest font-semibold flex gap-5">
          <img src="/icons/minus.png" alt="minus"/>
          <span>{data.header}</span> 
        </p>
        {
          data.content.map((c,i) =>
            <div className="mb-5" key={i.toString()}>
              <p className="flex font-bold gap-6">
              <span>{c.number}</span> <span>{c.title}</span>
              </p>
              <p className="ml-11 mb-5 text-justify">{c.desc}</p>
              <a href="" className="text-yellow-1 ml-11">
                Selengkapnya
                <img src="/icons/keyboard_arrow_right_yellow.png" alt="arrow" className="inline ml-3"/>
              </a>
            </div>
          )
        }
      </div>
    )
  }

  const ReasonPart = ({ data }) => {
    return (
      <li className="border-4 sm:w-5/12 md:w-5/12 sm:p-6 p-8 rounded-xl grid gap-4">
        <img src={data.pict} alt="pict"/>
        <h1 className="text-md font-bold">{data.title}</h1>
        <p className="text-sm">{data.desc}</p>
      </li>
    )
  }

  const ReviewCard = ({data}) => {
    return (
      <div className="mx-auto md:mx-0 bg-white p-5 rounded-xl border-4 border-sky-blue sm:w-11/12 md:w-9/12 grid place-items-start">
        <img src="/quote.png" alt="quote" className="md:w-8 w-h-8" />
        <p className="mt-5 mb-8 row-start-2 row-span-6 text-sm md:text-xs">{data.review}</p>
        <p className="font-bold md:text-sm">{data.person}</p>
        <div className="mt-5">
          <span className="text-sm md:text-xs text-gray-400">{data.job}</span>
          <p className="text-sm md:text-xs">{data.department}</p>
        </div>
      </div>
    )
  }

  return (
    <Layout title="Beranda" showTryBanner={true}>
      <div>
        <Header />

        {/* content 1 */}
        <div className="bg-french-blue text-white">
          <div className="bg-yale-blue w-11/12 mx-auto p-10 md:p-20 rounded-t-3xl">
            <h1 className="text-center text-xl md:text-2xl font-bold">NETMONK</h1>
            <p className="text-center mt-6 text-sm md:w-6/12 mx-auto">Penyedia aplikasi monitoring jaringan yang membantun organisasi Anda.</p>
            
            <div className="mt-10 flex flex-col sm:w-11/12 justify-around mx-auto">
              <div className="flex flex-col gap-5 md:w-11/12">
                {
                  benefitData.map((d,i) => <BenefitPart data={d} key={i.toString()}/>)
                }
              </div>

              <div className="lg:w-3/5 relative">
                <div className="bg-yellow-1 w-7/12 sm:w-5/12 h-full rounded-xl absolute right-0"></div>
                <img src="/IpadBeranda.png" alt="ipad" className="relative lg:absolute right-0 sm:-right-48 md:-right-52 bottom-0 top-1 md:top-2 my-auto sm:w-7/12"/>
              </div>
            </div>
          </div>
        </div>

        {/* content 2 */}
        <div className="mx-auto md:w-11/12 p-10 md:py-20">
          <h1 className="text-xl md:text-2xl font-bold text-center">Kenapa Harus NETMONK ?</h1>
          <p className="text-center sm:w-2/3 md:w-9/12 mx-auto mt-5 text-sm">Netmonk adalah penyedia aplikasi monitoring jaringan, memiliki berbagai keunggulan yang membuat kegiatan monitoring jaringan Anda jadi lebih mudah.</p>
          <ul className="mt-10 md:mt-20 flex flex-col sm:flex-row md:flex-row md:flex-wrap gap-10 sm:gap-5 sm:flex-wrap md:gap-10 justify-center">
            {
              reasonData.map(d => <ReasonPart data={d} key={d.title}/>)
            }
          </ul>
        </div>


        {/* content 3 */}
        <div className="mx-auto w-11/12 bg-sky-blue p-10 md:py-10 md:px-16 rounded-t-3xl">
          <h1 className="mx-auto sm:w-6/12 md:w-7/12 font-bold text-xl md:text-2xl text-center leading-relaxed">Mereka Telah Memakai Produk & Solusi NETMONK</h1>
          <p className="text-center mt-5 text-sm">NetMonk telah dipercaya oleh 15+ perusahaan di Indonesia</p>
          <div className="flex flex-wrap items-center justify-center gap-9 mt-10">
            {
              customerData.map(d => 
                <div key={d.pict} className="p-3 rounded-lg shadow-xl bg-white grid place-items-center sm:w-52 md:w-48 w-64 h-24">
                  <img src={d.pict} alt="img"/>
                </div>
              )
            }
            <div className="p-5 rounded-lg border border-black grid sm:w-52 md:w-48 w-64 h-24">
              <p className="text-3xl">15+</p>
              <p className="md:text-sm">
                Perusahaan Lainnya
                 <img src="/icons/keyboard_arrow_right.png" alt="arrow" className="inline"/>
              </p>
            </div>
          </div>
        </div>

        {/* content 4 */}
        <div className="mx-auto w-11/12 bg-sky-blue p-10 md:pt-10 md:px-16 md:pb-48 rounded-b-3xl md:relative">
          <h1 className="mx-auto md:mx-0 text-xl md:text-2xl font-bold leading-relaxed text-center md:text-left sm:w-6/12 md:w-7/12">Apa yang Mereka Katakan Tentang NETMONK</h1>
          <div className="mt-10 md:absolute flex flex-col md:flex-row gap-5 md:top-30">
            {
              customerReviewData.map(c => <ReviewCard data={c} key={c.person}/>)
            }
          </div>
        </div>
      </div>
    </Layout>
    
  )
}
