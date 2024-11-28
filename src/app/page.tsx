import Image from "next/image";
import { Button } from "@/components/ui/button";
import TopNavbar from "@/components/top-navbar/top-navbar";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
      <TopNavbar></TopNavbar>
      <Header></Header>
     <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 py-16">
  <div className="flex-1 text-center lg:text-left">
    <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-800">
    Learn new skills <br /> online with ease
    </h1>
    <p className="text-lg text-gray-600 mb-8">
        Discover a wide range of courses covering a variety of <br />
              subjects, taught by expert instructors.
    </p>
    <div className="flex justify-center lg:justify-start gap-4">
    <button className="px-6 py-3 bg-black text-white rounded hover:bg-blue-700">
      Start learning now</button>
    <button className="px-6 py-3 border rounded hover:bg-gray-100">
      Explore Courses</button>
    </div>
  </div>

  <div className="relative w-full lg:w-1/2 flex justify-center">
    <div className="relative w-80 lg:w-[640px] h-auto">
      <Image
        src="/images/image.png"
        alt="Learning online"
        width={640}
        height={900}
      />
    </div>
    <div className="absolute -z-10 top-4 left-4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
  </div>
</div>


      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-8 bg-gray-100 w-full">
    <p className="text-black font-bold text-center lg:text-left">
      Trusted by 2000+ companies <br/> worldwide.
    </p>
    <Image
      src="/images/logos.png"
      alt="Company logos"
      width={1280}
      height={228}
      className="w-full lg:w-auto"
    />
  </div>

      <div className="w-full h-auto py-16">
        <h2 className="text-2xl font-bold text-center mb-4">
          Explore Courses by Category
        </h2>
        <p className="text-center text-black px-4 mb-8">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>

        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-4">
            <Image
              className="shadow-lg"
              src="/images/Frame 18.svg"
              alt="Category Image"
              width={1280}
              height={636}
            />
          </div>
        </div>
      </div>
       
      <div className="py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-black-800 mb-6">
      Our Achievements
    </h2>
    <p className="text-[18px] font-normal leading-[27px] text-black mb-8 max-w-3xl mx-auto decoration-skip-ink">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>

    <div className="flex justify-center">
      <Image
        src="/images/List.svg"
        alt="Our Achievements"
        width={1280}
        height={720}
      />
    </div>
  </div>
 </div>
 <div className="py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-black mb-4">Courses</h2>

    <p className="text-[18px] font-normal leading-[27px] text-black decoration-skip-ink mb-6">
      Your Ultimate Guide to Learning
    </p>
    <ul className="flex justify-center items-center gap-6 mb-12">
      <li className="text-gray-800 font-medium cursor-pointer hover:underline">
        Popular
      </li>
      <li className="text-gray-800 font-medium cursor-pointer hover:underline">
        Recommended
      </li>
      <li className="text-gray-800 font-medium cursor-pointer hover:underline">
        Best Price
      </li>
    </ul>

    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <Image
          src="/images/Row.svg"
          alt="Courses Row 1"
          width={1312}
          height={534}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/Row1.svg"
          alt="Courses Row 2"
          width={1312}
          height={534}
        />
      </div>
    </div>
  </div>
</div>
      <div className="px-4 py-2 gap-2 flex-grow flex items-end justify-center">
        <Button variant="outline">View All Courses</Button>
      </div>
      <div className="py-16 bg-gray-50">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl font-bold leading-[3.6rem] text-center mb-4">
      Our Team
    </h1>

    {/* Description */}
    <p className="text-[1.125rem] font-normal leading-[1.6875rem] text-center mb-8 max-w-3xl mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </p>

    <div className="flex justify-center">
      <Image
        src="/images/Content.svg"
        alt="Our Team"
        width={1280}
        height={482}
      />
    </div>
  </div>
</div>
<div className="py-16 bg-white">
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold leading-tight text-black mb-6 text-left">
      Customer Testimonials
    </h1>

    <p className="text-lg font-normal leading-relaxed text-black mb-12 text-left max-w-2xl">
      Hear what our customers have to say about their experiences with our courses and services.
    </p>

    <div className="flex justify-center">
      <Image
        src="/images/Content1.svg"
        alt="Customer Testimonials"
        width={1152}
        height={418}
      />
    </div>
  </div>
</div>
<Footer></Footer>
</div>
  );
}
