import RenderService from "./RenderService";

const Service = () => {

    const services = [
        {
            id: 1,
            img: '/images/service1.png',
            title: "TATTOO DESIGN",
            text: "Nullam congue rutrum nisl nec bibendum. Praesent porta nisl ipsum, id porttitor nulla iaculis sit amet sed nec purus."
        },
        {
            id: 2,
            img: '/images/service1.png',
            title: "TATTOO DESIGN",
            text: "Nullam congue rutrum nisl nec bibendum. Praesent porta nisl ipsum, id porttitor nulla iaculis sit amet sed nec purus."
        },
        {
            id: 3,
            img: '/images/service1.png',
            title: "TATTOO DESIGN",
            text: "Nullam congue rutrum nisl nec bibendum. Praesent porta nisl ipsum, id porttitor nulla iaculis sit amet sed nec purus."
        },
        {
            id: 4,
            img: '/images/service1.png',
            title: "TATTOO DESIGN",
            text: "Nullam congue rutrum nisl nec bibendum. Praesent porta nisl ipsum, id porttitor nulla iaculis sit amet sed nec purus."
        },
        {
            id: 5,
            img: '/images/service1.png',
            title: "TATTOO DESIGN",
            text: "Nullam congue rutrum nisl nec bibendum. Praesent porta nisl ipsum, id porttitor nulla iaculis sit amet sed nec purus."
        },
        {
            id: 6,
            img: '/images/service1.png',
            title: "TATTOO DESIGN",
            text: "Nullam congue rutrum nisl nec bibendum. Praesent porta nisl ipsum, id porttitor nulla iaculis sit amet sed nec purus."
        }
    ]
  return <section className="container mx-auto mt-24">
    <div className="text-center">
        <p className="text-xl italic font-[400]">Services</p>
        <h3 className="my-2 leading-[1.2] tracking-wider text-5xl font-[500]">What we do</h3>
        <p className="w-3/4 mx-auto text-[1.2rem] tracking-wide leading-tight">
        Come to us if you don’t want to regret it.
Stop thinking and make your dream.</p>
    </div>

    <div className="flex items-center justify-start flex-wrap mt-12 gap-6">

    {
        services.map(service => (

            <RenderService key={service.id} service={service}/>
        ))
    }
    </div>
  </section>;
};

export default Service;
