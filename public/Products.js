const products = [
    {
        id: 1,
        title: 'Broma Bed Side Table',
        img: 'https://i.ibb.co/DkhbkcM/bedroom-Img1.jpg',
        desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum',
        price: 50,
        stock: 15,
        category: 'bedroom'
    },
    {
        id: 2,
        title: 'Bachelor Bed',
        img: 'https://i.ibb.co/bs0dHk8/bedroom-Img2.jpg',
        desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are',
        price: 35,
        stock: 33,
        category: 'bedroom'
    },
    {
        id: 3,
        title: 'Bedroom Exclusive Mattress',
        img: 'https://i.ibb.co/DkhbkcM/bedroom-Img1.jpg',
        desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum',
        price: 199,
        stock: 5,
        category: 'bedroom'
    },
    {
        id: 4,
        title: 'Minimalist Mid-Century Modern Style Bed',
        img: 'https://i.ibb.co/w7h3bfD/bedroom-Img4.jpg',
        desc: 'It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters Many',
        price: 159,
        stock: 11,
        category: 'bedroom'
    },
    {
        id: 5,
        title: 'Josefa Queen Size Bed with Storage in Natural Teak Wood Finish',
        img: 'https://i.ibb.co/hXV0pbY/bedroom-Img5.jpg',
        desc: 'Josefa Queen Size Bed with Storage in Natural Teak Wood Finish There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even',
        price: 199.9,
        stock: 66,
        category: 'bedroom'
    },
    {
        id: 6,
        title: 'Round Dining Table without chair',
        img: 'https://i.ibb.co/nkNZ3kj/dining-Img1.jpg',
        desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes',
        price: 201,
        category: 'dining'
    },
    {
        id: 7,
        title: 'Twist Dining Table',
        img: 'https://i.ibb.co/0htKP1b/dining-Img2.jpg',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
        price: 288,
        stock: 36,
        category: 'dining'
    },
    {
        id: 8,
        title: 'Variable Product',
        img: 'https://i.ibb.co/BqWFCRm/dining-Img3.jpg',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of the text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humor, or non-characteristic words, etc. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
        price: 89.9,
        stock: 9,
        category: 'dining'
    },
    {
        id: 9,
        title: 'Josefa Queen Size Bed with Storage in Natural Teak Wood Finish',
        img: 'https://i.ibb.co/BqWFCRm/dining-Img3.jpg',
        desc: 'Josefa Queen Size Bed with Storage in Natural Teak Wood Finish There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even',
        price: 199.9,
        stock: 66,
        category: 'living'
    },
    {
        id: 10,
        title: 'Josefa Queen Size Bed with Storage in Natural Teak Wood Finish',
        img: 'https://i.ibb.co/hXV0pbY/bedroom-Img5.jpg',
        desc: 'Josefa Queen Size Bed with Storage in Natural Teak Wood Finish There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even',
        price: 199.9,
        stock: 66,
        category: 'living'
    },
    {
        id: 11,
        title: 'Josefa Queen Size Bed with Storage in Natural Teak Wood Finish',
        img: 'https://i.ibb.co/w7h3bfD/bedroom-Img4.jpg',
        desc: 'Josefa Queen Size Bed with Storage in Natural Teak Wood Finish There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even',
        price: 199.9,
        stock: 66,
        category: 'living'
    },
    {
        id: 12,
        title: 'Josefa Queen Size Bed with Storage in Natural Teak Wood Finish',
        img: 'https://i.ibb.co/f2Qw3mw/hospital-Utilitymg3.jpg',
        desc: 'Josefa Queen Size Bed with Storage in Natural Teak Wood Finish There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even',
        price: 199.9,
        stock: 66,
        category: 'living'
    },
    {
        id: 13,
        title: 'Josefa Queen Size Bed with Storage in Natural Teak Wood Finish',
        img: 'https://i.ibb.co/LdzTsVj/office-Chair-Img3.jpg',
        desc: 'Josefa Queen Size Bed with Storage in Natural Teak Wood Finish There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even',
        price: 199.9,
        stock: 66,
        category: 'living'
    },
    {
        id: 14,
        title: 'High back lounge office chairs',
        img: 'https://i.ibb.co/qkNSkHf/lounge-Img.jpg',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC',
        price: 499.9,
        stock: 2,
        category: 'lounge'
    },
    {
        id: 15,
        title: 'Developer Chair',
        img: 'https://i.ibb.co/bJ8XyxP/office-Chair-Img1.jpg',
        desc: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        price: 199.9,
        stock: 5,
        category: 'officeChair'
    },
    {
        id: 16,
        title: 'Grey Scandinavian Chair',
        img: 'https://i.ibb.co/yfgMPMr/office-Chair-Img2.jpg',
        desc: 'onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        price: 38,
        stock: 31,
        category: 'officeChair'
    },
    {
        id: 17,
        title: 'Optima High Back Chair',
        img: 'https://i.ibb.co/LdzTsVj/office-Chair-Img3.jpg',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC',
        price: 211.9,
        stock: 23,
        category: 'officeChair'
    },
    {
        id: 18,
        title: 'Simple Hospital Manual Patient Bed',
        img: 'https://i.ibb.co/r30qSZ5/hospital-Bed-Img.jpg',
        desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        price: 333,
        stock: 21,
        category: 'hospitalBed'
    },
    {
        id: 19,
        title: 'Hospital bed Tranquil',
        img: 'https://i.ibb.co/42Qj61H/hospital-Bed-Img2.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 666,
        stock: 14,
        category: 'hospitalBed'
    },
    {
        id: 20,
        title: 'Surgery Bed',
        img: 'https://i.ibb.co/Gv74JQ1/hospital-Bed-Img3.jpg',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC',
        price: 869.9,
        stock: 12,
        category: 'hospitalBed'
    },
    {
        id: 21,
        title: 'Wheelchair',
        img: 'https://i.ibb.co/YjGtP5P/hospital-Utilitymg1.jpg',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        price: 159.9,
        stock: 77,
        category: 'hospitalUtility'
    },
    {
        id: 22,
        img: 'https://i.ibb.co/YWBf5BN/hospital-Utilitymg2.jpg',
        title: 'Rollator walker lightweight 4 wheels folding',
        desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
        price: 119.9,
        stock: 19,
        category: 'hospitalUtility'
    },
    {
        id: 23,
        title: 'Hospital Reception Table',
        img: 'https://i.ibb.co/f2Qw3mw/hospital-Utilitymg3.jpg',
        desc: 'Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        price: 349.9,
        stock: 5,
        category: 'hospitalUtility'
    }
]