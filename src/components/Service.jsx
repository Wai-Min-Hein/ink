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
        <p>Services</p>
        <h3>What we do</h3>
        <p className="w-3/4 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut velit similique unde dolorem voluptatem recusandae aliquid neque ea, accusantium amet, asperiores temporibus corporis accusamus aspernatur assumenda enim. Aliquam, minima!</p>
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
