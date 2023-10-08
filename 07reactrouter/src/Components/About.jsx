import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
          <div className="p-6  mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 ">
            <div className=" w-[100%] ml-20 ">
                <img className=' rounded-3xl ' src="https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&w=600" alt="switzerland " />
            </div>
            <div className="bg-cyan-200">
                <h4 className=' text-2xl text-gray-900 text-center' >My passion  </h4>
                <p className=' mt-6 text-gray-600  text-xl ' >There is something truly magical about stepping away from the hustle and bustle of
                     modern life and immersing oneself in the wonders of nature.<br/>Exploring nature is not
                      just an activity; it's an extraordinary journey that nourishes the soul, stimulates the senses,
                       and leaves an indelible mark on the heart. Whether you are a seasoned adventurer or a novice explorer, 
                       the natural world beckons with its myriad of treasures waiting to be discovered.
                      <br/> Imagine waking up to the gentle symphony of birdsong, the rustling of leaves in the breeze, and the scent of earth and greenery filling the air. As you step out into the wilderness, you'll find yourself surrounded by a world of breathtaking beauty and diversity. The great outdoors offers an endless tapestry of landscapes, from dense, ancient forests to rugged mountain peaks, serene lakes to meandering rivers, and vast deserts to pristine coastlines.
                </p>
            </div>
          </div>
      </div>

      
  );
}