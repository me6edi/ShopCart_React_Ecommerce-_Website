import React, { useState } from 'react'
const reviewtitle = "Add a Review";

let ReviewList = [ { imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, ];


const Review = () => {
    const [ reviewshow, setReviewShow] = useState(true)
  return (
    <>
            <ul className={`review-nav lab-ul ${reviewshow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={() => setReviewShow(!reviewshow)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(!reviewshow)}>Reviews 4</li>

                {/* desc & review content */}
                <div className={`review-content $ {reviewShow ? "review-content-show" : "description-show"}`}>
                    <div className="review-showing">
                        <ul className='content lab-ul'>
                                    {
                                        ReviewList.map()
                                    }
                        </ul>
                    </div>
                </div>
            </ul>
    </>
  )
}

export default Review