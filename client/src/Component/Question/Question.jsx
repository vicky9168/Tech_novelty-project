import React,{useState} from 'react'

const Question = ({questionList}) => {
    const [showText, setShowText] = useState(false);

    const handleClick = () => {
      setShowText(!showText);
    };
  return (
    <div>
       <h3>FAQ</h3>
           {
          questionList.forEach((question) =>( 
          <div className="que-ans">
          {/* <p className="p1">jschadh dbcjccncnc</p> */}
            <p className="p1">{question.questionTitle}</p>
            <p className="p2">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ultrices enim, vel pulvinar nisl. */}
              {showText && (
                <div className="span2">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, repellat ducimus, illum nesciunt tempore eum nam alias, veniam saepe maiores reiciendis. Consequatur illo ullam earum blanditiis deserunt. Ipsum, error modi. */}
                {question.questionBody}
                </div>
              )}
            </p>
            <span className="main-span" onClick={handleClick}>
              {/* {showText ? <FontAwesomeIcon icon="fa-solid fa-minus" /> : <FontAwesomeIcon icon="fa-solid fa-minus" />} */}
              {showText ? (
                <i
                  class="fas fa-minus"
                  style={{ position: "relative", bottom: "40px" }}
                ></i>
              ) : (
                <i class="fas fa-plus"></i>
              )}
            </span>
          </div>
          ))
              }
    </div>
  )
}

export default Question
