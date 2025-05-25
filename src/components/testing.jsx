import React, {useState} from 'react'
import './Home.css'

const Testing2 = () => {                     //Accordation using jsx

  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    { title: 'Accordion Item #1', content: 'First content here.' },
    { title: 'Accordion Item #2', content: 'Second content here.' },
    { title: 'Accordion Item #3', content: 'Third content here.' },
  ];

  return (
    <div className="accordion accordion-flush" id="accordionExample">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="accordion-item mb-2" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button d-flex justify-content-between align-items-center ${!isOpen ? 'collapsed' : ''}`}
                type="button"
                onClick={() => toggleItem(index)}
              >
                {item.title}
                <i
                  className={`bi bi-plus ms-auto rotate-plus ${isOpen ? 'open' : ''}`}
                ></i>
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testing2


// css content
// ----------------------
// .accordion-button::after {
//   display: none !important;
// }

// .rotate-plus.open {
//   transform: rotate(45deg);
// }