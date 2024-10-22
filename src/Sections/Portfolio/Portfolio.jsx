import { useState } from "react";
import ItemModal from "./ItemModal"

export default function Portfolio() {

  const [openModalItem, setOpenModalItem] = useState({});

  const items = [
    {
      id: 1,
      title: "Project 1",
      image: "/images/portfolio/project1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis a tristique rutrum, mauris lectus fermentum nisi, vel consectetur velit justo id nunc.",
      features:[
        {
          id:1, text:"feature1"
        },
        {id:2, text:"feature 2"},
        {id:3, text:"feature3"},
        {id:4, text:"feature4"}
      ],
      technology:[
        {id:1, text:"Technology1"},
        {id:2, text:"Technology 2"},
        {id:3, text:"Technology3"},
        {id:4, text:"Technology4"}
      ],
      live:'abc.com',
      github:'github.com'
    },
    {
      id: 2,
      title: "Project 2",
      image: "/images/portfolio/project2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis a tristique rutrum, mauris lectus fermentum nisi, vel consectetur velit justo id nunc.",
      features:[
        {
          id:1, text:"feature1"
        },
        {id:2, text:"feature 2"},
        {id:3, text:"feature3"},
        {id:4, text:"feature4"}
      ],
      technology:[
        {id:1, text:"Technology1"},
        {id:2, text:"Technology 2"},
        {id:3, text:"Technology3"},
        {id:4, text:"Technology4"}
      ],
      live:'abc.com',
      github:'github.com'
    },
    {
      id: 3,
      title: "Project 3",
      image: "/images/portfolio/project3.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis a tristique rutrum, mauris lectus fermentum nisi, vel consectetur velit justo id nunc.",
      features:[
        {
          id:1, text:"feature1"
        },
        {id:2, text:"feature 2"},
        {id:3, text:"feature3"},
        {id:4, text:"feature4"}
      ],
      technology:[
        {id:1, text:"Technology1"},
        {id:2, text:"Technology 2"},
        {id:3, text:"Technology3"},
        {id:4, text:"Technology4"}
      ],
      live:'abc.com',
      github:'github.com'
    },
    {
      id: 4,
      title: "Project 1",
      image: "/images/portfolio/project1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis a tristique rutrum, mauris lectus fermentum nisi, vel consectetur velit justo id nunc.",
      features:[
        {
          id:1, text:"feature1"
        },
        {id:2, text:"feature 2"},
        {id:3, text:"feature3"},
        {id:4, text:"feature4"}
      ],
      technology:[
        {id:1, text:"Technology1"},
        {id:2, text:"Technology 2"},
        {id:3, text:"Technology3"},
        {id:4, text:"Technology4"}
      ],
      live:'abc.com',
      github:'github.com'
    },
    {
      id: 5,
      title: "Project 2",
      image: "/images/portfolio/project2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis a tristique rutrum, mauris lectus fermentum nisi, vel consectetur velit justo id nunc.",
      features:[
        {
          id:1, text:"feature1"
        },
        {id:2, text:"feature 2"},
        {id:3, text:"feature3"},
        {id:4, text:"feature4"}
      ],
      technology:[
        {id:1, text:"Technology1"},
        {id:2, text:"Technology 2"},
        {id:3, text:"Technology3"},
        {id:4, text:"Technology4"}
      ],
      live:'abc.com',
      github:'github.com'
    },
    {
      id: 6,
      title: "Project 3",
      image: "/images/portfolio/project3.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis a tristique rutrum, mauris lectus fermentum nisi, vel consectetur velit justo id nunc.",
      features:[
        {
          id:1, text:"feature1"
        },
        {id:2, text:"feature 2"},
        {id:3, text:"feature3"},
        {id:4, text:"feature4"}
      ],
      technology:[
        {id:1, text:"Technology1"},
        {id:2, text:"Technology 2"},
        {id:3, text:"Technology3"},
        {id:4, text:"Technology4"}
      ],
      live:'abc.com',
      github:'github.com'
    }

  ]

  const openModal = (item) => {
    setOpenModalItem(item);
    document.getElementById('my_modal').showModal();
  };

  return (
    <div className="h-screen flex flex-col justify-between pt-4 pb-11 w-10/12 mx-auto">
      <div className="h-24 bg-red-200">

      </div>
      <div className="grid grid-cols-3 gap-5">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 -rotate-12">
            <div className="card">
              <img onClick={() => openModal(item)} src={item.image} className="h-48 border cursor-pointer" alt="..." />
              <ItemModal item={openModalItem} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
